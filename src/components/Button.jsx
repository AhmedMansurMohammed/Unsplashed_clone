import React from "react";

const Button = ({ text, outline }) => {
  return (
    <div
      className={`py-1.5 px-4 rounded-lg border whitespace-nowrap ${
        outline
          ? "bg-transparent border-teal-500 "
          : "border-transparent bg-teal-600 "
      } `}
    >
      <p
        className={`text-sm font-semibold whitespace-nowrap ${
          outline ? "text-teal-600 " : "text-slate-100 "
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default Button;
// {
//   /* <div className=" text-slate-600 py-1.5 px-4 rounded-lg border border-slate-300">
//   <p className="text-sm font-semibold">{text}</p>
// </div>; */
// }
