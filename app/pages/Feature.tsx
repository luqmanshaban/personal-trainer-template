import Image from "next/image";
import React from "react";
import { MdOutlineTaskAlt } from "react-icons/md";
import w1 from "@/app/images/workout1.jpg";
import w2 from "@/app/images/workout2.jpg";
import { CiDumbbell } from "react-icons/ci";
import { TfiHeartBroken } from "react-icons/tfi";

const Feature = () => {
  return (
    <div className="md:p-20 md:px-40 ">
      <h2 className="text-center text-3xl font-semibold">
        We Offer Somthong For <br /> Everybody
      </h2>

      <section className="flex justify-center gap-20 items-center md:p-10 ">
        <div className="flex flex-col items-baseline gap-y-6 md:px-10 md:py-5 rounded-xl shadow shadow-gr md:h-[420px] md:w-[400px]">
          <p>
            <CiDumbbell className="text-4xl" />
          </p>
          <h3 className="text-3xl font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </h3>
          <ul className="flex flex-col gap-y-4">
            <li className="flex items-center gap-2">
              <p>
                <MdOutlineTaskAlt className="text-prim text-lg" />
              </p>
              <p className="text-sm text-bl font-medium">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
            <li className="flex items-center gap-2">
              <p>
                <MdOutlineTaskAlt className="text-prim text-lg" />
              </p>
              <p className="text-sm text-bl font-medium">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
            <li className="flex items-center gap-2">
              <p>
                <MdOutlineTaskAlt className="text-prim text-lg" />
              </p>
              <p className="text-sm text-bl font-medium">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
          </ul>
          <div className="h-[1px] w-[80%] block bg-gr"></div>
          <button className="bg-btn text-bl text-sm font-semibold py-3 px-6 rounded-2xl w-fit">
            Join Now
          </button>
        </div>
        <div
          className={`p-3 border h-80 w-80 rounded-xl`}
          style={{
            backgroundImage: `url(${w1.src})`,
            width: "400px",
            height: "400px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* <Image
            src={w1}
            alt="workout 1"
            className="h-[400px] w-[500px] rounded-xl"
          /> */}
        </div>
      </section>

      <section className="flex justify-center gap-20 items-center md:p-10 ">
        <div
          className={`p-3 border h-80 w-80 rounded-xl`}
          style={{
            backgroundImage: `url(${w2.src})`,
            width: "400px",
            height: "400px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* <Image
            src={w1}
            alt="workout 1"
            className="h-[400px] w-[500px] rounded-xl"
          /> */}
              </div>
              
        <div className="flex flex-col items-baseline gap-y-6 md:px-10 md:py-5 rounded-xl shadow shadow-gr md:h-[420px] md:w-[400px]">
          <p>
            <TfiHeartBroken className="text-4xl" />
          </p>
          <h3 className="text-3xl font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </h3>
          <ul className="flex flex-col gap-y-4">
            <li className="flex items-center gap-2">
              <p>
                <MdOutlineTaskAlt className="text-prim text-lg" />
              </p>
              <p className="text-sm text-bl font-medium">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
            <li className="flex items-center gap-2">
              <p>
                <MdOutlineTaskAlt className="text-prim text-lg" />
              </p>
              <p className="text-sm text-bl font-medium">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
            <li className="flex items-center gap-2">
              <p>
                <MdOutlineTaskAlt className="text-prim text-lg" />
              </p>
              <p className="text-sm text-bl font-medium">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </li>
          </ul>
          <div className="h-[1px] w-[80%] block bg-gr"></div>
          <button className="bg-btn text-bl text-sm font-semibold py-3 px-6 rounded-2xl w-fit">
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Feature;
