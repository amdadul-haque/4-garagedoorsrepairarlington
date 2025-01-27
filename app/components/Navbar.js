'use client'
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(true);

  useEffect(() => {
    window.innerWidth < 768 && setMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const [scrolY, setScrolY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolY(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScrolY(window.scrollY);
      });
    };
  }, []);

  const navItmes = [
    { name: "Home", link: "#home" },
    { name: "Repair", link: "#repair" },
    { name: "Service", link: "#service" },
    { name: "Pricing", link: "#pricing" },
    { name: "Installation", link: "#installation" },
    { name: "Springs", link: "#springs" },
    { name: "Opener", link: "#opener" },
  ];


  return (
    <nav className={`w-full fixed bg-white text-text-dark shadow py-2 `}
      style={{ zIndex: 49 }}
    >

      <div className="max-w-screen-xl mx-auto flex items-center justify-between w-full navBar">
        <a href="/" className="z-10 flex h-full items-center">
          <img src="/images/logo.png" alt="logo" className="w-[280px] sm:w-auto h-[40px] xl:h-[50px] ml-2 my-2" /></a>
        <div
          className="md:hidden cursor-pointer z-10 mr-2"
          onClick={toggleMobileMenu}
        >
          <AiOutlineMenu className="text-[25px] text-black" />
        </div>
        <ul
          className={`bg-white ${isMobileMenuOpen ? 'flex flex-col gap-4' : 'hidden'} flex-col absolute px-4 py-2 top-[80px] left-0 right-0 w-[90%] md:w-auto mx-auto md:mx-0 md:top-0 text-text-dark md:flex md:flex-row justify-end md:items-centern gap-2 md:gap-6 md:relative`}

        >
          {navItmes.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="text-base font-medium hover:text-brand-main transition-all duration-300 border-b-2 pb-2 border-transparent hover:border-brand-main">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav >
  );
};

export default Navbar;  