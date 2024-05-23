const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

// Input validation to prevent injection
const validateInput = (input) => {
  const invalidPatterns = [/admin' --/, /105 OR 1=1/, /" or ""="/];
  return !invalidPatterns.some((pattern) => pattern.test(input));
};

// Get all patients
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new patient
router.post('/', async (req, res) => {
  const { name, age, condition } = req.body;

  if (!validateInput(name) || !validateInput(condition)) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  const patient = new Patient({
    name,
    age,
    condition
  });

  try {
    const newPatient = await patient.save();
    res.status(201).json(newPatient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;