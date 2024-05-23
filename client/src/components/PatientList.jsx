import React, { useEffect, useState } from 'react';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('https://patient-management-qmf4.onrender.com/patients');
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div>
      <h2>Patient List</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient._id}>{patient.name} - {patient.age} - {patient.condition}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;