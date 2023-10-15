const express = require("express");
const shiftsBLL = require("../BLL/shiftsBLL");
const Shift = require("../models/shiftModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const shifts = await shiftsBLL.getAllShifts();
    res.send(shifts);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await shiftsBLL.addShift(obj);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await shiftsBLL.updateShift(id, obj);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await shiftsBLL.deleteShift(id);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
