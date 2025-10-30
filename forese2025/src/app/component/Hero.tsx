"use client";
import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import TextType from "@/components/ui/TextType";

export default function Hero() {
  return (
    <>
      
      <div className="h-screen flex flex-col font-bold font-hanken text-3xl md:text-6xl lg:text-8xl justify-center items-center text-center">
        <span className="inline-flex">
          <h1
            className="text-white text-center"
            style={{ fontFamily: "var(--font-hanken-grotesk)" }}
          >
            FOR{" "}
          </h1>
          <h1
            className="text-white text-center"
            style={{ fontFamily: "var(--font-hanken-grotesk)" }}
          >
            um for Economic Studies
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
          className="text-white text-xl mt-5 text-center"
        />
        <Link href="/Team">
               <motion.button
                   className="bg-white text-xl font-medium text-blue-800 rounded-md px-4 py-2 mt-10 
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
      </div>

    </>
  );
}

function sections() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Another Section
        </h2>
        <p className="text-lg text-gray-600">
          More content that scrolls over the fixed background...
        </p>
      </div>
    </div>
  );
}
