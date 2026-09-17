"""Database initialization"""

from ca_backend.database.base import Base
from ca_backend.database.session import engine

from ca_backend.models import Appointment

def init_db() -> None:
    """creates all db tables"""

    Base.metadata.create_all(bind=engine)