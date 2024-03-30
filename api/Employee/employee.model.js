const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    empID: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    mobileNo:{
        type: String,
        required: true,
    },
    designation:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
    order:{
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,

        // type: mongoose.Schema.Types.ObjectId,
        // ref:'Department',
        // required: true
    },
    acive:{
        type: Boolean,
    },

  });
  const Employee = mongoose.model('Employee', employeeSchema);

  module.exports = Employee;

