const mongoose = require("mongoose");
require("dotenv").config({ path: "../config.env" });

mongoose
  .connect(
    "mongodb+srv://vishalphirkoj:vishalphirkoj@cluster0.iyqod.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`Connected to DB`);
  })
  .catch((err) => console.log(err));
