import dotenv from "dotenv"
import connectDB from "./db/index.js"


dotenv.config({
    path: './env'
})

connectDB().then(()=>{
    app.on("error",(error)=>{
        console.log("ERR:",error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("MONGODB connection Failed !!", err);
    
})






















/*
//This approach is good but we are not going follow this method--> because is polluted;
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        //if our app is connected to dataBase, but express is not able to talk with dataBase then--->
        app.on("error",(error)=>{
            console.log("ERR:",error);
            throw error;
        })

        //if our dataBase is connected succesfully then Listen the responses-->
        app.listen(process.env.PORT, ()=>{
            console.log(`App is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
})*/
//Do it in a Another File