const express = require("express");
const auth = require("../middleware/auth");
const router = new express.Router();
const User = require("../models/users");
const multer = require("multer");


router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(200).send({ 
      status: "ok",
      msg: "Successfully created user",
      data: user, token
    });
  } catch (e) {
    res.status(400).send({
      status: "failed",
      msg: "Something went wrong!"
    });
  }
});

router.get("/users/me", auth, async (req, res) => {
    res.status(200).send({
      status: "ok",
      msg: "Got the data",
      data: req.user
    });
  });

  
  router.post("/users/login", async (req, res) => {
    try {
      const user = await User.findByCredentials(
        req.body.email,
        req.body.password
      );
      const token = await user.generateAuthToken();
      res.status(200).send({
        status: "ok",
        msg: "Logged in",
        data: user, token 
      });
    } catch (err) {
      res.status(404).send({
        status: "ok",
        msg: "User not Found!"
      })
    }
  });
  router.post("/users/logout", auth, async (req, res) => {
    try {
      req.user.tokens = req.user.tokens.filter(
        (token) => token.token != req.token
      );
      await req.user.save();
      res.statu(200).send({
        status: "ok",
        msg: "loggged out"
      });
    } catch (err) {
      res.status(404).send({
        status: "failed",
        msg: "please authenticate"
      });
    }
  });

module.exports = router;