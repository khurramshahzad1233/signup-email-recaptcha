import { createTransport } from "nodemailer";

const sendEmail=async(from,subject,text)=>{
    const transporter=createTransport({
        service:"gmail",
        host:"smtp.gmail.com",
        // port:465,
        port:587,
        // secure:true,
        auth:{
            user:"ambreenkhurram004@gmail.com",
            pass:"itba jnlo fber ipoi",
        }
    });
    await transporter.sendMail({
        to:"khurram002300@gmail.com",
        from:"khurram@gmail.com",
        subject:"test",
        text:"hellow sir"

    })
}
export default sendEmail;