from sqlalchemy.orm import session

from ca_backend.models import Appointment
from ca_backend.schemas import AppointmentCreate
from ca_backend.services import appointment

class AppointmentRepository:
    """Handles appointments database operations"""

    def create(self,
               db:session,
               appointment_data:AppointmentCreate,
               ) -> appointment:
        
        """Create a new Appointment"""
        appointment = Appointment(
        name=appointment_data.name,
        phone=appointment_data.phone,
        email=appointment_data.email,
        service=appointment_data.service
        ) #this converts schema to db model
        
        db.add(appointment)
        db.commit()
        db.refresh(appointment)
        return appointment
    