//Contact Routes for contact form:-
import express from "express";
import { contactMessage } from "../controllers/contactController.js";
const router = express.Router();


//post:-
router.post('/contact', contactMessage);


export default router;