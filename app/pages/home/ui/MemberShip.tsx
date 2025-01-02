import React from "react";
import { MdOutlineTaskAlt } from "react-icons/md";

const MemberShip = () => {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center md:py-20 md:px-40">
      <p className="bg-wh border border-gr rounded-full px-2 py-1 text-xs font-medium text-prim shadow">
        Membership
      </p>
      <h2 className="text-center md:text-3xl text-xl font-semibold pb-4">
        Crushing your health and fitness goals <br className="md:block hidden"/>
        starts here...
      </h2>

      <section className="flex md:flex-row flex-col md:justify-center items-center gap-6 w-full md:p-0 p-3">
        <div className="flex flex-col gap-y-4 md:px-3 md:py-6 p-3 rounded-xl shadow md:w-72 w-full">
          <div className="flex items-center">
            <p className="font-bold text-3xl text-bl">$0</p>
            <p className="text-sm text-bl/50">/Month</p>
          </div>
          <p className="font-medium text-prim">Free Plan</p>
          <ul className="flex flex-col gap-y-4 px-3">
            <li className="flex items-center gap-2">
              <p>
                <MdOutlineTaskAlt className="text-prim text-lg" />
              </p>
              <p className="text-sm text-bl font-medium">1 class per month</p>
            </li>
            <li className="flex items-center gap-2">
              <p>
                <MdOutlineTaskAlt className="text-prim text-lg" />
              </p>
              <p className="text-sm text-bl font-medium">
                Access to online classes
              </p>
            </li>
            <li className="flex items-center gap-2">
              <p>
                <MdOutlineTaskAlt className="text-prim text-lg" />
              </p>
              <p className="text-sm text-bl font-medium">
                Health and fitness guides
              </p>
            </li>
          </ul>
          <button className="bg-btn text-bl text-sm font-semibold py-3 px-6 rounded-2xl w-full">
            Purchase Plan
          </button>
        </div>
        <div className="flex flex-col gap-y-4 md:px-3 md:py-6 p-3 rounded-xl shadow md:w-72 bg-prim w-full">
          <div className="flex items-center">
            <p className="font-bold text-3xl text-wh">$149.00</p>
            <p className="text-sm text-wh/50">/Month</p>
          </div>
          <p className="font-medium text-wh">Basic Plan</p>
          <ul className="flex flex-col gap-y-4 px-3">
            <li className="flex items-center gap-2">
              <p>
                <MdOutlineTaskAlt className="text-btn text-lg" />
              </p>
              <p className="text-sm text-wh font-normal">8 classes per month</p>
            </li>
            <li className="flex items-center gap-2">
              <p>
                <MdOutlineTaskAlt className="text-btn text-lg" />
              </p>
              <p className="text-sm text-wh font-normal">
                Everything in basic plan
              </p>
            </li>
            <li className="flex items-center gap-2">
              <p>
                <MdOutlineTaskAlt className="text-btn text-lg" />
              </p>
              <p className="text-sm text-wh font-normal">
                1-on-1 personal training
              </p>
            </li>
          </ul>
          <button className="bg-btn text-bl text-sm font-semibold py-3 px-6 rounded-2xl w-full">
            Purchase Plan
          </button>
        </div>
        <div className="flex flex-col gap-y-4 md:px-3 md:py-6 p-3 rounded-xl shadow md:w-72 w-full">
          <div className="flex items-center">
            <p className="font-bold text-3xl text-bl">$289.00</p>
            <p className="text-sm text-bl/50">/Month</p>
          </div>
          <p className="font-medium text-prim">Premium Plan</p>
          <ul className="flex flex-col gap-y-4 px-3">
            <li className="flex items-center gap-2">
              <p>
                <MdOutlineTaskAlt className="text-prim text-lg" />
              </p>
              <p className="text-sm text-bl font-medium">20 classes per month</p>
            </li>
            <li className="flex items-center gap-2">
              <p>
                <MdOutlineTaskAlt className="text-prim text-lg" />
              </p>
              <p className="text-sm text-bl font-medium">
                Everything in Basic Plan
              </p>
            </li>
            <li className="flex items-center gap-2">
              <p>
                <MdOutlineTaskAlt className="text-prim text-lg" />
              </p>
              <p className="text-sm text-bl font-medium">
                Access to online tutorials
              </p>
            </li>
          </ul>
          <button className="bg-btn text-bl text-sm font-semibold py-3 px-6 rounded-2xl w-full">
            Purchase Plan
          </button>
        </div>
      </section>
    </div>
  );
};

export default MemberShip;
