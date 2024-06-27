'use client';

import { EditorContent } from '@tiptap/react';
import { cn } from '@/ui/util';

import BubbleMenu from './bubble-menu';
import FloatingMenu from './floating-menu';
import useEditorSetup from '@/lib/hooks/use-editor-setup';

export default function TipTapEditor() {
  const { showMore, setShowMore, editor } = useEditorSetup();

  return (
    editor && (
      <>
        <FloatingMenu
          editor={editor}
          showMore={showMore}
          setShowMore={setShowMore}
        />
        <BubbleMenu editor={editor} />
        <EditorContent
          editor={editor}
          className={cn(
            showMore && editor.isActive('title') && 'hide-title-placeholder',
            showMore &&
              editor.isActive('paragraph') &&
              'hide-paragraph-placeholder'
          )}
        />
      </>
    )
  );
}
