const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const drSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    job_position: {
      type: String,
      required: true,
      trim: true,
    },
    qualification: {
      type: String,
      required: true,
      trim: true,
    },
    specification: {
      type: String,
      required: true,
      trim: true,
    },
    hospital_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
    },
    exprnc: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
const Doctor = mongoose.model("doctors", drSchema);

module.exports = Doctor;
