"use client";

import React from "react";
import { motion } from "framer-motion";
import Squares from "../../../components/ui/Squares";
import Image from "next/image";
import {
  Globe,
  GraduationCap,
  Banknote,
  BookOpenCheck,
  Briefcase,
} from "lucide-react";
import Footer from "../../component/Footer";

const ForedPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const features = [
    {
      icon: GraduationCap,
      title: "Direct University Interaction",
      description:
        "Connect with admission experts from top universities in the US, UK, Australia, and more to get personalized insights.",
    },
    {
      icon: Banknote,
      title: "Scholarships & Financial Aid",
      description:
        "Explore diverse academic specializations, scholarships, and financial aid options to make your dream a reality.",
    },
    {
      icon: Briefcase,
      title: "Career & Visa Guidance",
      description:
        "Receive expert advice on application processes, post-study work opportunities, and the academic landscape abroad.",
    },
    {
      icon: BookOpenCheck,
      title: "Standardized Test Support",
      description:
        "Get critical guidance on TOEFL, IELTS, and GRE, including exam structures, prep strategies, and score requirements.",
    },
  ];

  return (
    <>
      <div className="bg-transparent text-gray-800">
        {/* Hero Section */}
        <motion.section
          className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8 bg-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/foredimg.jpg" // Make sure to add your image to the public folder
              alt="Foreign Universities Education Fair"
              fill
              className="object-cover brightness-80"
            />
          </div>
          <div className="fixed inset-0 -z-10">
            <div
              className="bg-blue-50"
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

          <motion.div
            className="relative z-10 max-w-4xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-black tracking-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
              variants={fadeInUp}
            >
              FORED: Your Gateway to Global Education
            </motion.h1>
            <motion.p
              className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200"
              variants={fadeInUp}
            >
              Connect with leading international universities and chart your
              path to studying abroad.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Your Bridge to International Academia
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              FORESE&apos;s Foreign Universities Education Fair (FORED) provides
              a platform for students to connect directly with admission experts
              and educational consultants, offering personalized insights into
              diverse international study options. This holistic approach helps
              students navigate the complexities of pursuing higher education
              overseas, ensuring they are well-prepared for academic success and
              life abroad from start to finish.
            </p>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8 mt-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Attend FORED?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Gain a comprehensive understanding of studying abroad, from
                applications to career prospects.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
                  variants={fadeInUp}
                >
                  <div className="flex justify-center mb-5">
                    <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
                      <feature.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Countries Section */}
        <motion.section
          className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center items-center mb-6">
              <Globe className="w-10 h-10 text-gray-700" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Meet Universities From Around the World
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Representatives from leading universities in the{" "}
              <span className="font-semibold text-blue-600">US</span>,{" "}
              <span className="font-semibold text-blue-600">UK</span>,{" "}
              <span className="font-semibold text-blue-600">Australia</span>,
              and more participate in the fair, guiding students through every
              step of their journey.
            </p>
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default ForedPage;

