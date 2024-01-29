import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs"

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"],
        minLength:[6,"name should be more then 6 character"],
        match:[/^[a-zA-Z0-9]+$/,"name should be alphanumeric value"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email address"],
        unique:true,
        validate:validator.isEmail
    },
    password:{
        type:String,
        required:[true,"Please enter password"],
        select:false,
        minLength:[7,"Password should be more then 7 characters"],
        validate: [
            {
              validator: function (value) {
                const uppercaseRegex = /[A-Z]/;
                const lowercaseRegex = /[a-z]/;
                const numberRegex = /[0-9]/;
                const symbolRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
      
                return (
                  uppercaseRegex.test(value) &&
                  lowercaseRegex.test(value) &&
                  numberRegex.test(value) &&
                  symbolRegex.test(value)
                );
              },
              message: '[7, "Password must be complex with at least one uppercase letter, one lowercase letter, one number, and one symbol"]',
            },
          ],
    }
});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next()
    };
    this.password=await bcrypt.hash(this.password,10);
    next()
});

userSchema.methods.comparepassword=async function(password){
    return await bcrypt.compare(password, this.password)
};



const userdata=mongoose.model("user",userSchema);

export default userdata;