export function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex flex-col max-w-[700px] w-full mx-auto px-5 my-16'>
      {children}
    </main>
  );
}
