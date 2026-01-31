import { BooksModel } from "../../DB/models/books.model.js";


export async function createBooks () {

    const result = await BooksModel.insertOne({
        title: "Test Book",
        author: "Test Author",
        year: 2024,
  });

    if (!result) {
        throw new Error("Books not created" , {cause : {status:509}});
    }

    return result;
}


export async function createIndex () {

    const result = await BooksModel.createIndex({ title: 1})

    if (!result) {
        throw new Error("index not created" , {cause : {status:509}});
    }

    return result;
}


export async function insertOne (inputs) {
    const {title, author, year , genres} = inputs

    const result = await BooksModel.insertOne({
        title: title,
        author: author,
        year: year,
        genres : genres
  });

    if (!result) {
        throw new Error("the Book not inserted" , {cause : {status:509}});
    }

    return result;
}


export async function insertMany (inputs) {
    const result = await BooksModel.insertMany(inputs)
    
    if (!result) {
        throw new Error("Books not inserted" , {cause : {status:509}});
    }

    return result;
}

export async function updateBooks (inputs) {
    const { title , year} = inputs
    const result = await BooksModel.updateOne({title: title},{$set: {year: year}})
    
    if (!result) {
        throw new Error("Books not updated" , {cause : {status:509}});
    }

    return result;
}

export async function findBooks (inputs) {
    const  title  = inputs
    const result = await BooksModel.findOne({title: title})
    
    if (!result) {
        throw new Error("Books not found" , {cause : {status:509}});
    }

    return result;
}

export async function filterBooks (inputs) {
    const  {from, to}  = inputs    
    const result = await BooksModel.find({year:{ $gte: from, $lte: to }}).toArray()
    
    if (result.length === 0) {
        throw new Error("Books not found" , {cause : {status:509}});
    }

    return result;
}


export async function findBookGenres (inputs) {
    const  genres  = [].concat(inputs)
    
    const result = await BooksModel.find({genres: {$in: genres}}).toArray()
    
    if (result.length === 0) {
        throw new Error("Books not found" , {cause : {status:509}});
    }

    return result;
}


export async function limitBooks () {
    const result = await BooksModel.find().sort({year: -1}).skip(2).limit(3).toArray()
    
    if (result.length === 0) {
        throw new Error("Books not found" , {cause : {status:509}});
    }

    return result;
}

export async function findIntegerYears() {
    const result = await BooksModel.find({year : {$type : 16 }}).toArray()
    
    if (result.length === 0) {
        throw new Error("Books not found" , {cause : {status:509}});
    }

    return result;
}

export async function ignorBookGenres (inputs) {
    const  genres  = ["action" , "horror"]
    
    const result = await BooksModel.find({genres: {$nin: genres}}).toArray()
    
    if (result.length === 0) {
        throw new Error("Books not found" , {cause : {status:509}});
    }

    return result;
}

export async function deleteBooks (inputs) {
    const {year} = inputs
    const result = await BooksModel.deleteMany({year: {$lte: year}})
    
    if (!result) {
        throw new Error("Books not found" , {cause : {status:509}});
    }

    return result;
}

export async function aggregate1 (inputs) {
    const year = inputs
    console.log(year);
    

    const  aggregate1 = [
        { 
            $match: { 
                year: { $gt: year } 
            } 
        },
        
        { 
            $sort: { 
                year: -1 
            } 
        }
    ];


    const result = await BooksModel.find({} , {aggregate1}).toArray()
    
    if (result.length === 0) {
        throw new Error("Books not found" , {cause : {status:509}});
    }

    return result;
}

export async function aggregate2 (inputs) {
    const year = Number(inputs)
    
    const  aggregate2 = [
        { 
            $match: { 
                year: { $gt: year } 
            } 
        },
        {
            $project: {
                author: 1,   
                title: 1 ,
                year:1 ,
            }
        }
    ];


    const result = await BooksModel.aggregate(aggregate2).toArray()
    
    if (result.length === 0) {
        throw new Error("books  filtred  and projected by years failed " , {cause : {status:509}});
    }

    return result;
}

export async function aggregate3 () {
    
    const  aggregate3 = [
        { 
           $unwind: "$genres" 
        },
        {
            $project: {
               title: 1,
                genres: 1
            }
        }
    ];


    const result = await BooksModel.aggregate(aggregate3).toArray()
    
    if (result.length === 0) {
        throw new Error("books  filtred  and projected by years failed " , {cause : {status:509}});
    }

    return result;
}

export async function aggregate4 () {
    
    const  aggregate3 = [
        {
            $lookup: {
                from: "logs",           
                localField: "_id",        
                foreignField: "bookId",   
                as: "book action"             
            }
        },
    ];


    const result = await BooksModel.aggregate(aggregate3).toArray()
    
    if (result.length === 0) {
        throw new Error("books  filtred  and projected by years failed " , {cause : {status:509}});
    }

    return result;
}