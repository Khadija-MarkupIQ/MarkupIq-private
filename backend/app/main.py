from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from pydantic import BaseModel
from supabase import create_client

from .config import SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

# ------------------------------------------------------------------------------
# App initialization
# ------------------------------------------------------------------------------
app = FastAPI(title="RedlineIQ Backend")

# ------------------------------------------------------------------------------
# CORS (must be added immediately after app creation)
# ------------------------------------------------------------------------------
origins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://redline-iq.vercel.app",
    "https://www.redline-iq.vercel.app",
    # Keep only if still used:
    "https://markup-iq-private.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Handle preflight requests explicitly (optional, but safe to keep for now)
@app.options("/{path:path}")
def preflight_handler(path: str):
    return Response(status_code=200)

# ------------------------------------------------------------------------------
# Supabase setup
# ------------------------------------------------------------------------------
if not SUPABASE_URL or not SUPABASE_SERVICE_ROLE_KEY:
    raise RuntimeError("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

# ------------------------------------------------------------------------------
# Models
# ------------------------------------------------------------------------------
class ProjectCreate(BaseModel):
    name: str
    user_id: str | None = None

# ------------------------------------------------------------------------------
# Routes
# ------------------------------------------------------------------------------
@app.get("/")
def root():
    return {
        "ok": True,
        "service": "RedlineIQ Backend",
        "health": "/health",
        "docs": "/docs",
        "projects": "/projects",
    }

@app.get("/favicon.ico")
def favicon():
    return Response(status_code=204)

@app.get("/health")
def health():
    return {"ok": True}

@app.post("/projects")
def create_project(payload: ProjectCreate):
    resp = (
        supabase.table("projects")
        .insert({"name": payload.name, "user_id": payload.user_id})
        .execute()
    )

    if not resp.data:
        raise HTTPException(status_code=500, detail="Failed to create project")

    return resp.data[0]

@app.get("/projects")
def list_projects(user_id: str | None = None):
    query = supabase.table("projects").select("*").order("created_at", desc=True)

    if user_id:
        query = query.eq("user_id", user_id)

    resp = query.execute()
    return resp.data