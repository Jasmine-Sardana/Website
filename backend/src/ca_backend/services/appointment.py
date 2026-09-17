"""Service layer for appointments """

from sqlalchemy.orm import session

from ca_backend.models import Appointment
from ca_backend.schemas import AppointmentCreate
from ca_backend.repositories import AppointmentRepository

class AppointmentService:
    """Handles appointment business logic"""
    def __init__(self):
        self.repository=AppointmentRepository()
    
    def create_appointment(
            self,
            db:session,
            appointment_data:AppointmentCreate
    )-> Appointment:
        return self.repository.create(
            db=db,
            appointment_data=appointment_data
        )