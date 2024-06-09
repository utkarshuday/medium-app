import Link from 'next/link';
import Avatar from '../avatar';
import Image from 'next/image';
import WriteIcon from '../icons/write-icon';

import logo from '@/public/logo.svg';
// TODO Add colors to tailwind config
export default function NavBar() {
  return (
    <header className='border-b-[1.5px] border-[#f2f2f2] px-4 fixed top-0 inset-x-0 z-10 bg-white'>
      <nav className='max-w-[700px] w-full mx-auto flex justify-between py-3 items-center '>
        <Link href='/blogs' className='flex gap-4 items-center'>
          <Image src={logo} alt='Medium App Logo' />
          <h1 className='text-2xl font-bold font-serif'>Medium</h1>
        </Link>
        <div className='flex items-center sm:gap-8 gap-4'>
          <Link
            href='/blogs/new-blog'
            className='flex text-[#686868] hover:text-[rgba(25,25,25,1)] items-center'
          >
            <WriteIcon />
            <span className='ml-1.5 text-sm hidden sm:block'>Write</span>
          </Link>
          <Avatar name='utkarshuday' className='w-8 h-8' />
        </div>
      </nav>
    </header>
  );
}
