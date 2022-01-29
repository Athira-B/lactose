const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const TestreportSchema=mongoose.Schema(
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
   
      doctorId: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
      },
  
      hospitalid: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
      },

      appointmentid: {
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

const Testreport = mongoose.model("Testreport", TestreportSchema);
module.exports = Testreport;