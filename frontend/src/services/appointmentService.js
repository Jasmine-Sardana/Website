/**Central place where we configure how our frontend talks to the backend*/

import api from "./api";

export const createAppointment = async (appointmentData) => {
  const response = await api.post("/appointments", appointmentData);
  return response.data;
};