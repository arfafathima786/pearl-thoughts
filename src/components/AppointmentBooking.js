import React, { useState } from 'react';

const AppointmentBooking = ({ doctor }) => {
  // State to track the form input values
  const [patientName, setPatientName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  // Function to handle form submission
  const handleAppointmentBooking = (e) => {
    e.preventDefault();

    // Create an appointment object with the form data
    const appointmentData = {
      doctorId: doctor.id,
      patientName,
      appointmentDate,
      appointmentTime,
    };

    // Send the appointment request to the backend (You would make an API call here)
    // Example: bookAppointment(appointmentData).then(response => {...});

    // Reset the form fields after submission
    setPatientName('');
    setAppointmentDate('');
    setAppointmentTime('');
  };

  return (
    <div>
      <h1>Book an Appointment</h1>
      <form onSubmit={handleAppointmentBooking}>
        <div>
          <label htmlFor="patientName">Patient Name:</label>
          <input
            type="text"
            id="patientName"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="appointmentDate">Appointment Date:</label>
          <input
            type="date"
            id="appointmentDate"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="appointmentTime">Appointment Time:</label>
          <input
            type="time"
            id="appointmentTime"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentBooking;
