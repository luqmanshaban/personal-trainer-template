import Link from "next/link";
import React from "react";
import { CgGym } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import { LuBicepsFlexed } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const Programs = () => {
  return (
    <div className="flex md:flex-row md:gap-0 gap-4 flex-col w-full items-start mt-10 md:w-[50%] md:absolute md:bottom-0 md:left-0">
      <div className="h-auto flex flex-col gap-y-3 p-3 bg-wh md:rounded-l-xl md:rounded-none rounded-xl">
        <LuBicepsFlexed className="text-2xl text-prim/95" />
        <h3 className="font-semibold">Personal Training</h3>
        <p className="text-sm text-bl/70">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          libero quasi sint minus quis quisquam?
        </p>
        <Link
          href={""}
          className="text-sm font-semibold flex items-center gap-1"
        >
          <p className="text-xs">Learn More</p>
          <p className="bg-prim p-[2px] rounded-full w-fit">
            <FaArrowRight className="text-wh text-xs text-[8px]" />
          </p>
        </Link>
      </div>

      <div className="h-auto flex flex-col gap-y-3 p-3 bg-btn md:rounded-none rounded-xl">
        <CgGym className="text-2xl text-prim/95" />
        <h3 className="font-semibold">Workout Programs</h3>
        <p className="text-sm text-bl/70">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          libero quasi sint minus quis quisquam?
        </p>
        <Link
          href={""}
          className="text-sm font-semibold flex items-center gap-1"
        >
          <p className="text-xs">Learn More</p>
          <p className="bg-prim p-[2px] rounded-full w-fit">
            <FaArrowRight className="text-wh text-xs text-[8px]" />
          </p>
        </Link>
      </div>

      <div className="h-auto  flex flex-col gap-y-3 p-3 bg-wh md:rounded-r-xl md:rounded-none rounded-xl">
        <CgProfile className="text-2xl text-prim/95" />
        <h3 className="font-semibold">Personal Training</h3>
        <p className="text-sm text-bl/70">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          libero quasi sint minus quis quisquam?
        </p>
        <Link
          href={""}
          className="text-sm font-semibold flex items-center gap-1"
        >
          <p className="text-xs">Learn More</p>
          <p className="bg-prim p-[2px] rounded-full w-fit">
            <FaArrowRight className="text-wh text-xs text-[8px]" />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Programs;
