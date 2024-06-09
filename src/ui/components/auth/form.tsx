interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export default function Form({ children, ...rest }: FormProps) {
  return (
    <div className='flex items-center justify-center '>
      <form
        {...rest}
        className='flex flex-col max-w-sm justify-stretch w-2/3 py-4'
      >
        {children}
      </form>
    </div>
  );
}
