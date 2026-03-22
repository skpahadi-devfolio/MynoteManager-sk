import mongoose from "mongoose";

export const connectDb = async() =>{
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/MyNoteManagerapp")
        console.log("MongoDb is Connected SuccessFully!");
    } catch (error) {
        console.log("Database Connection failed:", error);
    }
}

export default connectDb;