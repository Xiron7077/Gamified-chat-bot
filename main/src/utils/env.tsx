import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

export const getEnvVariable = (key: string): string => {
  const value = process.env[key];
  console.log(value)
  if (!value) {
    throw new Error(`Environment variable ${key} not found`);
  }
  return value;
};
