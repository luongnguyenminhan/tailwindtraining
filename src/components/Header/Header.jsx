import React from "react";

function Header() {
  return (
    <div className="w-full h-12 flex  bg-[#fdc6a2] drop-shadow-lg items-center">
      <button className="w-10 h-10 mx-7 px-2 pt-1 rounded-full bg-[#ffb482] hover:bg-[#ffb482] transition-colors duration-300 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600 hover:text-black transition-colors duration-300 ease-in-out transform hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
        </svg>
      </button>
      <div className="px-3 h-full items-center flex hover:bg-[#ffb482] transition-colors duration-300 ease-in-out">
        MY PROFILE
      </div>
      <div className="px-3 h-full items-center flex hover:bg-[#ffb482] transition-colors duration-300 ease-in-out">
        MY PROFILE
      </div>
      <div className="px-3 h-full items-center flex hover:bg-[#ffb482] transition-colors duration-300 ease-in-out">
        MY PROFILE
      </div>
      <div className="px-3 h-full items-center flex hover:bg-[#ffb482] transition-colors duration-300 ease-in-out">
        ADDITIONAL COMPONENT 1
      </div>
      <div className="px-3 h-full items-center flex hover:bg-[#ffb482] transition-colors duration-300 ease-in-out">
        ADDITIONAL COMPONENT 2
      </div>
    </div>
  );
}

export default Header;
