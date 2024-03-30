const express = require('express');
const router = express.Router();

const Employee = require("./employee.model");
const { createEmployee } = require('./employee.controller');

// Here will be Employee Related API
router.route('/add-employee').post(createEmployee);



module.exports = router;