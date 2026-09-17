"""Main entry point of the application"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ca_backend.core.settings import settings
from ca_backend.database import init_db
from ca_backend.api import appointment_router


app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    description="Backend for the website"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(appointment_router)


@app.on_event("startup")
def startup_event() -> None:
    """Initialize application resource"""
    init_db()


@app.get("/", tags=["Health"])
def root():
    return {
        "message": f"{settings.app_name} is running"
    }