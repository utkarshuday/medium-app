import { Extension } from '@tiptap/core';
import { handleBackspace } from './handle-backspace';

export default Extension.create({
  name: 'blockquoteKeymap',
  addKeyboardShortcuts() {
    return {
      Backspace: ({ editor }) => {
        let handled = false;
        if (handleBackspace(editor)) handled = true;
        return handled;
      },
    };
  },
});
