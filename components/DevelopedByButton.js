import React from "react";

function DevelopedByButton() {
  return (
    <div className="flex items-center border-solid border border-[rgba(108,229,229,1)] rounded-br-[80px] rounded-t-[80px] rounded-bl-[80px] p-1 px-2">
      <div className="pr-2">
        <img
          src="/assets/img_1_12_b3a770.png"
          className="h-[65px] w-[80px]"
          alt="Logo"
        />
      </div>
      <div className="ml-2 mr-2">
        <img
          src="/assets/img_1_72_11d86c.svg"
          className="h-[100px] w-0.5"
          alt="Divider"
        />
      </div>
      <p className="font-Inter text-2xl text-left text-[rgba(38,232,232,1)] max-w-[212px] py-2 ml-2">
        Developed by: NSCC SRM
      </p>
    </div>
  );
}

export default DevelopedByButton;
