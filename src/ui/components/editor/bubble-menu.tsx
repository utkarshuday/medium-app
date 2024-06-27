import { BubbleMenu, Editor } from '@tiptap/react';
import { cn } from '@/ui/util';

import BoldIcon from '../icons/bold-icon';
import ItalicIcon from '../icons/italic-icon';
import StrikethroughIcon from '../icons/strikethrough-icon';
import BiggerFontIcon from '../icons/bigger-font-icon';
import SmallerFontIcon from '../icons/smaller-font-icon';
import QuoteIcon from '../icons/quote-icon';

export default function BubbleMenuEditor({ editor }: { editor: Editor }) {
  return (
    <BubbleMenu
      className="bg-[linear-gradient(to_bottom,rgba(49,49,47,0.99),#262625)] text-white flex items-center py-2 px-2 gap-1 rounded-lg after:content-[''] after:absolute after:w-0 after:h-0 after:-translate-x-2/4 after:border-t-[#262625] after:border-[7px] after:border-solid after:border-transparent after:left-2/4 after:top-full"
      tippyOptions={{ duration: 100 }}
      editor={editor}
    >
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.isActive('paragraph') ||
          !editor.can().chain().focus().toggleBold().run()
        }
        className={cn(
          editor.isActive('bold') && 'text-[#b5e5a4]',
          'disabled:text-gray-500'
        )}
      >
        <BoldIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.isActive('paragraph') ||
          editor.isActive('blockquote') ||
          !editor.can().chain().focus().toggleItalic().run()
        }
        className={cn(
          editor.isActive('italic') && 'text-[#b5e5a4]',
          'disabled:text-gray-500'
        )}
      >
        <ItalicIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.isActive('paragraph') ||
          !editor.can().chain().focus().toggleStrike().run()
        }
        className={cn(
          editor.isActive('strike') && 'text-[#b5e5a4]',
          'disabled:text-gray-500'
        )}
      >
        <StrikethroughIcon />
      </button>
      <div className='w-[1px] h-6 bg-white/[0.2] mx-1.5' />
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        disabled={
          (!editor.isActive('paragraph') && !editor.isActive('heading')) ||
          !editor.can().chain().focus().toggleHeading({ level: 2 }).run()
        }
        className={cn(
          editor.isActive('heading', { level: 2 }) && 'text-[#b5e5a4]',
          'mr-1 disabled:text-gray-500'
        )}
      >
        <BiggerFontIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        disabled={
          (!editor.isActive('paragraph') && !editor.isActive('heading')) ||
          !editor.can().chain().focus().toggleHeading({ level: 3 }).run()
        }
        className={cn(
          editor.isActive('heading', { level: 3 }) && 'text-[#b5e5a4]',
          'mr-0.5 disabled:text-gray-500'
        )}
      >
        <SmallerFontIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        disabled={!editor.can().chain().focus().toggleBlockquote().run()}
        className={cn(
          editor.isActive('blockquote') && 'text-[#b5e5a4]',
          'disabled:text-gray-500'
        )}
      >
        <QuoteIcon />
      </button>
    </BubbleMenu>
  );
}
