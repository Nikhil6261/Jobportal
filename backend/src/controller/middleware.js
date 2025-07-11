import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
    
    console.log(token);
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        
        req.user = decoded; 
        
        next(); 
    
    } catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};