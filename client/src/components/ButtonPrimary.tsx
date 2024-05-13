import React from "react";
import { Link } from "react-router-dom";

interface ButtonProp {
  text: string;
  path: string;
}

const ButtonPrimary: React.FC<ButtonProp> = ({ text, path }) => {
  return (
    <div>
      <Link
        to={path}
        className="middle none center mr-4 rounded-lg bg-indigo-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg hover:bg-blue-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
      >
        {text}
      </Link>
    </div>
  );
};

export default ButtonPrimary;
