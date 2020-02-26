import express from 'express';
import userController from '../controllers/userController';
import Auth from '../services/auth';

const router = express.Router();

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);
router.get('/', Auth.ensureToken, userController.getUsers)
export default router;
