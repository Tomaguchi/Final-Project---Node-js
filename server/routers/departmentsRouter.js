const express = require("express");
const departmentsBLL = require("../BLL/departmentsBLL");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const departments = await departmentsBLL.getAllDepartments();
    res.send(departments);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const department = await departmentsBLL.getDepartmentById(id);
    res.send(department);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await departmentsBLL.addDepartment(obj);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await departmentsBLL.updateDepartment(id, obj);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await departmentsBLL.deleteDepartment(id);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
