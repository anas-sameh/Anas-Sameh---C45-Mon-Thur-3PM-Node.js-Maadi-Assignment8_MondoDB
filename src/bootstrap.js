import express from 'express'
import { PORT } from "../config/env.services.js"
import { connectDB } from './DB/database.connection.js';
import { booksRouter } from './modules/books/index.js';
import { authorRouter } from './modules/author/index.js';
import { logsRouter } from './modules/logs/index.js';



const bootstrap = ()=>{
    const app = express();
    app.use(express.json());
    const port = PORT

    // DB CONNECTION 
    connectDB()

    // server test
    app.listen(port, () => { console.log(`Server is running on port ${port}`);});

    // routing 
    app.get("/",(req,res,next)=>{
        return res.status(200).json({message:"TASK 8"})
    })

    // routing for books

    app.use("/collection/books", booksRouter)

     // routing for authors 

    app.use("/collection/authors", authorRouter)

        // routing for logs 

    app.use("/collection/logs", logsRouter)


    // error handling 
    app.use((err,req,res,next)=>{
        const status = err?.cause?.status || 500;
        return res.status(status).json({message:"internal server error" , stack:err.stack})
    })


    // handle invaild routing 
    app.all("{/dummy}" , (req,res,next)=>{
        return res.status(404).json({"message":"invalid routing"})
    })
}


export default bootstrap