import Image from "next/image";
import styles from "./page1.module.css";

export default function Home() {
  return (
    <>
    <section className={styles.container}>
      <video autoPlay loop muted playsInline className={styles.backvideo}>
        <source src="/background.mp4" type="video/mp4" />  
      </video> 
      
      <div className="flex bg-black opacity-50 w-1/2 justify-center items-center p-8 rounded-lg">
        <Image 
          src="/Logo.png" 
          alt="The Car Club Logo" 
          width={300} 
          height={200}
          className="rounded-sm"
        />
      </div>
    </section>
    <main>
    </main>
   </>
  );
}