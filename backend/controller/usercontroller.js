import catchasyncerror from "../middleware/catchasyncerror.js";
import Errorhandler from "../utils/errorhandler.js";
import userdata from "../model/userschema.js";
import sendEmail from "../utils/sendEmail.js"



export const registerusercontroller=catchasyncerror(async(req,res,next)=>{
    const {name,email,password}=req.body;
    
    if(!name){
        return next(new Errorhandler("Please enter your name,400"))
    }
    if(!email){
        return next(new Errorhandler("Please enter email address"))
    }
    if(!password){
        return next(new Errorhandler("Please enter password"))
    };

    let user=await userdata.findOne({email});
    if(user){
        return next(new Errorhandler("user already exist",409))
    };

    user=await userdata.create({name,email,password});
    res.status(200).json({
        success:true,
        message:"user register successfully",
        user
    })
})



export const sendEmailcontroller=catchasyncerror(async(req,res,next)=>{
    // const {email,subj,message}=req.body;
    const sendemail=await sendEmail();
    res.status(200).json({
        success:true,
        message:"email send successfully",
        // sendEmail
    })
})

