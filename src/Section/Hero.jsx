import React from "react";
import Hero1 from "../assets/Hero1.png"; // Model image
import Hero2 from "../assets/Hero2.PNG"; // Product image

const Hero = () => {
  return (
    <div className="w-full overflow-clip text-[#2D3B36] bg-[#EFF5E1]">
      <section className="pt-12 relative">
        <div className="w-full xl:px-32 md:px-12 flex md:justify-between lg:grid lg:grid-cols-3 items-center">
          <div className="w-full flex items-center flex-col">
            <span className="text-[20dvw] md:absolute md:top-80 md:leading-32 lg:hidden leading-20 font-bold uppercase tracking-tighter md:left-1/2 md:-translate-x-1/2 text-[#2D3B36]">
              Glowwww
              <br />
              Naturally
            </span>
            <p className="md:max-w-xs mt-12 md:mt-0 px-4 md:px-0 text-[#2D3B36]">
              <span className="md:ml-12"></span>
              Transform your skincare routine with premium products that
              restore, protect, and enhance your natural glow every day.
            </p>
          </div>

          <div className="w-full hidden lg:flex justify-center items-center">
            <h2 className="inline-block text-6xl font-bold uppercase text-[#2D3B36]">
              Glow
              <br />
              Natur-
              <br />
              ally
            </h2>
          </div>

          <div className="w-full hidden md:flex justify-end items-center">
            <img
              src={Hero2}
              className="w-80 h-80 lg:w-40 lg:h-40 bg-red-200 rounded-md object-cover object-center"
              alt="model"
            />
          </div>
        </div>

        <div className="w-full flex md:ml-12 md:w-fit lg:ml-0 lg:w-full lg:justify-center md:mt-48 lg:mt-16 mt-16 z-10 relative bottom-2">
          <img
            className="md:w-[60dvw] lg:w-[26dvw] h-[90dvw] lg:h-[30dvw] md:rounded-xl object-cover object-center"
            src={Hero1}
            alt="product"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 items-center w-[90dvw] p-2 md:w-[40dvw] lg:w-[22dvw] bg-white rounded-full text-[#2D3B36]">
            <span className="w-16 h-16 rounded-full border-[2px] border-dotted border-black p-1 shrink-0">
              <img
                className="w-full h-full rounded-full object-cover object-center"
                src={Hero2}
                alt="model-small"
              />
            </span>
            <p>While giving you an invigorating cleansing experience.</p>
          </div>
        </div>

        <div className="w-full md:hidden flex justify-center mt-16 z-10 relative bottom-0">
          <img
            className="md:w-[26dvw] h-[90dvw] lg:h-[30dvw] lg:rounded-xl object-cover object-center"
            src={Hero2}
            alt="model-mobile"
          />
        </div>

        {/* ✅ UPDATED SHOP NOW BUTTON */}
        <div className="absolute flex justify-center top-1/2 -translate-y-1/2 mt-48 md:mt-0 md:top-auto md:-translate-y-0 md:-bottom-12 w-full text-[#2D3B36]">
        <a
  href="#"
  className="flex items-center justify-center px-6 py-2 rounded-full bg-[#2D3B36] text-[#EFF5E1] text-sm font-normal shadow-md hover:shadow-lg transition-all duration-200 absolute -top-24 md:right-12 lg:left-32 h-10 w-28 whitespace-nowrap"
>
  Shop Now
</a>

          <span className="block text-[21dvw] relative leading-none text-center font-bold uppercase tracking-tighter -z-0">
            SKINCARE
          </span>
        </div>
      </section>
    </div>
  );
};

export default Hero;
