"""Appointments API"""

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ca_backend.database.session import get_db
from ca_backend.schemas import (AppointmentCreate, AppointmentsResponse)
from ca_backend.services import AppointmentService

service = AppointmentService()
router = APIRouter(
    prefix="/appointments",
    tags=["Appointments"])


@router.post("", response_model=AppointmentsResponse)
def create_appointment(
    appointment_data: AppointmentCreate,
    db: Session = Depends(get_db),
):

    return service.create_appointment(db=db, appointment_data=appointment_data)
