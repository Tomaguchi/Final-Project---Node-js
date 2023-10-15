const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    externalId: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    startWorkYear: { type: Number, required: true },
    departmentId: Number,
  },
  { versionKey: false }
);

const Employee = mongoose.model("employee", employeeSchema, "employees");

module.exports = Employee;
