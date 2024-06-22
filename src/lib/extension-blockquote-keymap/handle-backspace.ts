import { Editor, isNodeActive, isAtStartOfNode } from '@tiptap/core';
import { hasBlockquoteBefore } from './has-blockquote-before';

export function handleBackspace(editor: Editor) {
  if (editor.commands.undoInputRule()) {
    return true;
  }
  if (
    !isNodeActive(editor.state, 'blockquote') &&
    hasBlockquoteBefore(editor.state)
  ) {
    const { from } = editor.state.selection;
    const newPosition = from - 3;

    if (newPosition >= 0) {
      editor.chain().focus().setTextSelection(newPosition).run();
    }
    return true;
  }

  if (!isNodeActive(editor.state, 'blockquote')) {
    return false;
  }

  if (!isAtStartOfNode(editor.state)) {
    return false;
  }
  return editor.commands.liftEmptyBlock();
}
