const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const labSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    address:{
        type:String,
        required:true,
        trim:true,
    },
    phone:{
        type:Number,
        required:true,
        valide(value){
            if(value.length<6)
            {
                throw new Error("Invalid number")
            }
        }
    },
    rating:{
        type:Number,
        required:true,
        trim:true,
    }
},
    {
      timestamps: true,
    }
);  

const Lab = mongoose.model("labs", labSchema);

module.exports = Lab;