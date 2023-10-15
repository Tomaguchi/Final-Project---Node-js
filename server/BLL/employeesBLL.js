const Employee = require("../models/employeeModel");

const getAllEmployees = () => {
  return Employee.find();
};

const getEmployeeById = (id) => {
  return Employee.findById(id);
};

const addEmployee = async (obj) => {
  const employee = new Employee(obj);
  await employee.save();
  return "Created";
};

const updateEmployee = async (id, obj) => {
  await Employee.findByIdAndUpdate(id, obj);
  return "Updated";
};

const deleteEmployee = async (id) => {
  await Employee.findByIdAndDelete(id);
  return "Deleted";
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
