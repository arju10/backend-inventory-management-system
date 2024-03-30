const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const connectDatabase = require("./utils/dbConnect");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


// Connect Database
connectDatabase();


// import routes
// Employee Route
const employeeRoutes = require('./api/Employee/employee.route')
app.use('/api/v1/employees',employeeRoutes)





app.get("/", (req, res) => {
  res.send("Server is Running!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});