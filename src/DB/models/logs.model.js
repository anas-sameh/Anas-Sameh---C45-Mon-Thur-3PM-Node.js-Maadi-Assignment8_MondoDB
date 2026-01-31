import {db} from "../database.connection.js"

export const LogsModel = await db.createCollection("logs" , {capped:true, size:10})








// import mongoose from "mongoose";


// const logsSchema = new mongoose.Schema({

//     title:{
//         require:true,
//         type:String,
//         uniqe:true, // indexing 
//     },
//     author:{
//         type:String,
//         require:true
//     },
//     year:{
//         require:true,
//         type:Date
//     },
//     genres:[String]

// },{

// })

// export const LogsModel = mongoose.models.log || mongoose.model("log",logsSchema)