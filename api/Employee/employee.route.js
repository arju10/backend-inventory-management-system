const express = require('express');
const router = express.Router();

const Employee = require("./employee.model");
const { createEmployee, getAllEmployees } = require('./employee.controller');

// Here will be Employee Related API
router.route('/add-employee').post(createEmployee);
router.route('/allEmployees').get(getAllEmployees);



module.exports = router;