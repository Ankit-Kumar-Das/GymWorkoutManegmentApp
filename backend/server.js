require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const workoutRoutes = require("./routes/workoutes");
const PORT = process.env.PORT || 8000;
// express app
const app = express();
app.use(cors())
// middlewere
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listening for request
    app.listen(PORT, (req, res) => {
      console.log("mongodb connected and listeneing on port 8000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
