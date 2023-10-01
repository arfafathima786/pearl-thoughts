// DoctorList.js
import React, { useEffect, useState } from 'react';
import { getDoctors } from './api'; // Import your API service

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctors when the component mounts
    getDoctors()
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error('Error fetching doctors:', error);
      });
  }, []);

  return (
    <div>
      <h1>Doctors List</h1>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
