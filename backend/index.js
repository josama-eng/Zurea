const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth.route");
const MONGO_DB_URL = require("./config/db.config");
const productRoute = require("./routes/product.route");
const categoryRoute = require("./routes/category.route");
const path = require("path");
const portNumber = 5050;

mongoose.set("strictQuery", false);
// connect to mongo DB

mongoose
  .connect(MONGO_DB_URL)
  .then((data) => {
    console.log("Mongo DB is connected.");
  })
  .catch((error) => {
    console.error(error);
    console.error("Error while connecting to mongo DB.");
  });
// communicate with external servers
app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

//routes
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);

app.listen(portNumber, (error) => {
  if (error) {
    console.log("---ERROR ON SERVER START---");
    console.log(error);
  } else {
    console.log(`Server is running on port: ${portNumber}`);
  }
});
