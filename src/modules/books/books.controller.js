import { Router } from "express";
import { aggregate1, aggregate2, aggregate3, aggregate4, createBooks, createIndex, deleteBooks, filterBooks, findBookGenres, findBooks, findIntegerYears, ignorBookGenres, insertMany, insertOne, limitBooks, updateBooks } from "./books.services.js";
const router = Router()

router.post("/", async (req,res,next)=>{
    const result = await createBooks()
    return res.status(200).json({message:"books created successfully"  })  
})

router.post("/index", async (req,res,next)=>{
    const result = await createIndex()
    return res.status(200).json({message:"index created successfully" , result})  
})

router.post("/insertone", async (req,res,next)=>{
    const result = await insertOne(req.body)
    return res.status(200).json({message:"book inserted successfully" , result})  
})

router.post("/insertmany", async (req,res,next)=>{
    const result = await insertMany(req.body)
    return res.status(200).json({message:"books inserted successfully" , result})  
})

router.post("/update", async (req,res,next)=>{
    const result = await updateBooks(req.body)
    return res.status(200).json({message:"book updated successfully" , result})  
})

router.get("/find", async (req,res,next)=>{
    const result = await findBooks(req.query.title)
    return res.status(200).json({message:"book found successfully" , result})  
})

router.get("/filter", async (req,res,next)=>{
    const result = await filterBooks(req.query)
    return res.status(200).json({message:"book filtered successfully" , result})  
})

router.get("/genres", async (req,res,next)=>{
    const result = await findBookGenres(req.query.genres)
    return res.status(200).json({message:"book genres found successfully" , result})  
})


router.get("/limit", async (req,res,next)=>{
    const result = await limitBooks()
    return res.status(200).json({message:"book sorted by year successfully" , result})  
})

router.get("/integer-year", async (req,res,next)=>{
    const result = await findIntegerYears()
    return res.status(200).json({message:"found Integer Years successfully " , result})  
})

router.get("/exclude-genres", async (req,res,next)=>{
    const result = await ignorBookGenres()
    return res.status(200).json({message:"genres excluded  successfully " , result})  
})

router.delete("/delete-before", async (req,res,next)=>{
    const result = await deleteBooks(req.query)
    return res.status(200).json({message:"genres excluded  successfully " , result})  
})

router.get("/aggregate1", async (req,res,next)=>{
    const result = await aggregate1(req.query.year)
    return res.status(200).json({message:"books  filtred by years  successfully " , result})  
})


router.get("/aggregate2", async (req,res,next)=>{
    const result = await aggregate2(req.query.year)
    return res.status(200).json({message:"books  filtred  and projected by years  successfully " , result})  
})

router.get("/aggregate3", async (req,res,next)=>{
    const result = await aggregate3()
    return res.status(200).json({message:"genres  unwinded  and projected by years  successfully " , result})  
})

router.get("/aggregate4", async (req,res,next)=>{
    const result = await aggregate4()
    return res.status(200).json({message:" Join the books collection with the logs  successfully " , result})  
})


export default router