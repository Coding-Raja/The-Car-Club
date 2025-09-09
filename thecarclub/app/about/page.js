import React from 'react'
import Image from "next/image";

const About = () => {
  return (
    <>
    <main className="flex justify-center items-center px-4 sm:px-6 lg:px-8 mt-6 mb-10">
      <div className="w-full md:w-5/6 lg:w-3/4 p-6 sm:p-8 md:p-10">
        
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-pretty">
          About The Car Club
        </h1>
        
        {/* Intro */}
        <p className="text-base sm:text-lg mb-5 leading-relaxed">
          Welcome to <span className="font-semibold">The Car Club</span> — a
          community built for car enthusiasts, by car enthusiasts. We are
          passionate about everything on wheels, from the roar of classic muscle
          cars to the refined comfort of modern luxury vehicles.
        </p>
        
        {/* Mission */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="mb-5">
          Our goal is to connect people who love cars, share knowledge, and
          create a hub where you can explore reviews, latest trends, and
          discussions about the automotive world. Whether you’re a beginner
          learning the basics or a seasoned gearhead, The Car Club welcomes you.
        </p>
        
        {/* What We Offer */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">What We Offer</h2>
        <ul className="list-disc list-inside mb-5 space-y-2">
          <li>In-depth blogs on different car categories and models</li>
          <li>News, updates, and trends from the automotive industry</li>
          <li>A community to share experiences and insights</li>
          <li>Showcase of iconic cars from retro to futuristic</li>
        </ul>
        
        {/* Closing */}
        <p className="text-base sm:text-lg leading-relaxed">
          At The Car Club, it’s not just about cars — it’s about the passion,
          culture, and lifestyle they inspire. <br />
          <span className="font-semibold">Drive your passion here.</span>
        </p>
      </div>
    </main>
    </>
  )
}

export default About