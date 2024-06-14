import { BlogLayout } from '@/ui/components/blog-layout';
import NavBar from '@/ui/components/nav/nav-bar';

export default function NewBlog() {
  return (
    <>
      <NavBar isPublish={true} />
      <BlogLayout>Hello</BlogLayout>
    </>
  );
}
