import Button from './button';
import Form from './form';
import Header from './header';
import Input from './input';

export default function Signin() {
  return (
    <Form>
      <Header
        title='Login to your account'
        subtitle={`Don't have an account yet?`}
        link='signup'
      />
      <Input label='Email' placeholder='m@example.com' />
      <Input
        type='password'
        label='Password'
        placeholder='Enter your password'
      />
      <Button>Login</Button>
    </Form>
  );
}
