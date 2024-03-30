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

// GET all Employees : "/api/v1/employees/allEmployees"  >>>> Method [GET]

exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a Employee by ID : "/api/v1/employees/update-employee/:id"  >>>> Method [PUT]

exports.updateEmployee = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Delete a Employee by ID : "/api/v1/employees/delete-employee/:id"  >>>> Method [DELETE]

exports.deleteEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(id);
        if (!deletedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json({
             success: true,
             deletedEmployee 
            });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
