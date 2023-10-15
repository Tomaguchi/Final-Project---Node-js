const express = require("express");
const employeesBLL = require("../BLL/employeesBLL");
const Shift = require("../models/shiftModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const employees = await employeesBLL.getAllEmployees();
    res.send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await employeesBLL.getEmployeeById(id);
    res.send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    console.log(obj);
    const result = await employeesBLL.addEmployee(obj);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await employeesBLL.updateEmployee(id, obj);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await employeesBLL.deleteEmployee(id);
    await Shift.updateMany({ workers: id }, { $pull: { workers: id } });
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
