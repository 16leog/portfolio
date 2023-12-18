import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="flex justify-between font-mono p-5 bg-gradient-to-b from-gray-600 via-gray-800 to-black text-white">
      <Link href="/">
        Home
      </Link>
      <div className='flex'>
        <div className='flex mr-10'>
        <Link href="/about">
          About
        </Link>
        </div>
        <div className='flex'>
        <Link href="/contact">
          Contact
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;