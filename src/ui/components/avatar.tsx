import { cn } from '../util';

export default function Avatar({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative aspect-square flex items-center justify-center overflow-hidden rounded-full bg-gray-600 w-6 h-6 font-medium text-gray-200',
        className
      )}
    >
      <span>{name[0].toUpperCase()}</span>
    </div>
  );
}
