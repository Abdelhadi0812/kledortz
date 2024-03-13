import Link from 'next/link';
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl ">
      <Link
        href={''}
        className="hover:text-accent transition-all duration-300 "
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={''}
        className="hover:text-accent transition-all duration-300 "
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={''}
        className="hover:text-accent transition-all duration-300 "
      >
        <RiFacebookBoxLine />
      </Link>
    </div>
  );
};

export default Socials;
