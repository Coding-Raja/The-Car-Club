import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  return (
    <>
     <main className="flex justify-center items-center px-4 sm:px-6 lg:px-8 mt-6 mb-10">
      <div className="w-full md:w-5/6 lg:w-3/4 p-6 sm:p-8 md:p-10">

        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-pretty text-center">
          Our Latest Blogs
        </h1>

        {/* Intro */}
        <p className="text-center text-base sm:text-lg mb-8 max-w-2xl mx-auto">
          Explore insights, reviews, and stories from the world of automobiles. 
          From speed-packed sports cars to elegant luxury rides, our blogs bring 
          you the latest trends and timeless classics.
        </p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Blog Card 1 */}
          <div className="w-full p-4 rounded shadow shadow-gray-700 hover:shadow-lg hover:shadow-gray-600 bg-white/30">
            <Image
              src="/BMW.jpg"
              alt="BMW Blog"
              width={400}
              height={250}
              className="rounded mb-4 w-full h-auto"
            />
            <h2 className="text-lg font-semibold mb-2">BMW M4 Sports</h2>
            <p className="mb-3 text-sm sm:text-base">
              Stylish, powerful, and precise—BMW sports cars bring thrilling 
              performance with a touch of modern luxury.
            </p>
            <Link href="/blogs/blogsdata#BMW" className="text-sky-700 hover:underline">
              Read More →
            </Link>
          </div>

          {/* Blog Card 2 */}
          <div className="w-full p-4 rounded shadow shadow-gray-700 hover:shadow-lg hover:shadow-gray-600 bg-white/30">
            <Image
              src="/Charger.jpg"
              alt="Dodge Charger Blog"
              width={400}
              height={250}
              className="rounded mb-4 w-full h-auto"
            />
            <h2 className="text-lg font-semibold mb-2">Dodge Charger Hellcat</h2>
            <p className="mb-3 text-sm sm:text-base">
              A true American muscle icon—supercharged V8, aggressive styling, 
              and raw power that excites every driver.
            </p>
            <Link href="/blogs/blogsdata#Charger" className="text-sky-700 hover:underline">
              Read More →
            </Link>
          </div>

          {/* Blog Card 3 */}
          <div className="w-full p-4 rounded shadow shadow-gray-700 hover:shadow-lg hover:shadow-gray-600 bg-white/30">
            <Image
              src="/Supra.jpg"
              alt="Dodge Charger Blog"
              width={400}
              height={250}
              className="rounded mb-4 w-full h-auto"
            />
            <h2 className="text-lg font-semibold mb-2">Supra MK4</h2>
            <p className="mb-3 text-sm sm:text-base">
              A legendary Japanese sports car known for its sleek design, powerful turbo engine, and huge tuning potential.
            </p>
            <Link href="/blogs/blogsdata#Supra" className="text-sky-700 hover:underline">
              Read More →
            </Link>
          </div>

        </div>
      </div>
    </main>

    <main className="flex justify-center items-center px-4 sm:px-6 lg:px-8 mt-6 mb-10">
      <div className="w-full md:w-5/6 lg:w-3/4 p-6 sm:p-8 md:p-10">

        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-pretty text-center">
          Our Blogs
        </h1>

        {/* Intro */}
        <p className="text-center text-base sm:text-lg mb-8 max-w-2xl mx-auto">
          Explore insights, reviews, and stories from the world of automobiles. 
          From speed-packed sports cars to elegant luxury rides, our blogs bring 
          you the latest trends and timeless classics.
        </p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Blog Card 1 */}
          <div className="w-full p-4 rounded shadow shadow-gray-700 hover:shadow-lg hover:shadow-gray-600 bg-white/30">
            <Image
              src="/Mustang.jpeg"
              alt="Ford Mustang Blog"
              width={400}
              height={250}
              className="rounded mb-4 w-full h-auto"
            />
            <h2 className="text-lg font-semibold mb-2">Ford Mustang GT500</h2>
            <p className="mb-3 text-sm sm:text-base">
              A high-performance muscle car with iconic design, a supercharged V8 engine, and thrilling speed, delivering the ultimate Mustang experience.
            </p>
            <Link href="/blogs/blogsdata#Mustang" className="text-sky-700 hover:underline">
              Read More →
            </Link>
          </div>

          {/* Blog Card 2 */}
          <div className="w-full p-4 rounded shadow shadow-gray-700 hover:shadow-lg hover:shadow-gray-600 bg-white/30">
            <Image
              src="/RR.webp"
              alt="Rolls Royce Blog"
              width={400}
              height={250}
              className="rounded mb-4 w-full h-auto"
            />
            <h2 className="text-lg font-semibold mb-2">Rolls-Royce Elegance</h2>
            <p className="mb-3 text-sm sm:text-base">
              Rolls-Royce stands for unmatched luxury, elegance, and a driving 
              experience that feels timeless.
            </p>
            <Link href="/blogs/blogsdata#Rolls-Royce" className="text-sky-700 hover:underline">
              Read More →
            </Link>
          </div>

          {/* Blog Card 3 */}
          <div className="w-full p-4 rounded shadow shadow-gray-700 hover:shadow-lg hover:shadow-gray-600 bg-white/30">
            <Image
              src="/Porsche.webp"
              alt="Porsche Blog"
              width={400}
              height={250}
              className="rounded mb-4 w-full h-auto"
            />
            <h2 className="text-lg font-semibold mb-2">Porsche 911 Cabriolet</h2>
            <p className="mb-3 text-sm sm:text-base">
              A convertible that blends timeless design, powerful performance, 
              and the joy of open-top driving.
            </p>
            <Link href="/blogs/blogsdata#Porsche" className="text-sky-700 hover:underline">
              Read More →
            </Link>
          </div>

          {/* Blog Card 4 */}
          <div className="w-full p-4 rounded shadow shadow-gray-700 hover:shadow-lg hover:shadow-gray-600 bg-white/30">
            <Image
              src="/Camaro.jpg"
              alt="Chevrolet Camaro Blog"
              width={400}
              height={250}
              className="rounded mb-4 w-full h-auto"
            />
            <h2 className="text-lg font-semibold mb-2">Chevrolet Camaro ZL1</h2>
            <p className="mb-3 text-sm sm:text-base">
              A modern muscle car with aggressive styling, a supercharged V8 engine, and track-ready performance, built for both power and speed.
            </p>
            <Link href="/blogs/blogsdata#Camaro" className="text-sky-700 hover:underline">
              Read More →
            </Link>
          </div>

          {/* Blog Card 5 */}
          <div className="w-full p-4 rounded shadow shadow-gray-700 hover:shadow-lg hover:shadow-gray-600 bg-white/30">
            <Image
              src="/Dchallenger.jpeg"
              alt="Dodge Challenger Blog"
              width={400}
              height={250}
              className="rounded mb-4 w-full h-auto"
            />
            <h2 className="text-lg font-semibold mb-2">Dodge Challenger</h2>
            <p className="mb-3 text-sm sm:text-base">
              A classic American muscle car known for its bold design, powerful engines, and strong road presence, combining retro style with modern performance.
            </p>
            <Link href="/blogs/blogsdata#Challenger" className="text-sky-700 hover:underline">
              Read More →
            </Link>
          </div>

          {/* Blog Card 6 */}
          <div className="w-full p-4 rounded shadow shadow-gray-700 hover:shadow-lg hover:shadow-gray-600 bg-white/30">
            <Image
              src="/Bentley.jpg"
              alt="Dodge Charger Blog"
              width={400}
              height={250}
              className="rounded mb-4 w-full h-auto"
            />
            <h2 className="text-lg font-semibold mb-2">Bentley Flying Spur</h2>
            <p className="mb-3 text-sm sm:text-base">
              A luxury sedan combining elegant design, a refined interior, and powerful performance.
            </p>
            <Link href="/blogs/blogsdata#Bentley" className="text-sky-700 hover:underline">
              Read More →
            </Link>
          </div>

        </div>
      </div>
    </main>
    </>
  )
}

export default Blogs