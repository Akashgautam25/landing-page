"use client";

import React, { useState, useRef, useEffect } from "react";
import faq from "../assets/faq.png";

const faqData = [
  {
    title: "Are your products safe for sensitive skin?",
    content: `Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.`,
  },
  {
    title: "Are your products cruelty-free?",
    content: `Yes! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.`,
  },
  {
    title: "What’s your return policy?",
    content: `We offer a 30-day return policy. Please check our Return Policy page for more details.`,
  },
  {
    title: "Do you ship internationally?",
    content: `Yes, we ship worldwide. Shipping charges and time may vary by location.`,
  },
  {
    title: "How do I choose the right product?",
    content: `You can use our product guide or consult with our experts 24/7 to find the best match.`,
  },
];

const AccordionItem = ({ index, title, content, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col gap-2 w-full border border-[#2D3B36] p-4 rounded-md transition-all">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => onToggle(index)}
      >
        <h4 className="text-base md:text-lg font-medium text-[#2D3B36]">
          {title}
        </h4>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 15H25M15 5V25"
            stroke="#2D3B36"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: height }}
      >
        <p className="mt-3 text-[#3D4B46]/50 text-sm">{content}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <section className="w-full bg-[#FAFDF9] py-16 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Image Section - Laptop only */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <div className="relative w-full max-w-[480px] h-full mx-auto">
            <img
              src={faq}
              alt="FAQ Product"
              className="w-full h-auto object-cover rounded-2xl"
            />
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 bg-[#E7F5EF] text-[#2D3B36] px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-md">
              <span className="w-5 h-5 bg-[#2D3B36] text-white text-xs rounded-full flex items-center justify-center">
                ●
              </span>
              <p className="text-xs font-medium text-center">
                24/7 We’re Here <br /> to Help You
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="w-full lg:w-1/2">
          <div className="capitalize px-5 py-2 border text-[#2D3B36] border-[#2D3B36] rounded-full flex items-center justify-center gap-2 w-fit mx-auto lg:mx-0">
            <span className="w-3 h-3 rounded-full bg-[#2D3B36]"></span>
            <span className="text-sm">Frequently Asked Question</span>
          </div>

          <div className="mt-8 text-center lg:text-left text-[#2D3B36]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-wide font-light leading-snug">
              Answers to Your <br />
              Skincare Questions, <br className="hidden sm:block" />
              All in One Place.
            </h2>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                index={index}
                isOpen={openIndex === index}
                onToggle={handleToggle}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile only: Show image BELOW FAQ */}
      <div className="block md:hidden mt-16 relative w-full max-w-md mx-auto">
        <img
          src={faq}
          alt="FAQ Product"
          className="w-full h-auto object-cover rounded-xl"
        />
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 bg-[#E7F5EF] text-[#2D3B36] px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-md">
          <span className="w-5 h-5 bg-[#2D3B36] text-white text-xs rounded-full flex items-center justify-center">
            ●
          </span>
          <p className="text-xs font-medium text-center">
            24/7 We’re Here <br /> to Help You
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
