import React from 'react'
import Navbar from '../Components/Navbar'
import Button from '../Components/common/Button'
import Card1 from '../Components/Card1'
import grains from '../assets/grains.webp'
import ship from '../assets/ship.gif'
import farm from '../assets/farm.gif'
import Services from '../Components/Services'
import Finance from '../Components/Finance'
import Freightfrwd from '../Components/Freightfrwd'
import Customer from '../Components/Customer'
import Footer from '../Components/Footer'
import InnerCard from '../Components/common/InnerCard'

const Home = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory overflow-x-hidden">
      {/* --- SECTION 1: HOME --- */}
      <section className="snap-start h-screen">
        <Navbar />

        <div className="container relative top-1">
          <div className="box container1">
            <Card1 />
          </div>

          <div className="box container2">
            <img src={ship} className="object-cover w-full h-full" alt="ship" />
          </div>

          <div className="box container3 bg-[#ff4f3c]" />

          <div className="box container4">
            <img src={farm} className="w-full h-full object-cover" alt="farm" />
          </div>

          <div className="box container5">
            <img src={grains} className="object-cover w-full h-full" alt="grains" />
          </div>

          <div className="absolute top-[300px] left-[200px] z-50 max-sm:left-[50px] max-sm:top-[330px]">
            <InnerCard />
          </div>

          <div className="box container6 bg-[#f3f1ed]" />
        </div>
      </section>

      {/* --- SECTION 1 (MOBILE): HOME CARD --- */}
      <section className="snap-start block sm:hidden h-[500px] flex items-center justify-center relative top-[40px]">
        <Card1 />
      </section>

      {/* --- SECTION 2: SERVICES --- */}
      <section className="snap-start h-screen max-sm:h-[500px] max-sm:bottom-[200px] flex items-center justify-center relative top-9">
        <Services />
      </section>

      {/* --- SECTION 3: FINANCE --- */}
      <section className="snap-start h-screen max-sm:h-[500px] flex items-center justify-center">
        <Finance />
      </section>

      {/* --- SECTION 4: FREIGHT FORWARDING --- */}
      <section className="snap-start h-screen max-sm:h-[500px] flex items-center justify-center">
        <Freightfrwd />
      </section>

      {/* --- SECTION 5: CUSTOMER --- */}
      <section className="snap-start h-screen max-sm:h-[1200px] max-md:h-[800px] max-sm:relative flex items-center justify-center">
        <Customer />
      </section>

      {/* --- SECTION 6: FOOTER --- */}
      <section className="snap-start h-screen flex items-center justify-center">
        <Footer />
      </section>
    </div>
  )
}

export default Home
