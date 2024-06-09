import Button from './button';
import Form from './form';
import Header from './header';
import Input from './input';

export default function Signup() {
  return (
    <Form>
      <Header
        title='Create an account'
        subtitle='Already have an account?'
        link='signin'
      />
      <Input label='Username' placeholder='Enter your username' />
      <Input label='Email' placeholder='m@example.com' />
      <Input
        type='password'
        label='Password'
        placeholder='Enter your password'
      />
      <Button>Sign Up</Button>
    </Form>
  );
}
