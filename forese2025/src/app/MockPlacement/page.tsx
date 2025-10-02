"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Briefcase, BarChart, CheckCircle, Award, MessageSquare, UserCheck } from "lucide-react";
import Footer from "../component/Footer";
import  CountUp  from "../../components/ui/CountUp";

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';





const MockPlacementsPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stats = [
    { icon: Users, end: 900, label: "Pre-final Year Students" },
    { icon: Briefcase, end: 120, label: "HR Professionals & Experts" },
    { icon: BarChart, end: 100, label: "Prominent Companies" },
  ];

  const processSteps = [
    {
      icon: CheckCircle,
      title: "Technical Assessments",
      description: "Students undergo rigorous technical evaluations to assess their domain knowledge and problem-solving skills.",
    },
    {
      icon: MessageSquare,
      title: "Group Discussions",
      description: "Collaborative sessions designed to evaluate communication, leadership, and teamwork abilities in a competitive setting.",
    },
    {
      icon: UserCheck,
      title: "Individual Interviews",
      description: "One-on-one interviews with industry experts provide a realistic experience of the final placement hurdle.",
    },
    {
      icon: Award,
      title: "Personalized Feedback",
      description: "Participants receive detailed, constructive feedback from HR professionals to identify strengths and areas for improvement.",
    },
  ];

  return (
    <>
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <motion.section
          className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/groupdiscussion.JPG"
              alt="FORESE Mock Placements Event"
              layout="fill"
              objectFit="cover"
              className="brightness-50"
            />
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
              FORESE Mock Placements
            </motion.h1>
            <motion.p
              className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200"
              variants={fadeInUp}
            >
              Our flagship event dedicated to preparing pre-final year students for the rigors of the professional world through simulated placement drives.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Bridging Talent with Opportunity
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              FORESE&apos;s Mock Placements event is our premier annual program, exclusively for pre-final year students across all disciplines. This preparatory event fosters a competitive atmosphere, offering invaluable insights into actual placement dynamics. It empowers students with essential skills and exposure, helping them hone their abilities in readiness for upcoming career opportunities. In collaboration with Sri Venkateswara College of Engineering, we are proud of this flagship event and remain committed to delivering enhanced outcomes year after year.
            </p>
          </div>
        </motion.section>
        <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Companies that have participated in our Mock Placements
            </h1>
        </div>
   

        {/* Stats Section */}
        <motion.section
          className="pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 text-center shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
                  variants={fadeInUp}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
                      <stat.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-5xl font-bold text-blue-600">
                    <CountUp to={stat.end} duration={3} />+
                  </h3>
                  <p className="mt-2 text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The Path to Placement Success
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our structured process is designed to simulate every stage of a real campus placement drive.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div key={index} className="text-center" variants={fadeInUp}>
                  <div className="flex justify-center mb-5">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-200">
                      <step.icon className="w-10 h-10 text-gray-700" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default MockPlacementsPage;