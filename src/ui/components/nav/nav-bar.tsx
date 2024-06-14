import Link from 'next/link';
import Avatar from '../avatar';
import Image from 'next/image';
import WriteIcon from '../icons/write-icon';

import logo from '@/public/logo.svg';
import WriteButton from './write-button';
import PublishButton from './publish-button';
// TODO Add colors to tailwind config
export default function NavBar({ isPublish = false }: { isPublish?: boolean }) {
  return (
    <header className='border-b-[1.5px] border-[#f2f2f2] px-4 fixed top-0 inset-x-0 z-10 bg-white'>
      <nav className='max-w-[700px] w-full mx-auto flex justify-between py-3 items-center '>
        <Link href='/blogs' className='flex gap-4 items-center'>
          <Image src={logo} alt='Medium App Logo' />
          <h1 className='text-2xl font-bold font-serif'>Medium</h1>
        </Link>
        <div className='flex items-center sm:gap-8 gap-4'>
          {!isPublish ? <WriteButton /> : <PublishButton />}
          <Avatar name='utkarshuday' className='w-8 h-8' />
        </div>
      </nav>
    </header>
  );
}
