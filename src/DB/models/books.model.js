import {db} from "../database.connection.js"

export const BooksModel = await db.createCollection("books")



// import mongoose from "mongoose";
// const booksSchema = new mongoose.Schema({

//     title:{
//         required:true,
//         type:String,
//         unique:true, // indexing 
//     },
//     author:{
//         type:String,
//         required:true
//     },
//     year:{
//         required:true,
//         type:Number
//     },
//     genres:[String]

// },{
//     timestamps: true
// })

// export const BooksModel = mongoose.models.Book || mongoose.model("Book",booksSchema)