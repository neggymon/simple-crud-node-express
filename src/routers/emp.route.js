const express = require('express');
const router = express.Router();

const empController = require('../controllers/emp.controller');

// get All Employee
router.get('/', empController.getAllEmployee);

// get employee by Id
router.get('/:id', empController.getEmployeeById);

// create new employee
router.post('/', empController.createNewEmployee);

// update employee
router.put('/:id', empController.updateEmployee);

// delete employee
router.put('/:id', empController.deleteEmployee);

module.exports = router;