import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
dotenv.config();

const app = express();

app.get('/health', (req, res) => {
    res.status(200).json({ message: 'API está funcionando' });
});

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});