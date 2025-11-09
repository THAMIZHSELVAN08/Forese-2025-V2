"use client";
import Squares from "../../../components/ui/Squares";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ShinyText from "../../../components/ui/Shinytext";
import Image from "next/image";

const HackathonPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    {
      title: "Innovation Hub",
      description:
        "A platform where creativity meets technology, fostering groundbreaking ideas and solutions.",
      icon: "🚀",
      delay: 0.1,
    },
    {
      title: "Team Collaboration",
      description:
        "Connect with developers, designers, and innovators to build amazing projects.",
      icon: "👥",
      delay: 0.2,
    },
    {
      title: "Expert Mentorship",
      description: "Guidance from industry professionals throughout the event.",
      icon: "🎯",
      delay: 0.3,
    },
    {
      title: "Prizes & Recognition",
      description:
        "Win exciting prizes and get recognized for your innovation.",
      icon: "🏆",
      delay: 0.4,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-transparent overflow-hidden"
    >
      <div className="fixed inset-0 -z-10">
        <div
          className="bg-blue-50 blur-[3px]"
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <Squares
            speed={0.1}
            squareSize={40}
            direction="up"
            borderColor="#004aad"
            hoverFillColor="#222"
          />
        </div>
      </div>

      <motion.section
        style={{ y }}
        className="relative z-10 min-h-[100vh] min-w-full flex items-center px-4 sm:px-6 lg:px-8"
      >
        <div
          className="max-w-7xl mx-auto text-center"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          <ShinyText
            text="Coders' Forum Hackathon"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900"
            speed={3}
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-black max-w-3xl mx-auto"
          >
            FORESE and Coders&apos; Forum hosted their first 24-hour hackathon for
            pre-final year students on January 28–29, 2023, at Sri Venkateswara
            College of Engineering, Sriperumbudur, with EDWISE INTERNATIONAL as
            the sponsor. Out of all submissions, twenty teams advanced to the
            finals, where they developed working prototypes under the guidance of
            Coders&apos; Forum mentors. After a full day of coding, a panel from Sahaj
            Software judged the projects and selected the top three teams,
            awarding cash prizes of ₹5,000, ₹3,000, and ₹1,500. The event provided
            students with valuable industry exposure, and Sahaj Software also
            shortlisted five participants for internship interviews. The hackathon
            was a resounding success, providing a platform for innovation and
            skill development.
          </motion.p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/Event">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 border-2 border-white/30 text-black font-semibold rounded-full text-lg backdrop-blur-sm hover:bg-white/10"
              >
                Back to Events
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>

      <section
        id="features"
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-12">
            Why Join Our Hackathon?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: f.delay }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <div className="h-full p-6 text-center bg-white rounded-xl shadow-md border border-gray-200">
                  <div className="text-6xl mb-4">{f.icon}</div>
                  <h3 className="text-gray-900 text-xl font-bold mb-2">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 ">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-12">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: "/hackathon.JPG", alt: "Hackathon Event" },
              { src: "/CoderForum.png", alt: "Coding Session" },
              { src: "/groupdiscussion.JPG", alt: "Team Discussion" },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.04 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-semibold">
                  {image.alt}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50">
        <Link href="/Event">
          <motion.button
            className="bg-white/90 backdrop-blur-md border border-blue-200 rounded-full px-6 py-3 text-blue-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Events
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default HackathonPage;