require("dotenv").config();
const express = require("express");
const app = express();
const taskRoute = require("./routes/task");
const connect = require("./db/connectDb");
const notFound = require("./middlewares/notFound");
const errorMiddleware = require("./middlewares/error");
// middlewares
app.use(express.json());
// routes
app.use("/api/v1/tasks", taskRoute);

//not found middlewares
app.use("*", notFound);
// error middleware
app.use(errorMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connect(process.env.DB_URI);
    app.listen(port, () => {
      console.log(`app is running at port ${port} ...`);
    });
  } catch (e) {
    console.log(e);
  }
};
start();
