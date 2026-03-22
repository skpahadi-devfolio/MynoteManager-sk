//Auth Routes for Both Login and User:-
import express from "express";
import { Logincheck, Signupcheck } from "../controllers/authController.js";
const router = express.Router();


//Login Router:-
router.post('/auth/login', Logincheck);


//Signup Router:-
router.post('/auth/signup', Signupcheck);


export default router;