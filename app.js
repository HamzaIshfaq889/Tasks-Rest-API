const express = require("express");
const app = express();
const router = require("./routes/products");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const customeError = require("./middleware/custom-error");
const port = 5000;
require("dotenv").config();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/v1/tasks", router);

// Middleware not-found
app.use(notFound);
app.use(customeError);

const start = () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is linstening on port ${port}`);
    });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

start();
