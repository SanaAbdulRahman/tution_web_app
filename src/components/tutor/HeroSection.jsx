import React from "react";

const HeroSection = () => {
  return (
    <div
      //   className="hero-section bg-cover bg-center "
      className="hero-section bg-cover bg-center h-90 md:h-106 lg:h-112"
      style={{ backgroundImage: "url('src/assets/images/slider/hero-bg.jpg')" }}
      //style={{ backgroundImage: "url('src/assets/images/slider/jh.jpg')" }}
    >
      {/* <div className="container mx-auto px-4 lg:px-0"> */}
      <div className="container mx-auto px-4 lg:px-0 lg:mr-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="col-span-1 lg:col-span-1 mx-12">
            {/* Hero content */}
            <div className="hero-content">
              <h5 className="text-green-600 text-xl lg:text-2xl">
                Parsonal &amp; Online Tutors
              </h5>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2 lg:mb-4">
                Online Tutoring Platform
              </h1>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2 lg:mb-4">
                Find Private Tutor
              </h1>
            </div>
            {/* Hero description */}
            <div className="hero-description">
              <p className="text-sm lg:text-base text-gray-500">
                Our expert tutors provide one-on-one guidance, comprehensive
                study materials, and real-time feedback to help you succeed in
                your academic journey.Unleash your full potential with TutorEye
                - Where Learning Never Stops!"
              </p>
            </div>
            {/* Hero button */}
            <div className="hero-button mt-4 lg:mt-8">
              <a
                href="#"
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded inline-block mr-4"
                // style={{ backgroundColor: "#00BEA1" }}
              >
                Find Tutor Now <i className="bi bi-arrow-right"></i>
              </a>
              <a
                href="#"
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded inline-block mr-4"
                // style={{ backgroundColor: "#00BEA1" }}
              >
                Make an Appointment <i className="bi bi-arrow-right"></i>
              </a>

              {/* <a
                href="#"
                className="bg hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block"
              >
                Make an Appointment
              </a> */}
            </div>
            <div className="hero-left-thmb">
              <div className="hero-shape2">
                <img src="assets/images/slider/hero-shpe2.png" alt="" />
              </div>
              <div className="hero-shape3">
                <img src="assets/images/slider/hero-shpe.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <div className="hero-right-thumb">
              {/* <div className="hero-thumb"> */}
              <div className="hero-thumb h-full flex justify-center items-center">
                {/* <img src="src/assets/images/slider/hero.png" alt="" /> */}
                <img
                  src="src/assets/images/slider/hero.png"
                  alt=""
                  className="max-h-full"
                />
              </div>
              <div className="hero-shape">
                <img src="assets/images/slider/hero-shp.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
