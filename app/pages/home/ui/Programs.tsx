import Link from "next/link";
import React from "react";
import { CgGym } from "react-icons/cg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Programs = () => {
  return (
    <div className="flex items-start mt-10 md:w-[50%] absolute bottom-0 left-0">
      <div className="h-auto flex flex-col gap-y-4 p-3 bg-wh rounded-l-xl">
        <CgGym className="text-3xl" />
        <h3 className="font-semibold">Personal Training</h3>
        <p className="text-sm text-bl/70">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          libero quasi sint minus quis quisquam?
        </p>
        <Link
          href={""}
          className="text-sm font-semibold flex items-center gap-1"
        >
          <p>Learn More</p>
          <p className="bg-prim p-1 rounded-full w-fit">
            <FaLongArrowAltRight className="text-wh text-xs" />
          </p>
        </Link>
      </div>

      <div className="h-auto flex flex-col gap-y-4 p-3 bg-btn">
        <CgGym className="text-3xl" />
        <h3 className="font-semibold">Workout Programs</h3>
        <p className="text-sm text-bl/70">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          libero quasi sint minus quis quisquam?
        </p>
        <Link
          href={""}
          className="text-sm font-semibold flex items-center gap-1"
        >
          <p>Learn More</p>
          <p className="bg-prim p-1 rounded-full w-fit">
            <FaLongArrowAltRight className="text-wh text-xs" />
          </p>
        </Link>
      </div>
      <div className="h-auto  flex flex-col gap-y-4 p-3 bg-wh rounded-r-xl">
        <CgGym className="text-3xl" />
        <h3 className="font-semibold">Personal Training</h3>
        <p className="text-sm text-bl/70">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          libero quasi sint minus quis quisquam?
        </p>
        <Link
          href={""}
          className="text-sm font-semibold flex items-center gap-1"
        >
          <p>Learn More</p>
          <p className="bg-prim p-1 rounded-full w-fit">
            <FaLongArrowAltRight className="text-wh text-xs" />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Programs;
