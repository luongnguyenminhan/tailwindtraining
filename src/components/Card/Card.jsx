import React from "react";

function Card() {
  return (
    <div className=" bg-white rounded-xl justify-center mx-5 p-5 flex w-1/2 drop-shadow-2xl">
      <img
        src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/327905029_3529984837324186_5002372758386708840_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=UvhfZvT_aVsAX8faZGd&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfAz9gKpFbf4-AgO3uhjWjZv9FPxVAontXQsl59PkSmJRw&oe=6580F3DD"
        className="w-1/6 h-1/6 flex rounded-full border-[3px] border-[#a7a6a6] hover:border-[5px] hover:border-[#57ff51] hover:drop-shadow-xl transition duration-500 ease-in-out "
        alt=""
      />
      <div className="w-2/3 h-full text-left mx-5">
        <p className="text-[20px] font-mono font-extralight flex">
          Lương Nguyễn Minh An
        </p>
        <p className="text-[12px] mb-1 font-mono font-light"> Lõ vãi đái </p>
        <div className="space-y-3 mt-10">
          <p className="text-[12px] mt-1 font-mono font-light w-9/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 inline items-center mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Email:{" "}
            <a href="mailto:luongnguyenminhan02052004@gmail.com">
              {" "}
              luongnguyenminhan02052004@gmail.com{" "}
            </a>
          </p>
          <p className="text-[12px] font-mono font-light w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 inline items-center mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
            Github:{" "}
            <a href="https://github.com/luongnguyenminhan">
              github.com/luongnguyenminhan
            </a>
          </p>
          <p className="text-[12px] font-mono font-light w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 inline items-center mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            Phone: 0921-421-727
          </p>
        </div>
        {/* Body */}
        <div className="mt-10">
          <p>
            <p className="text-[20px] font-mono font-bold">About me:</p>
            <p className="text-[12px] font-mono font-light text-justify mr-3">
              Student
            </p>
          </p>
          <p className="text-[20px] font-mono font-bold mt-3">Experience:</p>
          <p className="text-[12px] font-mono font-light text-justify mr-3">
            No Exp
          </p>
          <p className="text-[20px] font-mono font-bold mt-3">Education:</p>
          <p className="text-[12px] font-mono font-bold">FPT University</p>
          <p className="text-[12px] font-mono font-light">GPA: 6996</p>
          <div className="w-full flex text-left ">
            <button className="mt-5">
              <a
                href="google.com"
                className="text-[12px] font-mono font-bold text-white bg-[#1f8138] px-5 py-2 rounded-md border-[1px] border-[#000000] hover:bg-white hover:text-[#1f8138] transition ease-in-out"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/3 h-2/3 text-right">
        <p className="text-[20px] font-bold font-mono place-items-end">
          SKILL:
        </p>
        <div className="space-y-2 ">
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            English
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            Japanese
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            Python
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            SQL
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            Excel
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            Machine Learning
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            HTML
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            CSS
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            JavaScript
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            ReactJS
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            Communication
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            Data Analysis
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            Data Visualization
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            Git/GitHub
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            Java
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            C++
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            Node.js
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            Angular
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            PHP
          </p>
          <p className="text-[12px] font-light font-mono hover:font-bold hover:translate-y-0 hover:scale-125 hover:-translate-x-6 transition-transform ease-in-out">
            Databases (MongoDB, MySQL)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
