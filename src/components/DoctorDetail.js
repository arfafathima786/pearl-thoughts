import React from 'react';

const DoctorDetail = ({ doctor }) => {
  return (
    <div>
      <h1>Doctor Details</h1>
      <p>Name: {doctor.name}</p>
      <p>Specialty: {doctor.specialty}</p>
      {/* Add more doctor details here */}
    </div>
  );
};

export default DoctorDetail;
