import prisma from '../config/prisma.js';
import jwt from 'jsonwebtoken'

export const findUserByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: { email }
    });
    
}

export const createUser = async (email, password, name) => {
    return await prisma.user.create({
        data: { email, password, name }
    });
}

export const generateToken = async (userId) => {
    return jwt.sign({userId}, process.env.JWT_SECRET,{expiresIn:'1h'})
}