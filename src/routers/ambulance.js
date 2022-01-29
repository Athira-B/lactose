const express = require("express");
const auth = require("../middleware/auth");
const router = new express.Router();
const Ambulance = require("../models/ambulance");



router.post("/ambulance", async (req,res) => {
    const ambulance = new Ambulance(req.body);
    try{
        await ambulance.save();
        res.status(200).send({
            status: "ok",
            msg: "Successfully created ambulance",
            data: ambulance, 
        });
    } catch(e) {
        res.status(400).send({
            status: "failed",
            msg: "Something went wrong",
            data: e,
        });
    }
});

router.get("/ambulance" , async (req, res) => {
    try{
        const ambulance = await Ambulance.find()
        res.status(200).send({
            status: "ok",
            msg: "Successfully read all ambulance",
            data: ambulance,
        });
    } catch(e){
        res.status(400).send({
            status: "failed",
            msg: "Something went wrong",
            data: e,
        })
    }
});

router.get("/ambulance/:id", async ( req,res) => {
    const _id = req.params.id

    Ambulance.findById(_id).then((ambulance) => {
        if(!ambulance) {
            return res.status(400).send({
                    status: "failed",
                    msg: "Ambulance not found!",
                    });
        }
        res.status(200).send({
            status: "ok",
            msg: "Successfully read all ambulance",
            data: ambulance,
        });
    }).catch((e) => {
        res.status(400).send({
            status: "failed",
            msg: "Something went wrong",
          });

    })
});

module.exports = router;