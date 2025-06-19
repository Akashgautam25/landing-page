import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-[#2D3B36] flex flex-col py-24 pb-56 gap-32 relative overflow-clip text-white px-4 sm:px-12 xl:px-32">
      <div className="grid gap-24 lg:grid-cols-2 w-full break-all">
        <div className="flex flex-col gap-24 w-full">
          <h2 className="text-4xl max-w-md">
            Join The Skincare<br/> Community Now.
          </h2>
          <div className="flex items-center justify-between lg:justify-start gap-12 mt-auto flex-wrap mb-8">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>

        <div className="flex flex-col gap-24 w-full">
          <div className="flex flex-col w-full items-end md:items-start gap-1">
            <p className="opacity-90">Get in touch</p>
            <p className="text-4xl">contact.skincare.com</p>
          </div>
          <div className="flex items-center justify-between lg:justify-start gap-12 mt-auto flex-wrap mb-8">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies Policy</a>
          </div>
        </div>
      </div>

      <div className="absolute left-0 flex justify-center  sm:-bottom-8 md:-bottom-16 lg:-bottom-24 w-full bottom-10" >
      <span className="block text-[22dvw] text-[#3D4B46]/50 relative leading-none text-center font-bold uppercase tracking-tighter -z-0">
  SKINCARE
</span>

      </div>
    </div>
  );
};

export default Footer;
