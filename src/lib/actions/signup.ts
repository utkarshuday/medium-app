'use server';

import { z } from 'zod';
import bcrypt from 'bcrypt';
import prisma from '../../db';

const schema = z.object({
  name: z.string(),
  password: z.string().min(6),
  email: z.string().email(),
});

export async function signup(prevState: any, formData: FormData) {
  const parse = schema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    name: formData.get('name'),
  });
  if (!parse.success) return { message: 'Invalid format' };

  const { email, password, name } = parse.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) return { message: 'Invalid credentials' };

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { message: 'User created' };
}
