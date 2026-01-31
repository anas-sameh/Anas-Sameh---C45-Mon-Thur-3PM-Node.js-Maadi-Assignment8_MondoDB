// import mongoose from "mongoose"
import {MongoClient} from "mongodb"
import {DB_HOST , DB_NAME} from "../../config/env.services.js"

const client = new MongoClient(DB_HOST , { serverSelectionTimeoutMS: 5000 })

export const connectDB  = async ()=>{
    try {
         await client.connect()
         console.log("DB succssfully ✅");
         
    } catch (error) {
        console.log(`failed to connect on DB ❌ ${error}`);
        
    }
}
export const db = client.db(DB_NAME);






// import { DB_HOST } from "../../config/env.services.js";

// export const connectDB = async ()=>{
//     try{
//         await mongoose.connect(DB_HOST , {serverSelectionTimeoutMS:3000});
//         console.log("DB CONNECTED");
        
//     } catch (error) {
//         console.error("Database connection error:", error);
//     }
// }