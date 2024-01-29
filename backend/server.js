import app from "./app.js";
import dotenv from "dotenv"

if(process.env.NODE_ENV!=="PRODUCTION"){
    dotenv.config({path:"config.env"})
};

import mongoose from "mongoose";
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB);
  console.log("database connected")

  }



app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})