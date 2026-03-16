import { registerService, loginService, meService } from '../services/authService.js';  // npm install @service/auth  

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

export const loginController = async (req, res) => {
    try {
        const { email, password} = req.body
        if (!email || !password) {
            return res.status(400).json({ message: 'todos os campos são obrigatórios'})
        }
        const response = await loginService(email, password);
        return res.status(200).json(response);
    }
    catch (error) {
  console.error('Erro ao cadastrar usuario:', error.message)

  const statusCode = error.statusCode || 500
  const message = error.message || 'Erro interno do servidor'

  return res.status(statusCode).json({ message })
}

}

export const meController = async (req, res) => {
    try {
        const user = req.userId;
        const response = await meService(user);
        return res.status(200).json(response);
    } catch (error) {
        console.error('Erro ao obter informações do usuário:', error.message);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};