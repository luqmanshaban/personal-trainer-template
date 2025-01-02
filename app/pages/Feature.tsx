import React, { useEffect, useState } from "react";
import { MdOutlineTaskAlt } from "react-icons/md";
import w1 from "@/app/images/workout1.jpg";
import w2 from "@/app/images/workout2.jpg";
import { CiDumbbell } from "react-icons/ci";
import { TfiHeartBroken } from "react-icons/tfi";

const Feature = () => {
  const [imageDimensions, setImageDimensions] = useState({
    width: 400,
    height: 400,
  });

  useEffect(() => {
    const handleResize = () => {
      const container = document.querySelector(".container"); // Get container element
      if (!container) {
        // Handle case where the container is not found
        console.warn("Container not found.");
        return;
      }

      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      // Calculate aspect ratio of the image
      const imageAspectRatio = imageDimensions.width / imageDimensions.height;

      // Calculate container aspect ratio
      const containerAspectRatio = containerWidth / containerHeight;

      let newWidth, newHeight;

      if (imageAspectRatio > containerAspectRatio) {
        // Image is wider than container
        newWidth = containerWidth;
        newHeight = containerWidth / imageAspectRatio;
      } else {
        // Image is taller than container
        newWidth = containerHeight * imageAspectRatio;
        newHeight = containerHeight;
      }

      setImageDimensions({ width: newWidth, height: newHeight });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial resize on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imageDimensions, w1.src]);
  return (
    <div className="md:p-20 md:px-40 p-3 py-20">
      <h2 className="text-center md:text-3xl text-xl font-semibold md:mb-0 mb-6">
        We Offer Somthong For <br /> Everybody
      </h2>

      <section className="flex md:flex-row flex-col justify-center gap-20 items-center md:p-10 ">
        <div className="flex flex-col items-baseline gap-y-6 md:px-10 md:py-5 p-3 rounded-xl shadow shadow-gr md:h-[420px] md:w-[400px] w-full">
          <p>
            <CiDumbbell className="text-4xl" />
          </p>
          <h3 className="md:text-3xl text-xl font-medium">
            Lorem ipsum, dolor sit amet.
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
            width: `${imageDimensions.width/1.1}px`,
            height: `${imageDimensions.height}px`,
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

      <section className="flex md:flex-row flex-col-reverse justify-center gap-20 items-center md:p-10 mt-10 ">
        <div
          className={`p-3 border h-80 w-80 rounded-xl`}
          style={{
            backgroundImage: `url(${w2.src})`,
            width: `${imageDimensions.width/1.1}px`,
            height: `${imageDimensions.height}px`,
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

        <div className="flex flex-col items-baseline gap-y-6 p-3 md:px-10 md:py-5 rounded-xl shadow shadow-gr md:h-[420px] md:w-[400px] w-full">
          <p>
            <TfiHeartBroken className="text-4xl" />
          </p>
          <h3 className="md:text-3xl text-xl font-medium">
            Lorem ipsum, dolor sit amet.
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
