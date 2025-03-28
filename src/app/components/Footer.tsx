"use client ";
import React, { useEffect } from "react";
import useTextReveal from "../hooks/useTextReveal";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const navItems = [
  {
    href: "#hero",
    label: "Home",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#faqs",
    label: "Faqs",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Footer = () => {
  const { scope, entranceAnimation } = useTextReveal();
  const inView = useInView(scope, { once: true });

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);
  return (
    <footer id="contact" className="text-white">
      <div className="container">
        <div className="py-24 md:py-32 lg:py-40">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400 animate-pulse"></div>
            <span>Available for work</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <motion.h2
                ref={scope}
                className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight"
              >
                Enough Talk. Let's Make something great together.
              </motion.h2>
              <a
                href="mailto:brunoamanze67@gmail.com"
                className="uppercase rounded-2xl border border-lime-400 px-6 h-11 w-[300px] flex items-center justify-center mt-4 group/button"
              >
                <div className="flex">
                  <span>brunoamanze67@gmail.com</span>
                  <div className="size-6 overflow-hidden">
                    <div className="w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 text-white ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6 text-white ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <div className="mt-4 flex flex-col gap-2">
                <div>
                  <a
                    href="https://wa.me/2347052302000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline ml-2"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
                <div className="ml-2">
                  <a target="_blank" href="https://github.com/amanzecodes" className="hover:underline">
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <a
                    href={href}
                    key={label}
                    className="uppercase text-lg relative group"
                  >
                    {label}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright &copy; Amanze Bruno &bull; All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
