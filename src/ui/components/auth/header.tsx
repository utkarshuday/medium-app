import Link from 'next/link';

interface HeaderProps {
  title: string;
  subtitle: string;
  link: 'signin' | 'signup';
}

export default function Header({ title, subtitle, link }: HeaderProps) {
  return (
    <>
      <h1 className='text-3xl font-extrabold text-center mb-1.5'>{title}</h1>
      <p className='text-center mb-8 text-slate-500'>
        {subtitle}
        <Link href={`/${link}`} className='underline pl-1.5'>
          {link === 'signin' ? 'Login' : 'Sign up'}
        </Link>
      </p>
    </>
  );
}
