import jwt from "jsonwebtoken";

export const authmiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if(!token){
        return res.status(400).json({
            success: false,
            message: "No Token is added"
        })
    }

    try {
        const decoded = jwt.verify(token, "secretkey");
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid Token"
        })
    }
}