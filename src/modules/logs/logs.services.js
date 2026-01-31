import {LogsModel} from "../../DB/models/index.js"
import { ObjectId } from 'mongodb';
export async function createlogs () {

    const result = await LogsModel.insertOne({
        action : "updated",
        date :Date(),
        bookId : new ObjectId("697d14dc98f6dbbda5e3e919")
  });

    if (!result) {
        throw new Error("Books not created" , {cause : {status:509}});
    }

    return result;
}



export async function insertLogs (inputs) {

    const {action} = inputs
    const result = await LogsModel.insertOne({action});

    if (!result) {
        throw new Error("Books not created" , {cause : {status:509}});
    }

    return result;
}
