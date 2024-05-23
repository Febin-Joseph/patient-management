import React, { useState } from 'react';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';

const App = () => {
  const [patients, setPatients] = useState([]);

  const addPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  return (
    <div className="App">
      <h1>Patient Management System</h1>
      <PatientForm onAddPatient={addPatient} />
      <PatientList />
    </div>
  );
};

export default App;