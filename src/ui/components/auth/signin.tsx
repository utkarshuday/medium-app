'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { signin } from '@/lib/actions/signin';

import Button from './button';
import Form from './form';
import Header from './header';
import Input from './input';
import SubmitButton from './submit-button';

export default function Signin() {
  const [state, formAction] = useFormState(signin, undefined);
  return (
    <Form action={formAction}>
      <Header
        title='Login to your account'
        subtitle={`Don't have an account yet?`}
        link='signup'
      />
      <Input name='email' label='Email' placeholder='m@example.com' />
      <Input
        name='password'
        type='password'
        label='Password'
        placeholder='Enter your password'
      />
      <SubmitButton>Login</SubmitButton>
    </Form>
  );
}
