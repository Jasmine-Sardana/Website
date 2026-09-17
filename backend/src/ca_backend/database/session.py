"""Database session management"""

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from ca_backend.core.settings import settings

engine = create_engine(
    settings.database_url,
    echo=True
)
# This does not create a session, but creates a session factory that can create sessions later
SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False
)

def get_db():
    """Provides a db session"""
    db = SessionLocal()

    try:
        yield db
    
    finally:
        db.close()