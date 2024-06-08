import NavBar from '@/ui/components/nav/nav-bar';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main className='flex flex-col max-w-[700px] w-full mx-auto px-5 my-16'>
        {children}
      </main>
    </>
  );
}
