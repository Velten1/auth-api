import express from 'express';
import { registerController, loginController, meController} from '../controllers/authController.js';

const router = express.Router();
    
router.post('/register', registerController);
router.post('/login', loginController);
router.get('/me', meController);

export default router  