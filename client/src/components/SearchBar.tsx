import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-[440px] h-[40px]">
      <div className="flex  bg-white px-2 w-full max-w-[600px] border ">
        <input
          type="text"
          className=" bg-[#0d1829] flex bg-transparent h-[22px] w-[400px] pl-2 text-[#2e2e2e] outline-0 my-auto"
          placeholder="Type here to search ..."
        />
        <button type="submit" className="relative p-2  rounded-full ">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="#999"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
