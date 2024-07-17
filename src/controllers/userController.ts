import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {User, getAllUsers, findUserByUsername, createUser} from '../models/userModel';

const jwtSecret = process.env.JWT_SECRET || 'secret';

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({error: err.message});
    }
}

export const register = async (req: Request, res: Response) => {
    try {
        const {username, password} = req.body;

        const existingUser = await findUserByUsername(username);
        if (existingUser) {
            res.status(400).json({error: 'User already exists'});
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user: User = {
            username,
            password: hashedPassword
        }

        await createUser(user);
        res.status(201).json({message: 'User created successfully'});
    }
    catch (error) {
        const err = error as Error;
        res.status(500).json({error: err.message});
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const {username, password} = req.body;

        const user = await findUserByUsername(username);
        if (!user) {
            res.status(400).json({error: 'Invalid username or password'});
            return;
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            res.status(400).json({error: 'Invalid username or password'});
            return;
        }

        const token = jwt.sign({username}, jwtSecret, {expiresIn: '1h'});
        res.status(200).json({token});
    }
    catch (error) {
        const err = error as Error;
        res.status(500).json({error: err.message});
    }
}