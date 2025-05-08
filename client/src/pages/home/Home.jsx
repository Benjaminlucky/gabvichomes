import React from "react";
import Hero from "../../components/home/hero";
import Intro from "../../components/home/Intro";
import Value from "../../components/home/Value";
import Testimony from "../../components/home/Testimony";
import Reachus from "../../components/home/Reachus.jsx";

function Home() {
  return (
    <main className="home__section mt-20">
      <div className="home_wrapper">
        <Hero />
      </div>
      <div className="intro__section w-full flex justify-center items-center mt-8 mb-16 md:mb-20 md:mt-20">
        <div className="intro__wrapper w-11/12 md:w-9/12 flex justify-center items-center">
          <Intro />
        </div>
      </div>
      <div className="value__section w-full flex justify-center items-center mt-8 mb-16 md:mb-36 md:mt-36">
        <div className="value__wrapper w-11/12 md:w-9/12 flex justify-center items-center">
          <Value />
        </div>
      </div>
      <div className="testimony__section w-full flex justify-center items-center mt-8 mb-16 md:mb-36 md:mt-36">
        <div className="testimony__wrapper w-11/12 md:w-9/12 flex justify-center items-center">
          <Testimony />
        </div>
      </div>
      <div className="reachus__section w-full flex justify-center items-center mt-8 mb-16 md:mb-36 md:mt-36">
        <div className="reachus__wrapper w-11/12 md:w-9/12 flex justify-center items-center">
          <Reachus />
        </div>
      </div>
    </main>
  );
}

export default Home;
