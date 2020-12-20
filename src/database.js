import mongoose from "mongoose";
import config from "./config";

(async () => {
  try {
   
    const db = await mongoose.connect(config.mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    
    });
    console.log("database is connect to: ", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
