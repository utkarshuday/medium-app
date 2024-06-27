import { Editor, FloatingMenu } from '@tiptap/react';
import SpeedDialButton from './speed-dial-button';
import PlusIcon from '../icons/plus-icon';
import DividerIcon from '../icons/divider-icon';
import { cn } from '@/ui/util';

export default function FloatingMenuEditor({
  editor,
  showMore,
  setShowMore,
}: {
  editor: Editor;
  showMore: boolean;
  setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <FloatingMenu editor={editor}>
      <div className='-ml-[72px] flex' role='button'>
        <SpeedDialButton
          onClick={() => setShowMore(res => !res)}
          className={cn(
            'border border-black transition-transform',
            showMore && 'rotate-45'
          )}
        >
          <PlusIcon />
        </SpeedDialButton>
        {showMore && (
          <div className='flex ml-[30px] gap-2'>
            <SpeedDialButton
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .insertContent([
                    { type: 'reactComponent' },
                    { type: 'paragraph' },
                  ])
                  .run()
              }
            >
              <DividerIcon />
            </SpeedDialButton>
          </div>
        )}
      </div>
    </FloatingMenu>
  );
}
