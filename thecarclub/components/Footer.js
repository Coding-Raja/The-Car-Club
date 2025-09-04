import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition duration-200">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Content Column with Logo */}
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/Logo.png" 
                alt="The Car Club Logo" 
                width={50} 
                height={50} 
                className="mr-3 bg-gray-800"
              />
              <h3 className="text-lg font-semibold">The Car Club</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Your ultimate destination for car enthusiasts. Explore a wide variety of blogs covering sports cars, 
              classic automobiles, luxury vehicles, maintenance tips, and the latest automotive news.
            </p>
            <p className="text-gray-400">
              Discover in-depth reviews, comparison articles, and expert opinions to fuel your passion for cars.
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} The Car Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer