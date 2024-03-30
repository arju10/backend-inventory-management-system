const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    EmpID: {
        type: String,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true,
    },
    MobileNo:{
        type: String,
        required: true,
    },
    Designation:{
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Order:{
        type: String,
        required: true,
    },
    Department: {
        type: String,
        required: true,

        // type: mongoose.Schema.Types.ObjectId,
        // ref:'Department',
        // required: true
    },
    Acive:{
        type: Boolean,
    },

  });
  const Employee = mongoose.model('Employee', employeeSchema);

  module.exports = Employee;

