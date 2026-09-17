"""Appointment database model"""

from datetime import datetime

from sqlalchemy import String, DateTime
from sqlalchemy.orm import Mapped, mapped_column

from ca_backend.database.base import Base

class Appointment(Base):
    __tablename__="appointments"

    id:Mapped[int] = mapped_column(
        primary_key=True
    )

    name:Mapped[str] = mapped_column(
        String(100)
    )

    email:Mapped[str] = mapped_column(
        String(255)
    )

    phone:Mapped[str] = mapped_column(
        String(20)
    )

    service:Mapped[str] = mapped_column(
        String(100)
    )

    created_at:Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow
    )