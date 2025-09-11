import React from 'react'
import Image from "next/image";
import Link from "next/link"

const Blogsdata = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-6 mb-10"  id="BMW">

        {/* Image Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-8 w-full md:w-5/6 lg:w-3/4">
          <div className="w-full flex justify-center">
            <Image
              src="/BMW.jpg"
              alt="BMW Blog"
              width={800}
              height={500}
              className="rounded w-9/12 h-64 sm:h-80 md:h-96 object-cover"
            />
          </div>
        </div>

        
        {/* Content Section */}
        <div className="w-full md:w-5/6 lg:w-3/4 p-6 sm:p-8 md:p-10 mb-8">
          
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-pretty text-center md:text-left">
            BMW M4 Sports
          </h1>
          
          <p className="text-base sm:text-lg mb-5 leading-relaxed text-justify">
            The BMW M4 is a high-performance sports coupe that perfectly blends luxury with speed. 
            It is powered by a 3.0-liter twin-turbo inline-6 engine, producing around 473 hp in the standard model 
            and up to 503 hp in the M4 Competition. With this power, the M4 can accelerate from 0–100 km/h 
            (0–62 mph) in about 3.8 to 4.1 seconds, depending on the variant.
          </p>

          <p className="mb-5 text-justify">
            The car offers rear-wheel drive or xDrive all-wheel drive options, giving drivers both agility and 
            stability. Its top speed is electronically limited to 250 km/h (155 mph), but with the optional M 
            Driver’s Package, it can reach around 280–290 km/h (174–180 mph).
          </p>
          
          {/* Closing */}
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            Along with speed, the M4 provides precise handling, advanced suspension systems, and M-specific braking 
            technology. Inside, it combines sporty bucket seats, premium materials, and modern digital displays, 
            making it both a track-ready machine and a comfortable daily driver.
          </p>
        </div>

        {/* Button */}
        <div className="bg-white/30 w-full text-black/70 sm:w-2/3 md:w-2/5 lg:w-1/5 p-2 sm:p-3 mx-auto flex justify-center rounded-md shadow shadow-gray-500 hover:bg-black/50 duration-500 hover:text-white/80 hover:cursor-pointer hover:shadow-lg hover:shadow-gray-600">
          <Link href="/blogs">Go Back</Link>
        </div>

      </main>
    </>
  )
}

export default Blogsdata
