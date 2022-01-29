const express = require("express");
const auth = require("../middleware/auth");
const router = new express.Router();
const Lab = require("../models/lab");

router.post("/labs",async(req, res) => {
    const lab = new Lab(req.body);

    try{
        await lab.save();
        res.status(200).send({
            status: "ok",
            msg: "Successfully created the lab",
            data: lab
        });
    } catch (e) {
        res.status(400).send({
            status: "failed",
            msg: "Something went wrong!"
        });
    }
});

router.get("/labs", async (req, res) => {
    try{
        const lab = await Lab.find()
        res.status(200).send({
            staus: "ok",
            msg: "Successfully read all labs",
            data: lab
        });
    } catch(e) {
        res.status(400).send({
            status: "failed",
            msg: "Something went wrong",
            data: e,
        })
    }
});

router.get("/lab/:id", async (req, res) => {
    const _id = req.params.id

    Lab.findById(_id).then((lab) => {
        if(!lab) {
            return res.status(400).send({
                status: "failed",
                msg: "Lab not found!"
            })
        }
        res.status(200).send({
            status: "ok",
            msg: "Successfully found the lab",
            data: lab
        })
    }).catch((e) => {
        res.status(400).send({
            status: "failed",
            msg: "Something went wrong!",
          });

    })
});

module.exports = router;