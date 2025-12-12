import { findUserByEmail, createUser } from '../repositories/authRepository.js';

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
  const existingUser = await findUserByEmail(email);
  
   if (existingUser) {
    throw new Error('Email já em uso');
  }
  
  const user = await createUser(email, password, name);
  return { message: 'Usuário registrado com sucesso' };
}
