const express = require("express");
const auth = require("../middleware/auth");
const router = new express.Router();
const Testreport = require("../models/testreport");



router.post("/testreport", async (req,res) => {
    const testreport = new Testreport(req.body);

    try{
        await testreport.save();
        res.status(200).send({
            status: "ok",
            msg: "Successfully created test report",
            data: testreport
        });
    } catch (e) {
        res.status(400).send({
            status: "ok",
            msg: "Something went wrong!"
        });
    }
});

router.get("/testreport", async (req, res) => {
    try{
        const testreport = await Testreport.find()
        res.status(200).send({
            status: "ok",
            msg: "Successfully read all test reports",
            data: testreport
        });
    } catch(e){
        res.status(400).send({
            status: "failed",
            msg: "Something went wrong",
            data: e,
        })
    }
});

router.get("/testreport/:id", async (req, res) => {
    const _id = req.params.id

    Testreport.findById(_id).then((testreport) => {
        if(!testreport) {
            return res.status(400).send({
                status: "failed",
                msg: "Test report not found!"
            })
        }
        res.status(200).send({
            status: "ok",
            msg: "Successfully read the test report",
            data: testreport
        })
    }).catch((e) => {
        res.status(400).send({
            status: "failed",
            msg: "Something went wrong!",
          });
    })
});

module.exports = router;