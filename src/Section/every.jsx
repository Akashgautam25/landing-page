import React from 'react';
import everyImage from '../assets/every.png'; // adjust path if needed

const Every = () => {
  return (
    <div>
      <section className="sm:px-12 px-4 xl:px-32 mt-20 flex justify-center mb-36">
        <div className="w-full max-w-[1600px] h-[80dvw] md:h-[50dvw] lg:h-[700px] rounded-[30px] overflow-hidden relative">
          <img
            className="w-full h-full object-cover object-center"
            src={everyImage}
            alt="Feel Beautiful Image"
            width={1920}
            height={1080}
          />
          <span className="w-full absolute bottom-0 p-8 bg-gradient flex items-center flex-col gap-8">
            <h2 className="w-full max-w-4xl text-center text-white text-2xl sm:text-4xl md:text-4xl lg:text-5xl tracking-wide lg:leading-14">
              Feel Beautiful Inside and Out{" "}
              <br className="hidden lg:inline" />
              with Every Product.
            </h2>
            <a
              href="#"
              className="capitalize px-8 py-3 bg-white text-foreground rounded-full flex items-center justify-center gap-2"
            >
              Shop Now
            </a>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Every;
