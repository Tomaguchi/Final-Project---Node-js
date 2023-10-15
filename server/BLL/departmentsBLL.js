const Department = require("../models/departmentModel");

const getAllDepartments = () => {
  return Department.find();
};

const getDepartmentById = (id) => {
  return Department.findById(id);
};

const addDepartment = async (obj) => {
  const department = new Department(obj);
  await department.save();
  return "Created";
};

const updateDepartment = async (id, obj) => {
  await Department.findByIdAndUpdate(id, obj);
  return "Updated";
};

const deleteDepartment = async (id) => {
  await Department.findByIdAndDelete(id);
  return "Deleted";
};

module.exports = {
  getAllDepartments,
  getDepartmentById,
  addDepartment,
  updateDepartment,
  deleteDepartment,
};
