"""Appointment schema for API"""

from pydantic import BaseModel, EmailStr
from datetime import datetime


class AppointmentCreate(BaseModel):
    """Recieves this response from frontend so we need to validate this"""
    name: str
    email: EmailStr
    phone: str
    service: str


class AppointmentsResponse(BaseModel):
    """Schema for the response to send back to frontend"""
    name: str
    email: EmailStr
    phone: str
    service: str
    created_at: datetime
