import React from "react";
import { CgClose } from "react-icons/cg";

const PillButton = ({ text, outline, addbtn }) => {
  return (
    <div
      className={`px-2 rounded-lg border-slate-300 whitespace-nowrap flex items-center ${
        outline ? "border-dotted border" : "border "
      } `}
    >
      <p
        className={`text-sm whitespace-nowrap ${
          outline
            ? "text-slate-400"
            : "text-slate-400 border-r-2 border-slate-300 pr-2"
        }`}
      >
        {text}
      </p>
      {!addbtn && <CgClose className="ml-2 text-slate-400 text-xs" />}
    </div>
  );
};

export default PillButton;
