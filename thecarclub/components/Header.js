"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header>
        <nav className='bg-black text-white py-4 shadow-lg'>
            <div className='container mx-auto px-4 flex justify-between items-center'>
                {/* Logo */}
                <div className='flex items-center'>
                  <div className="p-1.5 rounded-lg mr-3">
                    <Image 
                      src="/Logo.png" 
                      alt="The Car Club Logo" 
                      width={40} 
                      height={40}
                      className="rounded-sm bg-black"
                    />
                  </div>
                  <Link href="/" className='text-white font-bold text-xl md:text-2xl hover:text-gray-300 transition duration-200'>
                      The Car Club
                  </Link>
                </div>
                
                {/* Desktop Navigation */}
                <div className='hidden md:block'>
                    <ul className='flex list-none space-x-6 lg:space-x-8 text-base lg:text-lg'>
                        <li><Link href="/" className='hover:text-gray-300 transition duration-200'>Home</Link></li>
                        <li><Link href="/about" className='hover:text-gray-300 transition duration-200'>About</Link></li>
                        <li><Link href="/blog" className='hover:text-gray-300 transition duration-200'>Blogs</Link></li>
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='text-white focus:outline-none'
                    >
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Toggle based on state */}
            {isMenuOpen && (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 pb-4 space-y-1 bg-black border-t border-gray-700'>
                        <Link href="/" className='block px-3 py-2 text-base hover:text-gray-300 transition duration-200' onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link href="/about" className='block px-3 py-2 text-base hover:text-gray-300 transition duration-200' onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link href="/blog" className='block px-3 py-2 text-base hover:text-gray-300 transition duration-200' onClick={() => setIsMenuOpen(false)}>Blogs</Link>
                    </div>
                </div>
            )}
        </nav>
      </header>
    </>
  )
}

export default Header