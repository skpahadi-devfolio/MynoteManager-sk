//Contact api logic for contact page:-
import Contact from "../models/contactform.js";

export const contactMessage = async(req, res) => {
    try {
        const {name, email, message} = req.body;
        if( !name  || !email  || !message ){
            return res.status(400).json({
                success: false,
                message: "All Field are required"
            })
        }
            await Contact.create({name, email, message});
           return res.status(201).json({
            success: true,
            message: "Your Form Sent SuccessFully!"
           })
       
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal server for contact form"
        })
    }
}