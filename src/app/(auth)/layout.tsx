import LandingQuote from '@/components/auth/landing-quote';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='grid min-h-screen lg:grid-cols-2 grid-cols-1'>
      {children}
      <LandingQuote />
    </main>
  );
}
