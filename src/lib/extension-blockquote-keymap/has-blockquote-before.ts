import { EditorState } from '@tiptap/pm/state';

export function hasBlockquoteBefore(state: EditorState): boolean {
  const { $anchor } = state.selection;
  const $targetPos = state.doc.resolve($anchor.pos - 1);

  if ($targetPos.index() === 0) return false;

  if ($targetPos.nodeBefore?.type.name !== 'blockquote') return false;

  return true;
}
