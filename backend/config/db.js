import mongoose from "mongoose";

export const connectDb = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDb is Connected SuccessFully!");
    } catch (error) {
        console.log("Database Connection failed:", error);
    }
}

export default connectDb;