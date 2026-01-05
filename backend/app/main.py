from fastapi import FastAPI

app = FastAPI(title="RedlineIQ Backend")

@app.get("/health")
def health():
    return {"ok": True}