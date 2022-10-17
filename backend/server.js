const express = require("express")
const app = express()
const dotenv = require("dotenv")
const database = require("./Config/database")
const cors = require("cors")
const morgan = require("morgan")

require("dotenv").config()
app.use(express.json())
app.use(morgan('tiny'))

var corsOption={
    origin:"http://localhost:3000",
    optionSuccessStatus:200
  }
  
  app.use(cors("corsOption"))


const Users=require("./Routers/Users_router")
const Login = require("./Routers/Users_router")
const Articles = require("./Routers/Article_router")
const commandes = require("./Routers/Commande_router") 
const livraison = require("./Routers/Livraison_router")
const serviceRep = require ("./Routers/ServiceRep_router")


app.use("/users",Users)
app.use("/users",Login)
app.use("/articles",Articles)
app.use("/commande",commandes)
app.use("/livraisons",livraison)
app.use("/servicerep",serviceRep)

app.get("/getImage/:img",function(req,res){
    res.sendFile(__dirname + "/storages/"+ req.params.img)
    })



const PORT = process.env.PORT


app.listen(PORT,function () {
    console.log(`server running on http://localhost:${PORT}`)
}
);
