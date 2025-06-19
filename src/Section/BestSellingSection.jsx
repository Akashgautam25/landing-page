"use client";
import React, { useRef, useCallback } from "react";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import cartIcon from "../assets/bag.png";
import arrowLeft from "../assets/left-arrow.png";
import arrowRight from "../assets/right-arrow.png";

const BestSellingSection = () => {
  const scrollRef = useRef(null);

  const scroll = useCallback((dir) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.9;

    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }, []);

  const products = [
    {
      image: product1,
      title: "ALYA SKIN CLEANSER.",
      price: "FROM $29.99",
    },
    {
      image: product2,
      title: "RITUAL OF SAKURA.",
      price: "FROM $27.99",
    },
    {
      image: product3,
      title: "THE BODY LOTION.",
      price: "FROM $19.99",
    },
  ];

  return (
    <section className="bg-[#FEFFF4] px-4 sm:px-12 xl:px-32 py-20 flex flex-col gap-16">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <button className="border border-[#2D3B36] text-[#2D3B36] px-5 py-2 rounded-full flex items-center gap-2">
          <span className="w-3 h-3 bg-[#2D3B36] rounded-full"></span>
          <span className="text-sm">Best Selling Products</span>
        </button>
        <h2 className="text-3xl lg:text-4xl text-[#2D3B36] text-center font-medium">
          Skincare That Brings Out <br /> Your Natural Radiance
        </h2>
        <div className="hidden lg:flex gap-4">
          <button onClick={() => scroll("left")}>
            <img
              src={arrowLeft}
              alt="left"
              className="w-10 h-10 border rounded-full p-2"
            />
          </button>
          <button onClick={() => scroll("right")}>
            <img
              src={arrowRight}
              alt="right"
              className="w-10 h-10 bg-[#2D3B36] rounded-full p-2"
            />
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth pb-4 px-2"
      >
        {products.map((p, i) => (
          <div
            key={i}
            className="min-w-[80%] sm:min-w-[60%] lg:min-w-[30%] bg-white rounded-2xl overflow-hidden shadow-md flex-shrink-0 relative"
          >
            <div className="h-[500px] w-full overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 items-center p-2 w-[90%] sm:w-[85%] bg-white rounded-md">
              <div className="w-full flex flex-col justify-between gap-1 sm:gap-2 pl-1">
                <h3 className="font-semibold text-sm sm:text-base text-[#1B1B1B] uppercase">
                  {p.title}
                </h3>
                <p className="text-sm text-[#5A5A5A]">{p.price}</p>
              </div>
              <span className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2D3B361A] p-4 shrink-0">
                <img
                  src={cartIcon}
                  alt="cart"
                  className="w-full h-full rounded-full object-cover object-center"
                />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Arrows */}
      <div className="flex justify-center gap-4 lg:hidden">
        <button onClick={() => scroll("left")}>
          <img
            src={arrowLeft}
            alt="left"
            className="w-10 h-10 border rounded-full p-2"
          />
        </button>
        <button onClick={() => scroll("right")}>
          <img
            src={arrowRight}
            alt="right"
            className="w-10 h-10 bg-[#2D3B36] rounded-full p-2"
          />
        </button>
      </div>
    </section>
  );
};

export default BestSellingSection;
