import express from "express";
const app = express();
import { configDotenv } from "dotenv";

app.get('/',(req,res)=>{
    res.send("<>Hello My name is Tushar!</>")
})

const port = process.env.PORT || 3000; 
app.listen(port,()=>{
    console.log(`Server is running on Port ${port}!!!!`);
})

