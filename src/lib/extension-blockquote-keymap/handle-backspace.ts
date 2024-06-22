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
      editor
        .chain()
        .focus()
        .setTextSelection(newPosition)
        .deleteRange({ from: newPosition, to: from })
        .run();
    }
    return true;
  }

  if (!isNodeActive(editor.state, 'blockquote')) {
    return false;
  }

  if (!isAtStartOfNode(editor.state)) {
    return false;
  }
  //it's a blockquote and it is start of node and the node  before is not a blockquote
  return editor.commands.liftEmptyBlock();
}
