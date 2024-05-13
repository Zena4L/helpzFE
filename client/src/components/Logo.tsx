import React from "react";

interface LogoProps {
  text: string;
}

const Logo: React.FC<LogoProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-[30px] w-[30px] text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
        ></path>
      </svg>
      <h1 className="text-3xl font-bold text-blue-600 tracking-wider">
        {text}
      </h1>
    </div>
  );
};

export default Logo;
