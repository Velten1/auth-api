import { findUserByEmail, createUser, generateToken, findUserById } from '../repositories/authRepository.js';
import bcrypt from 'bcryptjs'


export const registerService = async (email, password, name) => {
    if (password.length < 6) {
        throw new Error('A senha deve ter pelo menos 6 caracteres');
}
    if (!/[A-Z]/.test(password)) {
    throw new Error("A senha deve conter ao menos uma letra maiúscula.");
  }
  
   if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    throw new Error("A senha deve conter pelo menos um caractere especial.");
  }

  const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

  const existingUser = await findUserByEmail(email);
  
   if (existingUser) {
    throw new Error('Email já em uso');
  }
  
  const user = await createUser(email, hashedPassword, name);
  const {password: _, ...userWithoutPassword} = user
  return {status: 201, data: {...userWithoutPassword}}
}

export const loginService = async (email, password) => {
  const user = await findUserByEmail(email);

  if (!user){
    throw new Error('Email está incorreto')
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword){
    throw new Error('senha está incorreto')
  }

  const token = generateToken(user.id);
  const { password: _, ...userWithoutPassword } = user;
  return { status: 200, data: { token, user: userWithoutPassword } }
  
}

export const meService = async (userId) => {
  const user = await findUserById(userId);
  if (!user) {
    throw new Error('Usuário não encontrado');
  }
  const { password: _, ...userWithoutPassword } = user;
  return { status: 200, data: userWithoutPassword };
};
