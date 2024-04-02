import React from "react";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="py-2 w-full bg-green-100">
        <h3 className="ml-24 ">Welcome to our excellant team of totors!</h3>
      </div>

      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-green-400">Tutor</span>
            <span className="text-green-700">Eye</span>
          </h1>
        </Link>

        <ul className="flex gap-4">
          <Link to="/tutor/home">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/courses">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Courses
            </li>
          </Link>
          <Link to="/join">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Join Now
            </li>
          </Link>

          <Link to="/tutor/sign-in">
            <li className="text-slate-700 hover:underline">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
