const express = require("express");
const app = express();
require("./db/conn");
require("dotenv").config({ path: "./config.env" });
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/invoice.route.js"));

app.use("/", require("./routes/customer.route.js"));

app.get("/", (req, res) => {
  res.send("home");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
