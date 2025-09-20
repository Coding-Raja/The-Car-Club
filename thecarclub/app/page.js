import Image from "next/image";
import styles from "./page1.module.css";
import Link from "next/link";
import blogs from "../data/blogsdata.json";

export default function Home() {
  return (
    <>
    <section className={styles.container}>
      <video autoPlay loop muted playsInline className={styles.backvideo}>
        <source src="/background.mp4" type="video/mp4" />  
      </video> 
      
       <div className="flex flex-col md:flex-row bg-black opacity-50 w-full md:w-4/5 lg:w-3/5 xl:w-1/2 justify-center items-center p-4 md:p-6 rounded-lg mx-4">
          <div className="w-40 md:w-48 lg:w-56 xl:w-64 mb-4 md:mb-0 md:mr-4 lg:mr-6">
            <Image 
              src="/Logo.png" 
              alt="The Car Club Logo" 
              width={300} 
              height={200}
              className="rounded-sm w-full h-auto"
            />
          </div>
          <h2 className="text-white text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium md:font-semibold">
            Drive Your Passion Here
          </h2>
        </div>
    </section>
    <main className="flex justify-center items-center mt-5 px-4 sm:px-6 lg:px-8">
         <div className="w-full md:w-5/6 lg:w-3/4 p-4 sm:p-6 md:p-8">
             <h2 className="text-lg sm:text-2xl md:text-3xl text-center font-bold mb-4 md:mb-5">Welcome to The Car Club</h2>
             <p className="text-base sm:text-lg mb-4 md:mb-5">Your central hub for automotive information. Whether you're a seasoned gearhead or just beginning 
                your journey, our community is built to share knowledge, reviews, and insights on everything with 
                wheels—from classic cars to modern trucks and beyond.
             </p>
             <div type="button" className="bg-white/30 w-full text-black/50 sm:w-2/3 md:w-2/5 lg:w-1/5 p-2 sm:p-3 mx-auto flex justify-center rounded-md shadow shadow-gray-500 hover:bg-black/50 duration-500 hover:text-white/70 hover:cursor-pointer hover:shadow-lg hover:shadow-gray-600"><Link href="/about">See About Us</Link></div>
         </div>
     </main>
      <main className="flex justify-center items-center mt-5 px-4 sm:px-6 lg:px-8">
  <div className="w-full md:w-5/6 lg:w-3/4 p-4 sm:p-6 md:p-8">
    <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-pretty mb-4 md:mb-5">Blogs Categories</h2>
    
    <details className="p-2.5 border border-black mb-5">
      <summary className="font-semibold cursor-pointer">Click to See</summary>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-center p-4">
        
        <div className="w-full p-4 bg-white/30 shadow shadow-black/30 rounded hover:shadow-lg hover:shadow-black/50">
          <h2 className="font-semibold mb-3">Sports Car (Performance Coupe)</h2>
          <p className="mb-3">Sports cars are built for speed, performance, and style. They have powerful engines, sharp handling, and sleek designs, making them exciting to drive and eye-catching on the road.</p>
          <Link href="#" className="text-sky-700">See more</Link>
        </div>

        <div className="w-full p-4 bg-white/30 shadow shadow-black/30 rounded hover:shadow-lg hover:shadow-black/50">
          <h2 className="font-semibold mb-3">Luxury Cars</h2>
          <p className="mb-3">Luxury cars are built for comfort, class, and advanced features. They offer premium materials, smooth rides, and high performance, often seen as a status symbol.</p>
          <Link href="#" className="text-sky-700">See more</Link>
        </div>

        <div className="w-full p-4 bg-white/30 shadow shadow-black/30 rounded hover:shadow-lg hover:shadow-black/50">
          <h2 className="font-semibold mb-3">Convertible Cars</h2>
          <p className="mb-3">Convertible cars have a roof that can be opened or closed. They give drivers the joy of open-air driving and are perfect for enjoying sunny weather in style.</p>
          <Link href="#" className="text-sky-700">See more</Link>
        </div>

        <div className="w-full p-4 bg-white/30 shadow shadow-black/30 rounded hover:shadow-lg hover:shadow-black/50 sm:col-span-2 lg:col-span-1">
          <h2 className="font-semibold mb-3">Muscle Cars</h2>
          <p className="mb-3">Muscle cars are powerful vehicles with strong engines, usually V8s. They are famous for speed, aggressive looks, and roaring sounds, especially popular in American car culture.</p>
          <Link href="#" className="text-sky-700">See more</Link>
        </div>

      </div>
    </details>

    <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-pretty mb-4 md:mb-5">Top Blogs</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-center p-4">
  {blogs.slice(0, 6).map((blog, i) => (
    <div key={i} className="w-full p-4 bg-white/30 rounded shadow shadow-black/30 hover:shadow-lg hover:shadow-black/50">
      <div className="flex justify-center items-center">
        <Image 
          src={blog.image} 
          alt={blog.alt} 
          width={300} 
          height={200}
          className="rounded-sm mb-5 w-full h-auto"
        />
      </div>
      <p>{blog.excerpt}</p>
      <Link href={`/blogs/${blog.slug}`} className="text-sky-700">
        Click to See More
      </Link>
    </div>
  ))}
</div>
  </div>
</main>


   

   </>
  );
}