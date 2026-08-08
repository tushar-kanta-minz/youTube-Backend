import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
    //exploration of cors and its features
}));
//we can use cors object and modification
app.use(express.json({limit: "16kb"}))//from form

//if data comes from URL- use of extra character and all
app.use(express.urlencoded({extended:true, limit:"16kb"}))//nested object possible
app.use(express.static("public"))//if user Inputs any file, Images. So it static it will be stored for easy access
app.use(cookieParser())


export {app};