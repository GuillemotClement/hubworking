import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
  const salt = 10;
  return await bcrypt.hash(password, salt);
};

export const confirmPassword = async (
  password: string,
  hashPassword: string,
) => {
  return await bcrypt.compare(password, hashPassword);
};
