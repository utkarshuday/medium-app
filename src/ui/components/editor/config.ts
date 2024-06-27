import Blockquote from '@tiptap/extension-blockquote';
import BlockquoteKeymap from '@/lib/extension-blockquote-keymap';
import Bold from '@tiptap/extension-bold';
import Divider from './divider';
import Document from '@tiptap/extension-document';
import Heading from '@tiptap/extension-heading';
import History from '@tiptap/extension-history';
import Italic from '@tiptap/extension-italic';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Strike from '@tiptap/extension-strike';
import Text from '@tiptap/extension-text';

const DocumentWithTitle = Document.extend({
  content: 'title block*',
});

const Title = Heading.extend({
  name: 'title',
  group: 'title',
  marks: '',
  parseHTML: () => [{ tag: 'h1:first-child' }],
});

const CustomPlaceholder = Placeholder.configure({
  emptyNodeClass: 'placeholder-class',
  considerAnyAsEmpty: true,
  showOnlyCurrent: false,
  placeholder: ({ node, pos }) => {
    if (pos === 0) return 'Title';
    if (node.type.name === 'paragraph') return 'Tell your story...';
    return '';
  },
});

export const TiptapExtensions = [
  DocumentWithTitle,
  Title.configure({
    levels: [1],
    HTMLAttributes: {
      class: 'text-[44px] leading-tight font-normal mb-4',
    },
  }),
  Blockquote.configure({
    HTMLAttributes: {
      class:
        "blockquote italic relative mb-4 before:content-[''] before:h-full before:w-[3px] before:bg-[rgb(36,36,36)] before:absolute before:left-[-18px] before:top-0",
    },
  }),
  BlockquoteKeymap,
  Paragraph.configure({
    HTMLAttributes: {
      class: 'text-[21px] leading-[1.58] font-normal text-[#000000d6] mb-4',
    },
  }),
  Heading.extend({ marks: '' }).configure({
    levels: [2, 3],
    HTMLAttributes: {
      class: 'font-sans mb-4',
    },
  }),
  Text,
  CustomPlaceholder,
  Bold,
  Italic,
  Strike,
  History,
  // Divider,
];

export const TiptapEditorProps = {
  attributes: {
    class: 'editable-class focus:outline-none margin font-serif',
  },
};
