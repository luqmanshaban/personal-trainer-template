import Navbar from "@/app/components/Navbar";
import React from "react";
import HeroImg from "./ui/heroImg";
import Programs from "./ui/Programs";

const Hero = () => {
  return (
    <div className="bg-prim md:h-screen has-auto p-4 pb-20 md:p-10 md:px-40 relative">
      <Navbar />
      <div className="flex md:flex-row flex-col justify-between items-cente relative mt-20">
        <section className="flex flex-col gap-y-4 md:w-[550px] w-full ">
          <h1 className="text-4xl md:text-6xl font-light text-wh md:leading-[60px] leading-10 font-sans">
            Empower Lives, One <span className="font-medium">Workout</span> at a
            Time
          </h1>
          <p className="text-wh/70 text-base font-sans">
            Boost your fitness brand with a modern, professional website that
            showcases your expertise, builds trust, and attracts more clients.
            Start inspiring transformations today!
          </p>
          <button className="bg-btn text-bl text-sm font-semibold py-3 px-6 rounded-2xl w-fit">
            Book a Class
          </button>
        </section>
        <section className="md:block hidden">
          <HeroImg />
        </section>
          <Programs />
      </div>
    </div>
  );
};

export default Hero;
