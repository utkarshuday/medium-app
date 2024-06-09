import type { Metadata } from 'next';
import SignupForm from '@/ui/components/auth/signup';

export const metadata: Metadata = {
  title: 'Signup',
};

export default function Signup() {
  return <SignupForm />;
}
