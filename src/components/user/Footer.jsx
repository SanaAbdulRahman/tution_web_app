import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    // <div className="footer-section bg-green-400 py-10 lg:py-16 rounded-t-lg">
    <div className="footer-section bg-green-700 py-4 lg:py-8 rounded-t-lg  mx-auto">
      <div className="container mx-auto">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
        {/* <div className="col-span-2 md:col-span-1"> */}
        <div className="col-span-2 md:col-span-1 mx-auto text-center">
          <div className="subscribe-title flex flex-col items-center">
            <Link to="/">
              <h1 className="text-white font-bold text-sm sm:text-xl flex flex-wrap">
                <span className="text-white">Tutor</span>
                <span className="text-white">Eye</span>
                <GiGraduateCap />
              </h1>
            </Link>
          </div>
        </div>

        <div className="col-span-2 md:col-span-1"></div>
        <div className="col-span-2 md:col-span-1">
          <div className="widget widgets-company-info">
            <div className="dreamhub-logo">
              <a href="index.html">
                <img src="assets/images/logo2.png" alt="" />
              </a>
            </div>

            <div className="follow-company-icon mt-4">
              <a href="#" className="text-gray-200 hover:text-green-500 mr-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-200 hover:text-green-500 mr-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-200 hover:text-green-500 mr-3">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-200 hover:text-green-500">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="flex gap-4 items-center justify-center mt-4 text-default-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-instagram cursor-pointer hover:text-default-700"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-facebook cursor-pointer hover:text-default-700"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-youtube cursor-pointer hover:text-default-700"
          >
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
            <path d="m10 15 5-3-5-3z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-twitter cursor-pointer hover:text-default-700"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-linkedin cursor-pointer hover:text-default-700"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-github cursor-pointer hover:text-default-700"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </div>
        <p class="text-white mt-4 text-small text-default-500 text-center">
          © 2024 TutorEye Inc.
        </p>

        {/* </div> */}
      </div>
    </div>
  );
}
