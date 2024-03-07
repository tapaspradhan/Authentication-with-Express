const mongoogse=require("mongoose")
const {Schema}=mongoogse

const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        minLength:[5, "Name must be 5 charactor"],
        maxLength:[20, "Name must be 5 charactor"],
        true:true
    },
    email:{
        type:String,
        required:[true, "user name is required"],
        unique:true,
        lowercase:true,
        unique:[true,"already register"]
    },
    password:{
        type:String,
        select:false
    },
    forgotPasswordToken:{
        type:String
    },
    forgotPasswordExpiryDate:{
        type:Date
    }
},{
    timestamps:true
})

const userModel=mongoogse.model("user",userSchema)

module.exports=userModel;