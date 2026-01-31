import {Router} from 'express'
import { createAuthor } from './author.services.js'
const router = Router()


router.post("/", async (req,res,next)=>{
    const result = await createAuthor()
    return res.status(200).json({message:"author created successfully", result})
})

export default router