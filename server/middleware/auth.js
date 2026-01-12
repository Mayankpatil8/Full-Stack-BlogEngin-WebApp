import jwt from "jsonwebtoken";

const auth = (req, res, next)=>{
    const token = req.headers.authorization;

    try {
        if (!token) {
            return res.json({success: false, message: "Your account cannot be authenticated."})
        }
        
        jwt.verify(token, process.env.JWT_SECRET)
        next();
    } catch (error) {
        res.json({success: false, message: "Your account cannot be authenticated."})
    }
}

export default auth;