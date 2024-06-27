import TipTapEditor from '@/ui/components/editor';
import EditorLayout from '@/ui/components/editor/editor-layout';
import NavBar from '@/ui/components/nav/nav-bar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Blog',
};

export default function NewBlog() {
  return (
    <>
      <NavBar isPublish={true} />
      <EditorLayout>
        <TipTapEditor />
      </EditorLayout>
    </>
  );
}
