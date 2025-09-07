import Image from "next/image";
import styles from "./page1.module.css";

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
    <main class="flex justify-center items-center mt-5 px-4 sm:px-6 lg:px-8">
         <div class="w-full md:w-5/6 lg:w-3/4 p-4 sm:p-6 md:p-8 bg-gray-300 shadow-gray-500 shadow rounded-lg">
             <h2 class="text-lg sm:text-2xl md:text-3xl font-bold text-pretty mb-4 md:mb-5">Welcome to The Car Club</h2>
             <p class="text-base sm:text-lg mb-4 md:mb-5">Your central hub for automotive information. Whether you're a seasoned gearhead or just beginning 
                your journey, our community is built to share knowledge, reviews, and insights on everything with 
                wheels—from classic cars to modern trucks and beyond.
             </p>
             <button type="button" class="bg-blue-300 w-full text-gray-700 sm:w-2/3 md:w-2/5 lg:w-1/5 p-2 sm:p-3 mx-auto flex justify-center rounded-md shadow shadow-gray-500 hover:bg-blue-400 duration-500 hover:text-gray-200 hover:cursor-pointer hover:shadow-lg hover:shadow-gray-600">See About Us</button>
         </div>
     </main>
     <main class="flex justify-center items-center mt-5 px-4 sm:px-6 lg:px-8">
         <div class="w-full md:w-5/6 lg:w-3/4 p-4 sm:p-6 md:p-8 bg-gray-300 shadow-gray-500 shadow rounded-lg">
            <h2 class="text-lg sm:text-2xl md:text-3xl font-bold text-pretty mb-4 md:mb-5">Top Blogs</h2>
            <div className="grid grid-cols-2 gap-3 justify-center p-4">
              <div className="w-full p-4 bg-teal-200 rounded shadow shadow-teal-500">
                <h2>Retro Cars</h2>
              </div>
              <div className="w-full p-4 bg-teal-200 rounded shadow shadow-teal-500">
                <h2>Luxary Cars</h2>
              </div>
              <div className="w-full p-4 bg-teal-200 rounded shadow shadow-teal-500">
                <h2>Convertible Cars</h2>
              </div>
              <div className="w-full p-4 bg-teal-200 rounded shadow shadow-teal-500">
                <h2>Muscle Cars</h2>
              </div>
            </div>
         </div>
     </main>
   </>
  );
}