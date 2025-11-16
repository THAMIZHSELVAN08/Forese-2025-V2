"use client";
import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { FaSuitcase } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import Image from "next/image";
import TextType from "../../components/ui/TextType";
export default function Hero() {
  return (
    <>
      <div className="h-screen flex flex-col font-bold font-hanken text-3xl md:text-6xl lg:text-8xl justify-center items-center text-center px-4">
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
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:mt-20 w-full max-w-4xl px-4">
          <Link href="/Team" className="flex-1">
            <motion.button
              className="w-full bg-white text-base sm:text-lg font-semibold text-blue-900 rounded-xl 
                   px-6 py-3.5 tracking-tight transition-all duration-300 shadow-lg 
                   hover:bg-blue-900 hover:text-white hover:shadow-2xl 
                   border border-blue-100 flex items-center justify-center gap-2"
              whileHover={{
                scale: 1.02,
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Know the Team</span>
              <RiTeamFill className="text-xl" />
            </motion.button>
          </Link>
          <Link href="/MockPlacement" className="flex-1">
            <motion.button
              className="w-full bg-white text-base sm:text-lg font-semibold text-blue-900 rounded-xl 
                   px-6 py-3.5 tracking-tight transition-all duration-300 shadow-lg 
                   hover:bg-blue-900 hover:text-white hover:shadow-2xl 
                   border border-blue-100 flex items-center justify-center gap-2"
              whileHover={{
                scale: 1.02,
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="whitespace-nowrap sm:whitespace-normal">
                Mock Placements
              </span>
              <FaSuitcase className="text-xl flex-shrink-0" />
            </motion.button>
          </Link>
        </div>
      </div>{" "}
    </>
  );
}
