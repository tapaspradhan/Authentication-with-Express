const express=require("express")

const app=express()
const authRouter=require("./router/authRouter.js")
const databaseConnect=require("./config/databaseConfig.js")


app.use(express.json())
app.use("/api/auth/",authRouter)
databaseConnect()
app.use("/",(req,res)=>{
    res.status(200).json({data:"JWTauth server"})
})

module.exports=app;