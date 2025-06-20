import React from "react";
import Cart from "../assets/cart.png";
import Heart from "../assets/heart.png";
import Profile from "../assets/profile.png";

const Navbar = () => {
  return (
    <div className="w-full h-full bg-[#EFF5E1] px-4 sm:px-12 xl:px-32 grid grid-cols-2 lg:grid-cols-3 items-center text-[#2D3B36] pb-28 pt-8">
      <a href="#" className="font-bold text-lg md:text-2xl tracking-tight cursor-pointer">
        SKINCARE
      </a>

      <nav className="capitalize hidden lg:flex items-center gap-8 justify-self-center">
        {["all Products", "serum", "sunscreen", "Bundle"].map((item, index) => (
          <a
            key={index}
            href="#"
            className="relative cursor-pointer after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center justify-end gap-2 md:gap-4">
        <a href="#" className="flex items-center gap-2 cursor-pointer">
          <span className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
            <img
              className="w-4 h-4 sm:w-6 sm:h-6"
              src={Cart}
              alt="cart-icon"
            />
          </span>
          <span className="hidden md:inline">Cart(1)</span>
        </a>

        <a href="#" className="flex items-center gap-2 cursor-pointer">
          <span className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
            <img
              className="w-4 h-4 sm:w-6 sm:h-6"
              src={Heart}
              alt="heart-icon"
            />
          </span>
        </a>

        <a href="#" className="flex items-center gap-2 cursor-pointer">
          <span className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
            <img
              className="w-4 h-4 sm:w-6 sm:h-6"
              src={Profile}
              alt="profile-icon"
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
