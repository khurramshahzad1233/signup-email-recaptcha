import express from "express";
import { registerusercontroller, sendEmailcontroller } from "../controller/usercontroller.js";

const router=express.Router();

router.route("/user/register").post(registerusercontroller);
router.route("/user/sendemail").get(sendEmailcontroller);


export default router;