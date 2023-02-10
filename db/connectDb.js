const mongoose = require("mongoose");

const connect = async (url) => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(url).then((res) => {
    console.log("Database is connected");
    return res;
  });
};
module.exports = connect;
