import {db} from "../database.connection.js"

export const AuthorModel = await db.createCollection("author")