import React from 'react'
import Image from "next/image";
import Link from "next/link"

const Blogsdata = () => {
  return (
    <>
      {/* BMW Blog */}
      <main className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-6 mb-10" id="BMW">

        {/* Image Section */}
        <div className="w-full md:w-5/6 lg:w-3/4 mb-8">
          <div className="w-full flex justify-center">
            <Image
              src="/BMW.jpg"
              alt="BMW Blog"
              width={800}
              height={500}
              className="rounded w-full sm:w-10/12 md:w-9/12 h-56 sm:h-72 md:h-96 object-cover"
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
            It is powered by a <b>3.0-liter twin-turbo inline-6 engine,</b> producing around <b>473 hp in the standard model</b> 
            and up to <b>503 hp in the M4 Competition.</b> With this power, the M4 can accelerate from <b>0–100 km/h 
            (0–62 mph) in about 3.8 to 4.1 seconds,</b> depending on the variant.
          </p>

          <p className="mb-5 text-justify">
            The car offers <b>rear-wheel drive or xDrive all-wheel drive</b> options, giving drivers both agility and 
            stability. <b>Its top speed is electronically limited to 250 km/h (155 mph),</b> but with the optional M 
            Driver’s Package, it can reach <b>around 280–290 km/h (174–180 mph).</b>
          </p>
          
          {/* Closing */}
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            Along with speed, the M4 provides precise handling, advanced suspension systems, and M-specific braking 
            technology. Inside, it combines <b>sporty bucket seats, premium materials, and modern digital displays,</b> 
            making it both a track-ready machine and a comfortable daily driver.
          </p>
        </div>

        {/* Button */}
        <div className="bg-white/30 w-full text-black/70 sm:w-2/3 md:w-2/5 lg:w-1/5 p-2 sm:p-3 mx-auto flex justify-center rounded-md shadow shadow-gray-500 hover:bg-black/50 duration-500 hover:text-white/80 hover:cursor-pointer hover:shadow-lg hover:shadow-gray-600">
          <Link href="/blogs">Go Back</Link>
        </div>

      </main>
    
      {/* Dodge Charger Blog */}
      <main className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-6 mb-10" id="Charger">

        {/* Image Section */}
        <div className="w-full md:w-5/6 lg:w-3/4 mb-8">
          <div className="w-full flex justify-center">
            <Image
              src="/Charger.jpg"
              alt="Charger Hellcat Blog"
              width={800}
              height={500}
              className="rounded w-full sm:w-10/12 md:w-9/12 h-56 sm:h-72 md:h-96 object-cover"
            />
          </div>
        </div>

        
        {/* Content Section */}
        <div className="w-full md:w-5/6 lg:w-3/4 p-6 sm:p-8 md:p-10 mb-8">
          
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-pretty text-center md:text-left">
            Dodge Charger Hellcat
          </h1>
          
          <p className="text-base sm:text-lg mb-5 leading-relaxed text-justify">
            The Dodge Charger Hellcat is one of the most powerful and aggressive muscle sedans in the world. 
            Under its hood lies a <b>6.2-liter supercharged HEMI V8 engine</b> that produces up to <b>717 hp in the 
            standard Hellcat</b> and goes even higher in special trims like the <b>Hellcat Redeye, which delivers 
            around 797 hp.</b>
          </p>

          <p className="mb-5 text-justify">
            Thanks to this massive power, the Charger Hellcat can accelerate from <b>0–100 km/h (0–62 mph) in 
            about 3.5 seconds,</b> making it extremely quick for a four-door sedan. Its <b>top speed reaches around 320 
            km/h (200 mph),</b> placing it among the fastest muscle cars ever built.
          </p>

          <p className="mb-5 text-justify">
            The Hellcat features an <b>8-speed automatic transmission,</b> rear-wheel drive, and multiple driving modes 
            that let the driver control performance settings. Its widebody design improves grip and stability, 
            while the aggressive styling, roaring exhaust, and bold presence make it instantly recognizable.
          </p>
          
          {/* Closing */}
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            Inside, the Charger Hellcat offers <b>modern tech, racing-inspired seats, and comfort features,</b> making it 
            both a track beast and a daily driver with luxury touches.
          </p>
        </div>

        {/* Button */}
        <div className="bg-white/30 w-full text-black/70 sm:w-2/3 md:w-2/5 lg:w-1/5 p-2 sm:p-3 mx-auto flex justify-center rounded-md shadow shadow-gray-500 hover:bg-black/50 duration-500 hover:text-white/80 hover:cursor-pointer hover:shadow-lg hover:shadow-gray-600">
          <Link href="/blogs">Go Back</Link>
        </div>

      </main>


      {/* Supra MK4 Blog */}
      <main className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-6 mb-10" id="Supra">

        {/* Image Section */}
        <div className="w-full md:w-5/6 lg:w-3/4 mb-8">
          <div className="w-full flex justify-center">
            <Image
              src="/Supra.jpg"
              alt="Supra Blog"
              width={800}
              height={500}
              className="rounded w-full sm:w-10/12 md:w-9/12 h-56 sm:h-72 md:h-96 object-cover"
            />
          </div>
        </div>

        
        {/* Content Section */}
        <div className="w-full md:w-5/6 lg:w-3/4 p-6 sm:p-8 md:p-10 mb-8">
          
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-pretty text-center md:text-left">
            Toyota Supra MK4
          </h1>
          
          <p className="text-base sm:text-lg mb-5 leading-relaxed text-justify">
            The Toyota Supra MK4, produced between <b>1993 and 2002,</b> is one of the most legendary Japanese sports 
            cars ever made. It gained worldwide fame for its performance, design, and huge tuning potential.
          </p>

          <p className="mb-5 text-justify">
            At its heart, the MK4 came with two engine options, but the most famous is the <b>3.0-liter 
            twin-turbocharged inline-6 (2JZ-GTE).</b> This engine produced around <b>276 hp in Japan (due to regulations),</b> 
            while international versions delivered <b>320 hp.</b> With its strong build, the 2JZ engine became a 
            favorite among car tuners, capable of handling <b>800+ hp</b> with modifications.
          </p>

          <p className="mb-5 text-justify">
            In stock form, the Supra MK4 could accelerate from <b>0–100 km/h (0–62 mph) in about 4.9 seconds,</b> 
            with a <b>top speed electronically limited to 250 km/h (155 mph).</b> Without the limiter, it could reach 
            nearly <b>280 km/h (174 mph).</b>
          </p>

          <p className="mb-5 text-justify">
            The Supra MK4 featured a <b>6-speed manual transmission (Getrag V160)</b> or a 4-speed automatic, along with 
            rear-wheel drive for true sports car handling. Its aerodynamic design, retractable rear wing 
            (in turbo models), and smooth lines gave it an iconic look that remains admired today.
          </p>
          
          {/* Closing */}
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            Inside, it had a <b>driver-focused cockpit,</b> sporty seats, and advanced features for its time. Thanks to 
            its performance, reliability, and role in car culture (especially through movies like Fast & Furious), 
            the MK4 Supra is still considered a legend among enthusiasts.
          </p>
        </div>

        {/* Button */}
        <div className="bg-white/30 w-full text-black/70 sm:w-2/3 md:w-2/5 lg:w-1/5 p-2 sm:p-3 mx-auto flex justify-center rounded-md shadow shadow-gray-500 hover:bg-black/50 duration-500 hover:text-white/80 hover:cursor-pointer hover:shadow-lg hover:shadow-gray-600">
          <Link href="/blogs">Go Back</Link>
        </div>

      </main>

      {/* Ford Mustang GT500 Blog */}
      <main className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-6 mb-10" id="Mustang">

        {/* Image Section */}
        <div className="w-full md:w-5/6 lg:w-3/4 mb-8">
          <div className="w-full flex justify-center">
            <Image
              src="/Mustang.jpeg"
              alt="BMW Blog"
              width={800}
              height={500}
              className="rounded w-full sm:w-10/12 md:w-9/12 h-56 sm:h-72 md:h-96 object-cover"
            />
          </div>
        </div>

        
        {/* Content Section */}
        <div className="w-full md:w-5/6 lg:w-3/4 p-6 sm:p-8 md:p-10 mb-8">
          
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-pretty text-center md:text-left">
            Ford Mustang Shelby GT500
          </h1>
          
          <p className="text-base sm:text-lg mb-5 leading-relaxed text-justify">
            The Ford Mustang Shelby GT500 is the most powerful production Mustang ever built, combining American 
            muscle with modern performance engineering. It stands out with its aggressive styling, aerodynamic 
            design, and a supercharged powerhouse under the hood.
          </p>

          <p className="mb-5 text-justify">
            At its core, the GT500 is powered by a <b>5.2-liter supercharged V8 engine,</b> famously called the Predator. 
            This engine delivers an incredible <b>760 horsepower and 625 lb-ft of torque,</b> making it one of the 
            strongest V8s ever fitted in a muscle car.
          </p>

          <p className="mb-5 text-justify">
            Unlike traditional Mustangs with manual gearboxes, the GT500 features a <b>7-speed dual-clutch automatic 
            transmission</b> for lightning-fast gear shifts. It comes with <b>rear-wheel drive, advanced suspension, 
            Brembo brakes, and multiple drive modes,</b> ensuring both track-ready handling and everyday usability
          </p>
          
          <p className="mb-5 text-justify">
            Thanks to this power, the GT500 can accelerate from <b>0–100 km/h (0–62 mph) in just about 3.5 seconds.</b> 
            Its <b>top speed reaches around 290 km/h (180 mph),</b> offering true supercar-level performance while keeping 
            its classic Mustang identity.
          </p>

          {/* Closing */}
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            Inside, the GT500 offers a <b>modern driver-focused cockpit,</b> with Recaro sports seats, a digital 
            instrument cluster, and the latest Ford SYNC infotainment system. It balances raw muscle with comfort 
            and technology.
          </p>
        </div>

        {/* Button */}
        <div className="bg-white/30 w-full text-black/70 sm:w-2/3 md:w-2/5 lg:w-1/5 p-2 sm:p-3 mx-auto flex justify-center rounded-md shadow shadow-gray-500 hover:bg-black/50 duration-500 hover:text-white/80 hover:cursor-pointer hover:shadow-lg hover:shadow-gray-600">
          <Link href="/blogs">Go Back</Link>
        </div>

      </main>

      {/* Rolls Royce Elegance Blog */}
      <main className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-6 mb-10" id="Rolls-Royce">

        {/* Image Section */}
        <div className="w-full md:w-5/6 lg:w-3/4 mb-8">
          <div className="w-full flex justify-center">
            <Image
              src="/RR.webp"
              alt="Rolls Royce Blog"
              width={800}
              height={500}
              className="rounded w-full sm:w-10/12 md:w-9/12 h-56 sm:h-72 md:h-96 object-cover"
            />
          </div>
        </div>

        
        {/* Content Section */}
        <div className="w-full md:w-5/6 lg:w-3/4 p-6 sm:p-8 md:p-10 mb-8">
          
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-pretty text-center md:text-left">
            Rolls-Royce Elegance
          </h1>
          
          <p className="text-base sm:text-lg mb-5 leading-relaxed text-justify">
            Rolls-Royce cars are world-famous for their unmatched luxury, craftsmanship, and smooth performance. 
            Models like the <b>Phantom</b> and <b>Ghost</b> represent true automotive elegance, combining timeless design with 
            advanced engineering. Every detail, from the iconic Spirit of Ecstasy emblem to the hand-crafted 
            interiors, reflects ultimate prestige and sophistication.
          </p>

          <p className="mb-5 text-justify">
            Under the hood, Rolls-Royce vehicles are powered by <b>6.6 to 6.75-liter twin-turbocharged V12 engines,</b> 
            delivering between <b>563 hp to 563+ hp</b> depending on the model. Despite their massive size, these cars 
            accelerate effortlessly, with the Ghost reaching <b>0–100 km/h (0–62 mph) in about 4.6 seconds,</b> while the 
            Phantom achieves it in around <b>5.3 seconds.</b> The top speed is electronically limited to <b>250 km/h 
            (155 mph),</b> focusing more on a serene ride than raw racing speed.
          </p>

          <p className="mb-5 text-justify">
            The driving experience is exceptionally smooth, thanks to Rolls-Royce’s <b>air suspension system, advanced 
            chassis control, and near-silent engines.</b> Unlike sports cars that focus on adrenaline, Rolls-Royce 
            emphasizes comfort, silence, and elegance, making the journey as enjoyable as the destination.
          </p>
          
          {/* Closing */}
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            Inside, passengers are surrounded by <b>hand-stitched leather, fine wood veneers, starlight headliners, 
            and cutting-edge technology.</b> Every Rolls-Royce is customizable to the buyer’s taste, ensuring 
            exclusivity and individuality. This combination of power, comfort, and bespoke design is what truly 
            defines the elegance of Rolls-Royce.
          </p>
        </div>

        {/* Button */}
        <div className="bg-white/30 w-full text-black/70 sm:w-2/3 md:w-2/5 lg:w-1/5 p-2 sm:p-3 mx-auto flex justify-center rounded-md shadow shadow-gray-500 hover:bg-black/50 duration-500 hover:text-white/80 hover:cursor-pointer hover:shadow-lg hover:shadow-gray-600">
          <Link href="/blogs">Go Back</Link>
        </div>

      </main>

      {/* Porsche 911 Cabriolet Blog */}
      <main className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-6 mb-10" id="Porsche">

        {/* Image Section */}
        <div className="w-full md:w-5/6 lg:w-3/4 mb-8">
          <div className="w-full flex justify-center">
            <Image
              src="/Porsche.webp"
              alt="Porsche Blog"
              width={800}
              height={500}
              className="rounded w-full sm:w-10/12 md:w-9/12 h-56 sm:h-72 md:h-96 object-cover"
            />
          </div>
        </div>

        
        {/* Content Section */}
        <div className="w-full md:w-5/6 lg:w-3/4 p-6 sm:p-8 md:p-10 mb-8">
          
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-pretty text-center md:text-left">
            Porsche 911 Cabriolet
          </h1>
          
          <p className="text-base sm:text-lg mb-5 leading-relaxed text-justify">
           The Porsche 911 Cabriolet is a perfect blend of timeless design, open-top freedom, and thrilling 
           performance. As a convertible version of the iconic 911, it offers drivers the joy of wind-in-the-hair 
           driving while maintaining the precision, speed, and handling that the 911 is famous for. Its sleek 
           silhouette, wide stance, and advanced aerodynamics make it both elegant and sporty.
          </p>

          <p className="mb-5 text-justify">
            Under the hood, the 911 Cabriolet comes with a range of engines depending on the variant. The base 
            model features a <b>3.0-liter twin-turbocharged flat-six engine</b> producing around <b>379 hp,</b> while higher 
            trims like the Carrera S deliver <b>443 hp.</b> The powerful <b>Turbo and Turbo S versions</b> push output up to <b>640 
            hp,</b> allowing incredible performance. Depending on the model, the 911 Cabriolet can accelerate from 
            <b>0–100 km/h (0–62 mph) in as little as 3.0 seconds,</b> with top speeds reaching up to <b>305 km/h (190 mph).</b>
          </p>

          <p className="mb-5 text-justify">
           The car uses either a <b>7-speed manual or an 8-speed PDK dual-clutch automatic transmission,</b> with 
           <b>rear-wheel drive or all-wheel drive (Carrera 4 models)</b> available. Its precise steering, adaptive 
           suspension, and advanced driving modes ensure excellent control, whether on city roads, highways, or 
           winding tracks. The soft top roof can be opened or closed in just <b>12 seconds,</b> even while driving at 
           speeds up to <b>50 km/h (31 mph).</b>
          </p>
          
          {/* Closing */}
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            Inside, the 911 Cabriolet combines <b>luxury with sportiness.</b> The cabin features high-quality leather, 
            digital displays, and supportive sports seats. Technology like Porsche Communication Management (PCM), 
            advanced driver assistance, and customizable driving modes further enhance the experience. Overall, the 
            Porsche 911 Cabriolet is more than just a convertible—it’s a luxury sports car that delivers 
            excitement, comfort, and iconic style in one package.
          </p>
        </div>

        {/* Button */}
        <div className="bg-white/30 w-full text-black/70 sm:w-2/3 md:w-2/5 lg:w-1/5 p-2 sm:p-3 mx-auto flex justify-center rounded-md shadow shadow-gray-500 hover:bg-black/50 duration-500 hover:text-white/80 hover:cursor-pointer hover:shadow-lg hover:shadow-gray-600">
          <Link href="/blogs">Go Back</Link>
        </div>

      </main>

      {/* Chevrolet Camaro ZL1 Blog */}
      <main className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-6 mb-10" id="Camaro">

        {/* Image Section */}
        <div className="w-full md:w-5/6 lg:w-3/4 mb-8">
          <div className="w-full flex justify-center">
            <Image
              src="/Camaro.jpg"
              alt="Chevrolet Blog"
              width={800}
              height={500}
              className="rounded w-full sm:w-10/12 md:w-9/12 h-56 sm:h-72 md:h-96 object-cover"
            />
          </div>
        </div>

        
        {/* Content Section */}
        <div className="w-full md:w-5/6 lg:w-3/4 p-6 sm:p-8 md:p-10 mb-8">
          
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-pretty text-center md:text-left">
            Chevrolet Camaro ZL1
          </h1>
          
          <p className="text-base sm:text-lg mb-5 leading-relaxed text-justify">
           The Chevrolet Camaro ZL1 is the ultimate performance version of the iconic Camaro, combining American 
           muscle with modern engineering. With its aggressive design, aerodynamic body, and track-focused features,
          the ZL1 stands out as one of the most powerful cars in Chevrolet’s lineup. It is built to deliver both 
          thrilling straight-line speed and sharp handling on the track.
          </p>

          <p className="mb-5 text-justify">
            At its core, the ZL1 is powered by a <b>6.2-liter supercharged V8 engine,</b> producing an impressive <b>650 
            horsepower and 650 lb-ft of torque.</b> This immense power allows the Camaro ZL1 to accelerate from <b>0–100 
            km/h (0–62 mph) in just 3.5 seconds,</b> making it one of the fastest muscle cars on the road. Its <b>top 
            speed reaches around 318 km/h (198 mph),</b> putting it in true supercar territory.
          </p>

          <p className="mb-5 text-justify">
           Drivers can choose between a <b>6-speed manual transmission with rev-matching</b> for a classic muscle car feel 
           or a <b>10-speed automatic transmission</b> for lightning-fast shifts. The ZL1 also features advanced 
           performance technologies such as <b>Magnetic Ride Control suspension, Brembo performance brakes, and 
           electronic limited-slip differential,</b> all designed to enhance stability and control at high speeds.
          </p>
          
          {/* Closing */}
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            Inside, the Camaro ZL1 offers a driver-focused cabin with <b>Recaro performance seats, premium materials, 
            and modern infotainment features.</b> Despite being a muscle car, it provides comfort and technology, 
            making it suitable for both track use and everyday driving. With its mix of raw power, precision 
            engineering, and bold styling, the Chevrolet Camaro ZL1 is a true modern muscle legend.
          </p>
        </div>

        {/* Button */}
        <div className="bg-white/30 w-full text-black/70 sm:w-2/3 md:w-2/5 lg:w-1/5 p-2 sm:p-3 mx-auto flex justify-center rounded-md shadow shadow-gray-500 hover:bg-black/50 duration-500 hover:text-white/80 hover:cursor-pointer hover:shadow-lg hover:shadow-gray-600">
          <Link href="/blogs">Go Back</Link>
        </div>

      </main>

      {/* Dodge Challenger Blog */}
      <main className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-6 mb-10" id="Challenger">

        {/* Image Section */}
        <div className="w-full md:w-5/6 lg:w-3/4 mb-8">
          <div className="w-full flex justify-center">
            <Image
              src="/Dchallenger.jpeg"
              alt="Dodge Challenger Blog"
              width={800}
              height={500}
              className="rounded w-full sm:w-10/12 md:w-9/12 h-56 sm:h-72 md:h-96 object-cover"
            />
          </div>
        </div>

        
        {/* Content Section */}
        <div className="w-full md:w-5/6 lg:w-3/4 p-6 sm:p-8 md:p-10 mb-8">
          
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-pretty text-center md:text-left">
            Dodge Challenger
          </h1>
          
          <p className="text-base sm:text-lg mb-5 leading-relaxed text-justify">
           The Dodge Challenger is one of the most iconic American muscle cars, blending classic retro-inspired 
           styling with modern performance. Known for its wide stance, bold lines, and aggressive presence, the 
           Challenger carries forward the spirit of the original 1970s muscle era while offering today’s technology 
           and comfort.
          </p>

          <p className="mb-5 text-justify">
            The Challenger comes with a wide range of engines to suit different driving experiences. The base 
            models feature a <b>3.6-liter V6 engine with around 303 hp,</b> while the more powerful trims offer V8 options 
            like the <b>5.7-liter HEMI V8 (375 hp)</b> and the <b>6.4-liter V8 (485 hp).</b> The high-performance versions, such 
            as the <b>SRT Hellcat,</b> push power up to <b>717 hp,</b> and the <b>Hellcat Redeye</b> delivers a jaw-dropping <b>797 hp.</b> 
            This makes the Challenger one of the most powerful production muscle cars in the world.
          </p>

          <p className="mb-5 text-justify">
           In terms of speed, performance trims like the Hellcat can accelerate from <b>0–100 km/h (0–62 mph) in about 
           3.6 seconds,</b> with top speeds exceeding <b>320 km/h (200 mph).</b> Despite its size, the Challenger offers 
           strong straight-line performance, making it a favorite for drag racing enthusiasts. Handling is aided by 
           performance suspension, widebody options, and Brembo brakes, though it stays true to its muscle car 
           roots with a focus on raw power over cornering agility.
          </p>
          
          {/* Closing */}
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            Inside, the Dodge Challenger combines muscle car character with modern comfort. It offers <b>spacious 
            seating, a driver-focused cockpit, Uconnect infotainment system, and premium materials in higher trims.</b> 
            With its blend of heritage styling, massive engine options, and thrilling performance, the Dodge 
            Challenger remains a true symbol of American muscle power
          </p>
        </div>

        {/* Button */}
        <div className="bg-white/30 w-full text-black/70 sm:w-2/3 md:w-2/5 lg:w-1/5 p-2 sm:p-3 mx-auto flex justify-center rounded-md shadow shadow-gray-500 hover:bg-black/50 duration-500 hover:text-white/80 hover:cursor-pointer hover:shadow-lg hover:shadow-gray-600">
          <Link href="/blogs">Go Back</Link>
        </div>

      </main>

      {/* Bentley Flying Spur Blog */}
      <main className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-6 mb-10" id="Bentley">

        {/* Image Section */}
        <div className="w-full md:w-5/6 lg:w-3/4 mb-8">
          <div className="w-full flex justify-center">
            <Image
              src="/Bentley.jpg"
              alt="Bentley Blog"
              width={800}
              height={500}
              className="rounded w-full sm:w-10/12 md:w-9/12 h-56 sm:h-72 md:h-96 object-cover"
            />
          </div>
        </div>

        
        {/* Content Section */}
        <div className="w-full md:w-5/6 lg:w-3/4 p-6 sm:p-8 md:p-10 mb-8">
          
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-pretty text-center md:text-left">
            Bentley Flying Spur
          </h1>
          
          <p className="text-base sm:text-lg mb-5 leading-relaxed text-justify">
           The Bentley Flying Spur is a luxury grand tourer sedan that blends elegance, craftsmanship, 
           and performance. With its bold design, iconic grille, and refined details, it represents prestige and 
           comfort for both drivers and passengers.
          </p>

          <p className="mb-5 text-justify">
            It offers multiple engines, including a <b>6.0L twin-turbo W12 with 626 hp,</b> capable of
            <b>0–100 km/h in 3.8 seconds</b> and a <b>top speed of 333 km/h (207 mph).</b> Other options include 
            a <b>4.0L V8</b> and a <b>2.9L hybrid,</b> giving a mix of power and efficiency.
          </p>

          <p className="mb-5 text-justify">
           Equipped with an <b>8-speed dual-clutch transmission, all-wheel drive, and adaptive air suspension,</b> 
           the Flying Spur delivers a smooth yet sporty ride. Rear-wheel steering adds agility to its large body.
          </p>
          
          {/* Closing */}
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            Inside, it features <b>hand-stitched leather, fine wood, and customizable luxury finishes.</b> With advanced 
            infotainment, premium audio, and rear-seat comfort, the Flying Spur is one of the world’s finest 
            luxury performance sedans.
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
