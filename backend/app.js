const express=require("express")
const cookieParser=require("cookie-parser")

const app=express()
const authRouter=require("./router/authRouter.js")
const databaseConnect=require("./config/databaseConfig.js")

databaseConnect()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth/",authRouter)

app.use("/",(req,res)=>{
    res.status(200).json({data:"JWTauth server"})
})

module.exports=app;