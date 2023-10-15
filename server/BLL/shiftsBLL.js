const Shift = require("../models/shiftModel");

const getAllShifts = () => {
  return Shift.find();
};

const addShift = async (obj) => {
  const shift = new Shift(obj);
  await shift.save();
  return "Created";
};

const updateShift = async (id, obj) => {
  await Shift.findByIdAndUpdate(id, obj);
  return "Updated";
};

const deleteShift = async (id) => {
  await Shift.findByIdAndDelete(id);
  return "Deleted";
};

module.exports = { getAllShifts, addShift, updateShift, deleteShift };
