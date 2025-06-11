import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
  const salt = 10;
  return await bcrypt.hash(password, salt);
};

export const checkPassword = async (password: string, hashPassword: string) => {
  return bcrypt.compare(password, hashPassword);
};
