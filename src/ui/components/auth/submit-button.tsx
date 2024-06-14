import Button from './button';
import LoadingSpinner from '../icons/loading-spinner';
import { useFormStatus } from 'react-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function SubmitButton({
  children,
  ...rest
}: ButtonProps) {
  const { pending} = useFormStatus();
  return (
    <Button {...rest} type='submit' disabled={pending}>
      {pending ? (
        <>
          <LoadingSpinner />
          Loading
        </>
      ) : (
        children
      )}
    </Button>
  );
}
