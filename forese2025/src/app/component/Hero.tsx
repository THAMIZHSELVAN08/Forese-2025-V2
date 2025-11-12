"use client";
import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";
import TextType from "../../components/ui/TextType";
export default function Hero() {
  return (
    <>
      <div className="h-screen flex flex-col font-bold font-hanken text-3xl md:text-6xl lg:text-8xl justify-center items-center text-center">
        <span className="inline-flex gap-0">
          <h1
            className="text-white text-center"
            style={{ fontFamily: "var(--font-hanken-grotesk)" }}
          >
            FORum for Economic Studies
          </h1>
        </span>
        <h1
          className="text-white text-center"
          style={{ fontFamily: "var(--font-hanken-grotesk)" }}
        >
          By Engineers
        </h1>
        <TextType
          text={[
            "A student-run club",
            "Working Closely with the Placement Cell",
            "of Sri Venkateswara College of Engineering",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-white text-xl mt-5 text-center h-13"
        />
        <div className="flex flex-col gap-2 md:flex-row md:gap-5">
          <Link href="/Team">
            <motion.button
              className="bg-white text-sm md:text-xl font-medium text-blue-800 rounded-md px-2 py-1 md:px-4 md:py-2 mt-20 
                   tracking-tight transition-all duration-300 shadow-md hover:bg-blue-800 
                   hover:text-white hover:shadow-xl cursor-pointer flex items-center justify-center"
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 8px 25px rgba(30, 64, 175, 0.3)", // soft blue glow
              }}
              whileTap={{ scale: 0.95 }}
            >
              Know the team
              <MdArrowOutward className="ml-2" />
            </motion.button>
          </Link>
          <Link href="/MockPlacement">
            <motion.button
              className="bg-white text-sm md:text-xl font-medium text-blue-800 rounded-md px-2 py-1 md:px-4 md:py-2 md:mt-20 
                   tracking-tight transition-all duration-300 shadow-md hover:bg-blue-800 
                   hover:text-white hover:shadow-xl cursor-pointer flex items-center justify-center"
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 8px 25px rgba(30, 64, 175, 0.3)", // soft blue glow
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get to know about Mock Placements
              <MdArrowOutward className="ml-2" />
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
}
