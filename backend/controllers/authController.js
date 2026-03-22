import User from "../models/authmodels.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
//AuthoController API for both Login and Signup :-

//Api for Login:-
export const Logincheck = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All Field are required"
            })
        }

        //user login check
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User Not Found"
            })
        }

        //password check
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid Password"
            })
        }


        //jwt token generate
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        return res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 1000
        }).status(200).json({
            success: true,
            token,
            message: "Login SuccessFully!"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error ! Login Failed ?"
        })
    }
}







//API For Signup:-
export const Signupcheck = async (req, res) => {
    try {
        const { name, email, password, confirmpassword } = req.body;
        if (!name || !email || !password || !confirmpassword) {
            return res.status(400).json({
                success: false,
                message: "All Field are required"
            })
        }

        //password match:-
        if (password !== confirmpassword) {
            return res.status(400).json({
                success: false,
                message: "Password not match with existing Password ! Try Again"
            })
        }

        //userexits:-
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }


        //hash password:-
        const hashpassword = await bcrypt.hash(password, 15)

        const user = await User.create({ name, email, password: hashpassword });


        //cookies generate:-
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 1000
        }).status(200).json({
            success: true,
            token,
            message: "Signup SuccessFully! Please Welcome to Note Manager App"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server Error ! Signup Failed :"
        })
    }
}