import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
        const connectionRes = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDB Connected!! DB HOST: ${connectionRes.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection FAILED",error);
        process.exit(1)//express has it own keys that refence to currrent process or App runnging--{we simply exiting from this process//}
        //Read about process and exit process
    }
}

export default connectDB;