const Employee = require("./employee.model");

// Create a New Employee : "/api/v1/employees/add-employee"  >>>> Method [POST]
exports.createEmployee = async (req, res) => {
    const employeeData = req.body;
    try {  
      const newEmployee = await Employee.create(employeeData);
      res.status(201).json(newEmployee);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
