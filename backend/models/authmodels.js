import mongoose from "mongoose";

//authmodel for user:-
export const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: false },
    password: { type: String, required: true },
},
    { timestamps: true });

const User = mongoose.model("User", UserSchema)
export default User;

