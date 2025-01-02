import React from "react";
import Image from "next/image";
import hImg from "@/app/images/hero.png";
import { GiMuscleUp } from "react-icons/gi";
import { PiHeartbeat } from "react-icons/pi";

const HeroImg = () => {
    return (
      <div className="relative">
        <Image src={hImg} alt="hero" className="" />
        <div className="absolute top-60 h-auto w-auto bg-wh bg-opacity-20 border border-wh/40 border-opacity-20 flex flex-col gap-y-2 rounded-lg p-2">
          <p>
            <GiMuscleUp className="text-wh font-bold text-xl" />
          </p>
          <p className="text-wh/70 text-sm">Muscle Rate</p>
          <p className="text-wh text-sm font-semibold">2.861</p>
        </div>
        <div className="absolute top-10 right-0  bg-wh bg-opacity-20 border border-wh/40 border-opacity-20 flex flex-col gap-y-2 p-2  h-16 w-16 shrink-0 rounded-full"></div>
        <div className="absolute top-7 right-0  bg-wh bg-opacity-20 border border-wh/40 border-opacity-20 flex flex-col gap-y-2 p-2 skeleton h-10 w-10 shrink-0 rounded-full"></div>

        <div className="absolute bottom-20 right-0 h-auto w-auto bg-wh bg-opacity-20 border border-wh/40 border-opacity-20 flex flex-col gap-y-2 rounded-lg p-2">
          <p>
            <PiHeartbeat className="text-wh font-bold text-xl" />
          </p>
          <p className="text-wh/70 text-sm">Heart Rate</p>
          <p className="text-wh text-sm font-semibold">9281 bpm</p>
        </div>
      </div>
    );
};

export default HeroImg;
