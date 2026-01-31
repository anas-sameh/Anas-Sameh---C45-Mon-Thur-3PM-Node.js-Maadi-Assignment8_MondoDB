import { Router } from "express";
import { createlogs, insertLogs } from "./logs.services.js";
const router = Router()

router.post("/", async (req,res,next)=>{
    const result = await createlogs()
    return res.status(200).json({message:"logs created (cappced) successfully" })  
})

router.post("/insert", async (req,res,next)=>{
    const result = await insertLogs(req.body)
    return res.status(200).json({message:"logs inserted successfully" , result })  
})


export default router