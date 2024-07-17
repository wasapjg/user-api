import { Router } from "express";
import { getUser, register, login } from '../controllers/userController';

const router = Router();

router.get('/', (req, res) => { res.send('Welcome to the user API!') });
router.get('/users', getUser);
router.post('/register', register);
router.post('/login', login);

export default router;