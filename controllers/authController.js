import { registerService } from '../services/authService.js';  // npm install @service/auth                    

export const registerController = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        if (!email || !password || !name) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }
        const response = await registerService(email, password, name);
        return res.status(200).json(response);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao registrar usuário', error: error.message });
        
    }
}