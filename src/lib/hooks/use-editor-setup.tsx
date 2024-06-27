import {
  TiptapEditorProps,
  TiptapExtensions,
} from '@/ui/components/editor/config';
import { useEditor } from '@tiptap/react';
import { useEffect, useState } from 'react';

export default function useEditorSetup() {
  const [showMore, setShowMore] = useState(false);
  const editor = useEditor({
    extensions: TiptapExtensions,
    editorProps: TiptapEditorProps,
    content: `
        <h1></h1>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
    `,
  });

  useEffect(() => {
    if (editor) {
      editor.commands.focus(3);
    }
  }, [editor]);

  useEffect(() => {
    return () => {
      if (editor) {
        editor.destroy();
      }
    };
  }, [editor]);

  useEffect(() => {
    if (!editor) return;
    const handleFocus = () => {
      setShowMore(false);
    };
    editor.on('focus', handleFocus);
    return () => {
      editor.off('focus', handleFocus);
    };
  }, [editor]);

  return { showMore, editor, setShowMore };
}
