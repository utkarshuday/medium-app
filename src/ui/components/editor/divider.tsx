import { Node, NodeViewWrapper, ReactNodeViewRenderer } from '@tiptap/react';

export default Node.create({
  name: 'reactComponent',
  group: 'block',
  atom: true,
  marks: '',
  selectable: false,
  parseHTML() {
    return [
      {
        tag: 'divider',
      },
    ];
  },
  renderHTML() {
    return ['divider'];
  },
  addNodeView() {
    return ReactNodeViewRenderer(DividerComponent);
  },
});

function DividerComponent() {
  return (
    <NodeViewWrapper>
      <div className='flex gap-7 justify-center select-none my-5'>
        <span className='text-[rgba(0,0,0,.68)] select-none'>&#183;</span>
        <span className='text-[rgba(0,0,0,.68)] select-none'>&#183;</span>
        <span className='text-[rgba(0,0,0,.68)] select-none'>&#183;</span>
      </div>
    </NodeViewWrapper>
  );
}
