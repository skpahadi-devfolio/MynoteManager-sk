import express, { Router } from "express";
import { Addnotes, Deletenotes, Editnotes, Getnotes } from "../controllers/notesController.js";
import { authmiddleware } from "../middleware/authmiddleware.js";
const router = express.Router();


//routes for ALl Notes with CRUD:-

//get router for note:-
router.get('/notes',authmiddleware, Getnotes);


//post router for addnotes:-
router.post('/addnotes',authmiddleware, Addnotes);


//put router for editnotes:-
router.put('/edit/:id',authmiddleware, Editnotes);


//delete router for deletenotes:-
router.delete('/delete/:id',authmiddleware, Deletenotes);

export default router;