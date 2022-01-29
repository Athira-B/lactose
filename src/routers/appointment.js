const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const Appointment = require("../models/appointment");
router.post("/create-appointment", async (req, res) => {
  const appointment = new Appointment(req.body);
  try {
    await appointment.save();
    res.status(200).send({
      status: "ok",
      msg: "Successfully created appointment",
      data: appointment,
    });
  }catch(err) {
    res.status(400).send({
        status: "failed",
        msg: "Something went wrong",
        error: err
       });
  }
});
router.get("/appointments/me",auth,async(req,res)=>{
    const _id = req.params.id
    Appointment.find({patientid:req.user._id}).then((apmnt) => {
        if(!apmnt) {
            return res.status(400).send({
               status: "failed",
               msg: "Appointment not found!"
            })
        }
        res.send(apmnt)
    } ).catch((e) => {
        res.status(400).send({
            status: "failed",
            msg: "Something went wrong",
          });

    })
 });


router.get("/appointment", async (req, res) => {
     try{
      const appointment = await Appointment.find(); 
      res.send({
         status: "ok",
         msg: "Successfully read all appointments",
         data: appointment
      });
   }catch(e) {
      res.status(400).send({
         status: "failed",
         msg: "Something went wrong",
         data: e,
     });
   }
});

router.get("/appointment/:id", async (req, res) => {
   const _id = req.params.id

   Appointment.findById(_id).then((appointment) => {
      if(!appointment) {
         return res.status(400).send({
            status: "failed",
            msg: "Appointment not found!"
         })
      }
      res.status(200).send({
         status: "ok",
         msg: "Got the data",
         data: appointment
      })
   }).catch((e) => {
      res.status(400).send({
         status: "failed",
         msg: "Something went wrong"
       });
   })
});


module.exports = router;
