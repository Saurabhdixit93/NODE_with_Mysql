const express = require("express");
const { sequelize } = require("./configuration/Databse");
const PORT = 5000;
const app = express();
const dotenv = require("dotenv").config();

// Middle Wares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", require("./routers"));

// Server and DB
sequelize
  .sync()
  .then(() => {
    console.log("DB Connected");
    app.listen(PORT, () => {
      console.log("Server Running in :", PORT);
    });
  })
  .catch((error) => {
    console.log("Error In Connecting Db :", error);
  });
