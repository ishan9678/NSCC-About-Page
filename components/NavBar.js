import React from "react";

function NavBar() {
  return (
    <div className="flex items-center justify-between shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-black p-4">
      <div className="flex items-center" style={{ marginLeft: "30px" }}>
        <p className="font-family:Inter text-[28px] font-normal text-white mr-14">
          About Us
        </p>
        <p className="font-family:Inter text-[28px] font-normal text-[rgba(38,232,232,1)] mr-14">
          Our Team
        </p>
        <p className="font-family:Inter text-[28px] font-normal text-[rgba(38,232,232,1)] mr-14">
          Events
        </p>
        <p className="font-family:Inter text-[28px] font-normal text-[rgba(38,232,232,1)] mr-14">
          Gallery
        </p>
        <p className="font-family:Inter text-[28px] font-normal text-[rgba(38,232,232,1)]">
          Contact Us
        </p>
      </div>
      <img
        src="/assets/img_1_12_b3a770.png"
        className="h-[79px] max-w-[initial] w-[79px] box-border mr-3"
      />
    </div>
  );
}

export default NavBar;
