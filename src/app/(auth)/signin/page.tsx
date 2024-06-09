import SigninForm from '@/ui/components/auth/signin';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signin',
};

export default function Signin() {
  return <SigninForm />;
}
