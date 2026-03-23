//ALl Notes logic:-
import Note from "../models/notesmodels.js";

//get:-
export const Getnotes = async(req, res)=>{
    try {
       const notes = await Note.find({user: req.user.id});

        return res.status(200).json({
            success: true,
            message: "Showing Your SuccessFully!",
            data: notes
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to showing you Note"
        })
    }
}




//Add notes:-
export const Addnotes = async(req, res) => {
    try {
        const{title, notes} = req.body;
        if(!title || !notes){
            return res.status(400).json({
                success: false,
                message: "Empty Field are required"
            })
        }
      const newNotes =  await Note.create({title, notes, user: req.user.id})
        return res.status(200).json({
            success: true,
            message: "Add Your Note SuccessFully!",
            data: newNotes
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to Add you note in app"
        })
    }
}





//Edit note:-
export const Editnotes = async(req, res) => {
    try {
        const{id} = req.params;
        const{title, notes} = req.body;
        
        const UpdateNote = await Note.findOneAndUpdate({_id: id, user: req.user.id},{title,notes, },{new:true});

        if(!UpdateNote){
            return res.status(404).json({
                success: false,
                message: "Note not Found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Update Note SuccessFully!",
            data: UpdateNote
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to load note for edit"
        })
    }
}






//Delete api:-
export const Deletenotes = async(req, res)=>{
    try {
        const{id} = req.params;

        const deletenote = await Note.findOneAndDelete({_id: id, user: req.user.id});

        if(!deletenote){
            return res.status(404).json({
                success: false,
                message: "Note not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Deleted Note SucessFully!"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to Delete the Note"
        })
    }
}