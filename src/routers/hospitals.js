const express = require("express");
const auth = require("../middleware/auth");
const router = new express.Router();
const Hospital = require("../models/hospital");



router.post("/hospitals", async (req, res) => {
      const hosp = new Hospital(req.body);
    
    try{
        await hosp.save();
        res.status(200).send({
            status: "ok",
            msg: "Successfully created hospital",
            data: hosp
        });
    } catch (e) {
        res.status(400).send({
            status: "failed",
            msg: "Something went wrong!"
        });
    }
});

router.get("/hospitals" , async (req, res) => {
    try{
        const hospital = await Hospital.find()
        res.status(200).send({
            status: "ok",
            msg: "Successfully read all hospitals",
            data: hospital
        });
    } catch(e){
        res.status(400).send({
            status: "failed",
            msg: "Something went wrong",
            data: e,
        })
    }

});
router.get("/hospital/:id", async ( req, res) => {
    const _id = req.params.id

    Hospital.findById(_id).then((hospital) => {
        if(!hospital) {
            return res.status(400).send({
                status: "failed",
                msg: "Hospital not found!",
            })
        }
        res.status(200).send({
            status: "ok",
            msg: "Successfully read Hospital",
            data: hospital
        })
    } ).catch((e) => {
        res.status(400).send({
            status: "failed",
            msg: "Something went wrong!",
          });

    })
   
});




module.exports = router;