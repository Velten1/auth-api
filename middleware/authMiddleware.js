import jwt from 'jsonwebtoken'; // Importa a biblioteca jsonwebtoken para lidar com tokens JWT

const authMiddleware = (req, res, next) => { 
  try { 
    // req.cookies só existe se você usar cookie-parser; sem ele, pode ser undefined.
    // Como você está usando Authorization: Bearer <token>, priorizamos o header e evitamos crash.
    const token =
      req.headers.authorization?.split(' ')[1] ||
      req.cookies?.token;

    if (!token) {
      return res.status(401).json({ message: 'Token não fornecido' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.userId;

    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        message: 'Token expirado', 
        expired: true,
        code: 'TOKEN_EXPIRED'
      });
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ 
        message: 'Token inválido',
        code: 'TOKEN_INVALID'
      });
    }
    return res.status(401).json({ message: 'Token inválido', code: 'TOKEN_ERROR' });
  }
};

export default authMiddleware;