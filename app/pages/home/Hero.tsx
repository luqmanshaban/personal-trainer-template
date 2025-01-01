import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React from "react";
import HeroImg from "./ui/heroImg";
import Programs from "./ui/Programs";

const Hero = () => {
  return (
    <div className="bg-prim h-screen md:p-10 md:px-40 relative">
      <Navbar />
      <div className="flex justify-between items-cente relative mt-20">
        <section className="flex flex-col gap-y-4 w-[550px]">
          <h1 className="text-6xl font-light text-wh leading-[60px] font-sans">
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
        <section className="">
          <HeroImg />
        </section>
          <Programs />
      </div>
    </div>
  );
};

export default Hero;
