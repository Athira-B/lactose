const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const AmbulanceSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    phone:{
        type:Number,
        required:true,
        valide(value){
            if(value.length<10)
            {
                throw new Error("Invalid number")
            }
        }
    },
    place:{
        type:String,
        required:true,
        trim:true,
    },
  },
    {
        timestamps: true,
    }
)

const Ambulance = mongoose.model("ambulance", AmbulanceSchema);

module.exports = Ambulance;