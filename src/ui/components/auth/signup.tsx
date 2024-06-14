'use client';

import { useFormState, useFormStatus } from 'react-dom';

import Form from './form';
import Header from './header';
import Input from './input';
import SubmitButton from './submit-button';
import { signup } from '@/lib/actions/signup';

export default function Signup() {
  const [state, dispatch] = useFormState(signup, undefined);
  return (
    <Form action={dispatch}>
      <Header
        title='Create an account'
        subtitle='Already have an account?'
        link='signin'
      />
      <Input label='Name' placeholder='Enter your name' name='name' />
      <Input label='Email' placeholder='m@example.com' name='email' />
      <Input
        type='password'
        label='Password'
        placeholder='Enter your password'
        name='password'
      />
      <SubmitButton>Sign Up</SubmitButton>
    </Form>
  );
}
