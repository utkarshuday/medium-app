export default function EditorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className='flex flex-col w-full my-16 px-7'>{children}</main>;
}
