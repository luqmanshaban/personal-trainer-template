import Link from "next/link";
import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { LuHeartPulse } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="flex flex-col gap-y-4 items-center md:py-20 md:px-40 p-3 py-10 bg-bl text-wh">
      <section className="flex md:flex-row flex-col justify-between md:items-center items-start md:gap-32 md:py-10 gap-8">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-1">
            <p>
              <LuHeartPulse className="text-wh text-2xl" />
            </p>
            <p className="text-wh text-md">
              <b>Bulk</b>ing
            </p>
          </div>
          <p className="text-wh/50">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
            ex.
          </p>
        </div>

        <ul className="flex md:flex-row flex-col md:items-center gap-4">
          <Link href={""} className="text-wh/80">
            Home
          </Link>
          <Link href={""} className="text-wh/80">
            Programs
          </Link>
          <Link href={""} className="text-wh/80">
            Memberships
          </Link>
          <Link href={""} className="text-wh/80">
            Blog
          </Link>
          <Link href={""} className="text-wh/80">
            Contact
          </Link>
        </ul>

        <div className="flex flex-col gap-y-4">
          <p className="text-wh/80">Newsletter</p>
          <form className="flex items-center gap-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email here"
              className="bg-wh bg-opacity-20 outline-none border-none focus:outline-none focus:border-none placeholder:text-wh/80 py-3 px-6 rounded-full"
            />
            <button className="bg-btn text-bl text-sm font-semibold py-3 px-6 rounded-2xl w-full">
              Send
            </button>
          </form>
        </div>
      </section>

      <section className="flex flex-col gap-y-6 w-full">
        <div className="h-[1px] w-full block bg-wh/30"></div>
        <div className="flex md:flex-row flex-col justify-between md:items-center md:gap-0 gap-4 w-full">
          <p className="text-wh/50">&copy;2024 Tanelt Inc.</p>
          <ul className="flex md:justify-between items-center gap-4">
            <li className="border border-gr/20 rounded-full p-2">
              <BsFacebook className="text-lg" />
            </li>
            <li className="border border-gr/20 rounded-full p-2">
              <BsLinkedin className="text-lg" />
            </li>
            <li className="border border-gr/20 rounded-full p-2">
              <BsTwitter className="text-lg" />
            </li>
            <li className="border border-gr/20 rounded-full p-2">
              <BsYoutube className="text-lg" />
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <Link href={""} className="text-wh/80">
              Terms of Service
            </Link>
            <Link href={""} className="text-wh/80">
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
