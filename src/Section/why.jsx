import React from "react";
import ModelImage from "../assets/model.png";
import AwardIcon from "../assets/award.png";

const Why = () => {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-8 lg:px-12 xl:px-32 gap-24">
      {/* Left Column */}
      <div className="lg:col-span-4 flex flex-col items-start px-4 sm:px-12 lg:px-0">
      <a
  href="#"
  className="capitalize px-5 py-3 border-2 text-black border-black rounded-full flex items-center justify-center gap-2"
>


          <span className="w-4 h-4 rounded-full bg-[#1A1C22]"></span>
          Why Our Products
        </a>

        <div className="mt-12 text-foreground xl:max-w-2xl">
          <h2 className="text-4xl tracking-wide font-light">
            YOUR SKIN DESERVES THE BEST CARE.
          </h2>
          <p className="mt-4">
            Discover a curated collection of skincare products designed to
            rejuvenate, protect, and pamper your skin. Explore our rage crafted
            with love backed by science, and inspired by nature.
          </p>

          <div className="mt-16 flex flex-col gap-12">
            {/* Feature 01 */}
            <div className="flex gap-6">
              <h3 className="text-4xl shrink-0 text-[#2D3B36]">01</h3>
              <div>
                <h4 className="text-2xl tracking-wide font-light">
                  Bio Ingredients
                </h4>
                <p className="mt-2">
                  Get naturally beautiful and transform with our bio ingredients
                  creams for healthy, radiant skin.
                </p>
              </div>
            </div>

            {/* Feature 02 */}
            <div className="flex gap-6">
              <h3 className="text-4xl shrink-0 text-[#2D3B36]">02</h3>
              <div>
                <h4 className="text-2xl tracking-wide font-light">
                  Everything Natural
                </h4>
                <p className="mt-2">
                  Pure ingredients for pure skin. The Perfect solution for your
                  skin care needs.
                </p>
              </div>
            </div>

            {/* Feature 03 */}
            <div className="flex gap-6">
              <h3 className="text-4xl shrink-0 text-[#2D3B36]">03</h3>
              <div>
                <h4 className="text-2xl tracking-wide font-light">
                  All Handmade
                </h4>
                <p className="mt-2">
                  Made with love and care. Just for you. Give your skin the
                  tender loving care it deserves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-4 lg:h-full h-[70dvw]">
        <div className="w-full h-full flex justify-center z-10 relative">
          <img
            className="lg:rounded-xl h-full w-full object-cover object-center md:h-auto"
            src={ModelImage}
            alt="Awarded Skin Product"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 items-center p-2 lg:w-[25dvw] xl:w-[20dvw] sm:w-[50dvw] w-[90%] bg-white rounded-full">
            <span className="w-16 h-16 rounded-full border-[2px] border-dotted border-black shrink-0 flex items-center justify-center">
              <span className="w-14 h-14 rounded-full bg-foreground p-3">
                <img
                  className="w-full h-full rounded-full object-cover object-center bg"
                  src={AwardIcon}
                  alt="Award Icon"
                />
              </span>
            </span>
            <p>Best Skin Care Product Award Winning</p>
          </div>
        </div>

        <div className="w-full px-4 sm:px-12 lg:px-0 flex items-center justify-between mt-3">
          <p>Since 2001</p>
          <p>LEARN MORE</p>
        </div>
      </div>
    </section>
  );
};

export default Why;
