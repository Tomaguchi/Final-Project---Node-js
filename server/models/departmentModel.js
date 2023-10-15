const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    externalId: { type: Number, required: true },
    name: { type: String, required: true },
    manager: { type: Number, required: true },
    workers: { type: [String], required: true },
  },
  { versionKey: false }
);

const Department = mongoose.model("department", departmentSchema, "departments");

module.exports = Department;
