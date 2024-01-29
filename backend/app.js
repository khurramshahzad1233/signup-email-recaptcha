import express from "express";
import Errormiddleware from "./middleware/error.js"
import bodyparser from "body-parser";
import cors from "cors";
import user from "./routes/userroute.js"


const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());

app.use("/api",user)


app.use(Errormiddleware)
export default app;