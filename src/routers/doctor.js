const express = require("express");
const router = new express.Router();
const Doctor = require("../models/doctor");

router.post("/create-doctor", async (req, res) => {
  const doctor = new Doctor(req.body);
  try {
    await doctor.save();
    res.status(200).send({
      status: "ok",
      msg: "Successfully created doctor",
      data: doctor,
    });
  } catch (e) {
    res.status(400).send({
      status: "failed",
      msg: "Something went wrong",
    });
  }
});

router.get("/doctors",async(req,res)=>{

  try{ 
    const docspec = req.query.specification
    let doctors
    if(docspec!=undefined){
      doctors = await Doctor.find({specification:docspec})
    }
    else{
        doctors = await Doctor.find()
    }
   
    res.status(200).send({
        status: "ok",
        msg: "Successfully read doctors",
        data: doctors,
    })
}catch(e){
    console.log(e)
    res.status(400).send({
        status: "failed",
        msg: "Something went wrong",
        data: e,
    })
} 
});



router.get("/doctor/:id", async ( req, res) => {
  const _id = req.params.id
  
  Doctor.findById(_id).then((doctor) => {
   
    if(!doctor) {
      return res.status(400).send({
        status: "failed",
        msg: "Doctor not found!",
        
      })
    }
    res.status(200).send({
      status: "ok",
      msg: "Successfully found the doctor",
      data: doctor
    })
  }).catch((e) => {
    res.status(400).send({
      status: "failed",
      msg: "Something went wrong!",
    });

  })

});


module.exports = router;
