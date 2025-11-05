"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Squares from "../../../components/ui/Squares";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import SpotlightCard from "../../../components/ui/SpotlightCard";
import ShinyText from "../../../components/ui/Shinytext";
import Footer from "@/app/component/Footer";
import { Brain, Clock, Target, Briefcase } from "lucide-react";

const AptitudePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const newFeatures = [
    {
      icon: Target,
      title: "Identifying Strengths and Weaknesses",
      desc: "Providing candidates with clear feedback on their strengths and areas for improvement.",
      color: "blue",
    },
    {
      icon: Briefcase,
      title: "Aligning Skills with Interests",
      desc: "Helping candidates identify how their skills align with their career goals.",
      color: "teal",
    },
    {
      icon: Clock,
      title: "Enhancing Time Management",
      desc: "Effective time management under pressure is crucial for achieving success in both academic and professional environments.",
      color: "indigo",
    },
    {
      icon: Brain,
      title: "Fostering Critical Thinking",
      desc: "Developing the capacity to systematically evaluate information and address complex problems using strategic reasoning.",
      color: "sky",
    },
  ];

  const colorVariants: {
    [key: string]: { bg: string; text: string; border: string };
  } = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-300",
    },
    teal: {
      bg: "bg-teal-50",
      text: "text-teal-600",
      border: "border-teal-300",
    },
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      border: "border-indigo-300",
    },
    sky: { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-200" },
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-transparent  overflow-hidden"
    >
      <div className="fixed inset-0 -z-10">
        <div
          className="bg-blue-50 blur-[3px]"
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <Squares
            speed={0.3}
            squareSize={40}
            direction="up" // up, down, left, right, diagonal
            borderColor="#004aad"
            hoverFillColor="#222"
          />
        </div>{" "}
      </div>

      <motion.section
        style={{ y }}
        className="relative z-10 min-h-[70vh] flex items-center px-4 sm:px-6 lg:px-8 bg-white shadow-lg border-2 border-t-gray-200"
      >
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <ShinyText
              text="FORESE Aptitude"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900"
              speed={3}
            />
            <p className="mt-6 text-black/90 text-lg sm:text-xl leading-relaxed">
              Practice modules, quizzes, and mentorship to strengthen
              Quantitative, Logical, and Verbal skills for placements and exams.
              Join our structured training with mock tests and analytics.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="mt-6 text-black/80 text-lg sm:text-xl leading-relaxed">
                The Aptitude Test evaluates key skills, including logical
                reasoning, analytical thinking, numerical ability, and
                problem-solving, all of which are essential for success in a
                competitive environment. This year&apos;s assessment includes
                thoughtfully developed questions that enable participants to
                demonstrate their strengths. Each section aligns with various
                academic fields to ensure the test remains relevant to
                students&apos; diverse career paths and goals.
              </p>
            </motion.div>
          </div>
          <div>
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src="/aptitude.jpeg"
                alt="Aptitude Training"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative z-10 py-16 px-4 sm:px-6 lg:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-black text-center mb-12"
          >
            Key Objectives
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {newFeatures.map((f, i) => (
              <motion.div
                key={i}
                className={`p-8 rounded-xl border  ${colorVariants[f.color].border} ${colorVariants[f.color].bg} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                variants={fadeInUp}
              >
                <div
                  className={`p-3 inline-block rounded-lg mb-4 ${colorVariants[f.color].text.replace("text", "bg")}/10`}
                >
                  <f.icon
                    className={`w-7 h-7 ${colorVariants[f.color].text}`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

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
      <Footer/>
    </div>
  );
};

export default AptitudePage;
