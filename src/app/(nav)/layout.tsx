import { BlogLayout } from '@/ui/components/blog-layout';
import NavBar from '@/ui/components/nav/nav-bar';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <BlogLayout>{children}</BlogLayout>
    </>
  );
}
