const mongoose = require("mongoose");

const shiftSchema = new mongoose.Schema(
  {
    externalId: { type: Number, required: true },
    date: { type: Date, required: true },
    startingHour: { type: Number, required: true },
    endingHour: { type: Number, required: true },
    workers: { type: [String], required: true },
  },
  { versionKey: false }
);

const Shift = mongoose.model("shift", shiftSchema, "shifts");

module.exports = Shift;
