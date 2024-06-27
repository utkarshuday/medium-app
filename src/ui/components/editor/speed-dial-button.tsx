import { cn } from '@/ui/util';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function SpeedDialButton({
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cn(
        'rounded-full h-[32px] w-[32px] flex items-center justify-center',
        className
      )}
    >
      {children}
    </button>
  );
}
