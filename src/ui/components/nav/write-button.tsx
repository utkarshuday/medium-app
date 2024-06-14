import Link from 'next/link';
import WriteIcon from '../icons/write-icon';

export default function WriteButton() {
  return (
    <Link
      href='/new-blog'
      className='flex text-[#686868] hover:text-[rgba(25,25,25,1)] items-center'
    >
      <WriteIcon />
      <span className='ml-1.5 text-sm hidden sm:block'>Write</span>
    </Link>
  );
}
