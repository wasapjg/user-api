import pool from '../utils/db';

export interface User {
    id?: number;
    username: string;
    password: string;
}

export const getAllUsers = async (): Promise<User[]> => {
    const [rows] = await pool.query('SELECT * FROM users');
    return rows as User[];
};

export const findUserByUsername = async (username: string): Promise<User | null> => {
    const query = pool.query('SELECT * FROM users WHERE username = ?', [username]);
    const [rows] = await query;
    const user = rows as User[];
    return user.length ? user[0] : null
}

export const createUser = async (user: User):Promise<void> => {
    await pool.query('INSERT INTO users (username, password) VALUES (?,?)', [user.username, user.password])
}