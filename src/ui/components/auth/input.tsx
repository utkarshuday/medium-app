import { useFormState, useFormStatus } from 'react-dom';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...rest }: InputProps) {
  const { pending } = useFormStatus();
  return (
    <>
      <label htmlFor={label} className='font-medium mb-2 text-sm'>
        {label}
      </label>
      <input
        {...rest}
        id={label}
        disabled={pending}
        className='mb-5 px-3 py-2 text-sm rounded-md border border-gray-300 bg-gray-50 text-gray-900'
      />
    </>
  );
}
