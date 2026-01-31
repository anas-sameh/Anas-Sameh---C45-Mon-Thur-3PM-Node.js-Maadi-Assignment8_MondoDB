import {AuthorModel} from "../../DB/models/index.js"

export async function createAuthor () {

    const result = await AuthorModel.insertOne({
        name: "Test Author",
        nationality: "Test Nationality",
        birthYear: 1990
  });

    if (!result) {
        throw new Error("Author not created" , {cause : {status:509}});
    }

    return result;
}