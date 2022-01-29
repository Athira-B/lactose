const mongoose = require("mongoose");

const Appointmentschema = new mongoose.Schema(
  {
    patientid: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:'User'
    },
    date: {
      type: String,
      required: true,
    },
    // 61f3a568dca2c953a0275252
    doctorId: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
    },
    // 61f3a7172d4cbe443c39d66b
    hospitalid: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
    },
    desc: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Appointment=mongoose.model("Appointments",Appointmentschema)
module.exports=Appointment