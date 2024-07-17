import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || 'secret';

interface JwtPayLoad {
    userId: number;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split('')[1];
    if (!token){
        res.status(401).json({error: 'Unauthorized'});
        return;
    }

    try {
        const decode = jwt.verify(token, jwtSecret) as JwtPayLoad;
        req.userId = decode.userId;
        next();
    } catch (error) {      
        res.status(401).json({error: 'Unauthorized'});
    }
}