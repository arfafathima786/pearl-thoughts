// api.js
import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getDoctors = () => {
  return api.get('/doctors');
};

export const getDoctorDetails = (doctorId) => {
  return api.get(`/doctors/${doctorId}`);
};

export const bookAppointment = (appointmentData) => {
  return api.post('/appointments', appointmentData);
};

