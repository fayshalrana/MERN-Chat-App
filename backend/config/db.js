const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://imfayshalrana:TpvcfpyqrOdEks6Z@cluster0.rfh23qs.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1); // exit process with failure
  }
};

module.exports = connectDB;
