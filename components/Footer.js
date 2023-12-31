import React from "react";
import DevelopedByButton from "./DevelopedByButton";

const Footer = () => {
  return (
    <footer className="flex justify-around items-center bg-black max-w-full w-full h-[35.125rem] rounded-[10rem] border-t-[2rem] border-gray-900 mt-16">
      <div className="text-white text-4xl text-left">
        <span className="text-[#26E8E8] text-5xl">Contact</span>
        <div className="flex flex-col items-start mt-4">
          <img
            src="/assets/img_1_38_d25d23.svg"
            className={`h-[39px] max-w-[initial] w-[38px] block box-border mr-4 mt-4`}
          />
          <div className="flex mt-6 flex-col">
            <span>+91 9458896788</span>
            <span>+91 9458896088</span>
          </div>
        </div>
        <div className="flex flex-col mt-6 items-start ">
          <img
            src="/assets/img_1_36_ef4345.svg"
            className={`h-[34px] max-w-[initial] w-[42px] block box-border`}
          />
        </div>
        <div className="flex flex-col items-start mt-2">
          <span>nscc.com</span>
        </div>
      </div>

      <div className="text-white text-4xl text-center">
        <h2 className="text-[#26E8E8] text-5xl">Follow us on</h2>
        <div className="flex justify-center mt-11 items-center flex-row gap-[57px]">
          <div className="flex-grow-0 flex-shrink-0 flex-basis-auto">
            <img
              src="/assets/img_1_50_a4d4fe.svg"
              className="h-[66px] max-w-[initial] w-[65px] block box-border"
            />
          </div>
          <div className="flex-grow-0 flex-shrink-0 flex-basis-auto">
            <img
              src="/assets/img_1_52_94a75b.svg"
              className="h-[50px] max-w-[initial] w-[53px] block box-border"
            />
          </div>
          <div className="flex-grow-0 flex-shrink-0 flex-basis-auto">
            <img
              src="/assets/img_1_53_3ba3f1.svg"
              className="h-[66px] max-w-[initial] w-[65px] block box-border"
            />
          </div>
        </div>
        <div className="mt-14">
          <DevelopedByButton />
        </div>
      </div>

      <div className="text-white text-4xl  text-left">
        <h2 className="text-[#26E8E8] text-5xl">Navigate</h2>
        <div className="flex flex-col mt-12 items-start">
          <span className="mb-4">About Us</span>
          <span className="mb-4">Events</span>
          <span className="mb-4">Gallery</span>
          <span className="mb-4">Contact Us</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
