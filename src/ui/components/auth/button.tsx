interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className='bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 text-white py-2.5 mt-2 rounded-lg text-sm inline-flex items-center justify-center'
    >
      {children}
    </button>
  );
}
