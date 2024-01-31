"use client";
import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = -70; // Offset value
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: sectionTop + offset, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="">
          <div className="text-white font-bold text-lg text-center">
            Global Climate Change
          </div>
          <p className="text-xs text-center text-[#a8b6c1] tracking-wide">
            Vital Signs of the Planet
          </p>
        </div>
        <ul className="flex space-x-4">
          <li className={activeSection === "news" ? "news" : ""}>
            <a
              onClick={() => scrollToSection("news")}
              className="text-gray-300 hover:text-white cursor-pointer"
            >
              News
            </a>{" "}
            &nbsp;&nbsp;
            <a
              href={`https://climate.nasa.gov/solutions/earth-science-in-action/`}
              target="_blank"
              className="text-gray-300 hover:text-white cursor-pointer"
            >
              Solutions
            </a>
            &nbsp;&nbsp;
            <a
              href={`https://climate.nasa.gov/explore/interactives/`}
              target="_blank"
              className="text-gray-300 hover:text-white cursor-pointer"
            >
              Explore
            </a>
          </li>
          {/* Repeat for other sections */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
