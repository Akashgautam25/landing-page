import React from "react";
import "./loader.css"; 
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#FAFDF9] z-50 flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
