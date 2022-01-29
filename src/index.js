const express = require("express");
const userRouter = require("./routers/user");
const hospitalRouter = require("./routers/hospitals");
const doctorRouter=require("./routers/doctor");
const appointmentRouter=require("./routers/appointment");
const labRouter=require("./routers/lab");
const testreportRouter=require("./routers/testreport");
const ambulanceRouter=require("./routers/ambulance");
var cors = require('cors')
require("./db/mongoose");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(userRouter)
app.use(hospitalRouter)
app.use(doctorRouter)
app.use(appointmentRouter)
app.use(labRouter)
app.use(testreportRouter)
app.use(ambulanceRouter)
app.use(cors())

app.listen(port, () => {
    console.log("server running on port "+port);
  });