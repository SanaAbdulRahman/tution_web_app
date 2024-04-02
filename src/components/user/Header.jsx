import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-white">
      <div className="py-2 w-full bg-green-100">
        <h3 className="ml-24 ">
          Do you want to join our team?{" "}
          <Link to="/tutor/home" className="text-green-700 hover:underline">
            As a Tutor
          </Link>
        </h3> 
      </div>

      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-green-400">Tutor</span>
            <span className="text-green-700">Eye</span>
            <GiGraduateCap />
          </h1>
        </Link>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/courses">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Courses
            </li>
          </Link>
          <Link to="/tutors">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Tutors
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About Us
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-slate-700 hover:underline">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
