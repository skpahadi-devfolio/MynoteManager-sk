import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import contactRoute from "./routes/contactRoute.js"
import authRoute from "./routes/authRoute.js"
import noteRoutes from "./routes/noteRoutes.js"
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
const app = express()
const PORT = process.env.PORT || 3000

//dotenv:-
dotenv.config();
//accept different server to each other for comunication
app.use(cors({origin: "https://mynotemanager-skweb.netlify.app",credentials: true}));

//http cookies for JWT:-
app.use(cookieParser());

//middleware for everything
app.use(express.json());

//datbase connection
connectDb();

app.get('/', (req, res) => {
  res.send('Your Backend is Running SuccessFully!')
})


//All Routes section:-
app.use('/api', contactRoute)    //This is Contact route
app.use('/api', authRoute)       //This is Auth route for both Login and signup
app.use('/api', noteRoutes)      //This is note route for CRUD operation

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
