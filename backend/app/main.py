from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from supabase import create_client

from .config import SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

app = FastAPI(title="RedlineIQ Backend")

@app.get("/health")
def health():
    return {"ok": True}

if not SUPABASE_URL or not SUPABASE_SERVICE_ROLE_KEY:
    raise RuntimeError("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

class ProjectCreate(BaseModel):
    name: str
    user_id: str | None = None

@app.post("/projects")
def create_project(payload: ProjectCreate):
    resp = supabase.table("projects").insert({
        "name": payload.name,
        "user_id": payload.user_id
    }).execute()
    if not resp.data:
        raise HTTPException(status_code=500, detail="Failed to create project")
    return resp.data[0]

@app.get("/projects")
def list_projects(user_id: str | None = None):
    q = supabase.table("projects").select("*").order("created_at", desc=True)
    if user_id:
        q = q.eq("user_id", user_id)
    resp = q.execute()
    return resp.data
