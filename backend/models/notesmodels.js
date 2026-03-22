import mongoose from "mongoose";

export const NoteSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    notes: { type: String, required: true, trim: true }
},
{ timestamps: true });

const Note = mongoose.model("Note", NoteSchema)
export default Note;