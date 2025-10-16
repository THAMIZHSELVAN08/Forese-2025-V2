"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Squares from "../../components/ui/Squares";
import {
  Users,
  MessageCircle,
  Brain,
  Target,
  TrendingUp,
  Award,
  Eye,
  MessageSquare,
  Zap,
  Shield,
  CheckCircle,
  Ear,
} from "lucide-react";
import Footer from "../component/Footer";
import Iridescence from "@/components/ui/Iridescence";

const GroupDiscussionPage = () => {
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

  const benefits = [
    {
      icon: Brain,
      title: "Enhanced Critical Thinking",
      description:
        "Develop analytical skills by evaluating different perspectives and forming well-reasoned arguments.",
      color: "blue",
    },
    {
      icon: MessageCircle,
      title: "Improved Communication",
      description:
        "Build confidence in expressing ideas clearly and persuasively in professional settings.",
      color: "teal",
    },
    {
      icon: Users,
      title: "Leadership Skills",
      description:
        "Learn to guide conversations, mediate conflicts, and influence group dynamics positively.",
      color: "indigo",
    },
    {
      icon: Target,
      title: "Quick Decision Making",
      description:
        "Practice making informed decisions under time pressure while considering multiple viewpoints.",
      color: "sky",
    },
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description:
        "Stand out in interviews and workplace meetings with polished discussion abilities.",
      color: "emerald",
    },
    {
      icon: Award,
      title: "Confidence Building",
      description:
        "Overcome public speaking anxiety and build self-assurance in group settings.",
      color: "purple",
    },
  ];

  const tips = [
    {
      category: "Before Speaking",
      icon: Eye,
      items: [
        "Listen actively to understand others' viewpoints.",
        "Take brief notes to organize your thoughts.",
        "Wait for appropriate moments to contribute.",
        "Prepare key points mentally before speaking.",
      ],
    },
    {
      category: "While Speaking",
      icon: MessageSquare,
      items: [
        "Speak clearly and at a moderate pace.",
        "Make eye contact with group members.",
        "Use specific examples to support your points.",
        "Keep contributions concise and relevant.",
      ],
    },
    {
      category: "Group Dynamics",
      icon: Users,
      items: [
        "Encourage quieter members to participate.",
        "Build on others' ideas constructively.",
        "Handle disagreements respectfully.",
        "Stay focused on the topic at hand.",
      ],
    },
  ];

  const phases = [
    {
      icon: Eye,
      title: "Observation Phase",
      duration: "First 2-3 minutes",
      description:
        "Listen carefully to understand the topic and gauge group dynamics before contributing.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: MessageSquare,
      title: "Initial Contribution",
      duration: "Minutes 3-5",
      description:
        "Make your first meaningful contribution with a clear stance or relevant insight.",
      color: "from-sky-500 to-indigo-500",
    },
    {
      icon: Users,
      title: "Active Participation",
      duration: "Middle phase",
      description:
        "Engage actively while balancing speaking time with others and building on ideas.",
      color: "from-teal-500 to-emerald-500",
    },
    {
      icon: Target,
      title: "Conclusion Building",
      duration: "Final minutes",
      description:
        "Help synthesize key points and work toward group consensus or clear outcomes.",
      color: "from-purple-500 to-violet-500",
    },
  ];

  const mistakes = [
    { text: "Dominating the conversation", icon: Shield },
    { text: "Not listening to others", icon: Ear },
    { text: "Speaking without preparation", icon: Brain },
    { text: "Being overly aggressive", icon: Target },
    { text: "Staying completely silent", icon: MessageCircle },
    { text: "Going off-topic frequently", icon: Zap },
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
    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-300",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-300",
    },
  };

  return (
    <>
      <div className="relative min-h-screen bg-transparent text-black overflow-hidden ">
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
        {/* Hero Section */}
        <motion.section
          className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white backdrop-blur-sm border-2 border-b-gray-200 shadow-lg pt-20 flex justify-center items-center"
          style={{ height: "80vh" }}
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ">
              {/* Main Hero Content */}
              <motion.div className="lg:col-span-6" variants={fadeInUp}>
                <span className="text-sm font-bold text-blue-900 uppercase tracking-wide">
                  Learn the art of strategic communication with this
                </span>
                <h1
                  className="text-4xl lg:text-6xl font-black text-black my-4 leading-tight"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Group Discussion
                  <span
                    className="block text-black bg-clip-text "
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Mastery Guide
                  </span>
                </h1>
                <p className="text-lg text-blue-900 mb-8 leading-relaxed max-w-2xl">
                  Transform your communication skills with our proven
                  strategies. This guide is designed to help you excel in the
                  mock group discussions and stand out in your placements.
                </p>
              </motion.div>

              {/* Image Card */}
              <motion.div
                className="lg:col-span-6 relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg h-80 lg:h-96"
                variants={fadeInUp}
              >
                <Image
                  src="/gd.jpeg"
                  layout="fill"
                  alt="Students participating in a group discussion"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg">
                    Real-world preparation for professional success.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        {/* Benefits Section */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2
                className="text-4xl lg:text-7xl font-black mb-4 text-black"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Unlock Your Potential
              </h2>
              <p className="text-lg text-black max-w-2xl mx-auto p-2 bg-white backdrop-blur-sm rounded-md border-2 border-blue-900">
                Mastering group discussions offers game-changing benefits for
                your career.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className={`p-8 rounded-xl border ${colorVariants[benefit.color].border} ${colorVariants[benefit.color].bg} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                  variants={fadeInUp}
                >
                  <div
                    className={`p-3 inline-block rounded-lg mb-4 ${colorVariants[benefit.color].text.replace("text", "bg")}/10`}
                  >
                    <benefit.icon
                      className={`w-7 h-7 ${colorVariants[benefit.color].text}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        {/* GD Phases Timeline */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-2 border-t-gray-200 border-b-gray-200 shadow-lg"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2
                className="text-4xl lg:text-5xl font-black mb-4 text-gray-900"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                The Winning Playbook
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Master these four phases to navigate any group discussion with
                confidence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  className="relative bg-gray-50 p-8 rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-gray-300"
                  variants={fadeInUp}
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${phase.color}`}
                  ></div>
                  <div className="flex items-start gap-5">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${phase.color} text-white flex-shrink-0`}
                    >
                      <phase.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {phase.title}
                      </h3>
                      <span className="text-sm font-medium text-gray-500 mb-3 block">
                        {phase.duration}
                      </span>
                      <p className="text-gray-600 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        {/* Tips Section */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2
                className="text-4xl lg:text-5xl font-black mb-4 text-gray-900"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Pro Strategies
              </h2>
              <p className="text-lg text-black max-w-2xl mx-auto p-2 bg-white backdrop-blur-sm rounded-md border-2 border-blue-900">
                Adopt these battle-tested techniques to make a lasting
                impression.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {tips.map((section, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 border border-gray-200 rounded-xl shadow-sm"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gray-100 rounded-lg mr-4">
                      <section.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {section.category}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {section.items.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 leading-relaxed">
                          {tip}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        {/* Common Mistakes */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-red-50 border-2 border-t-red-200 shadow-lg "
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto ">
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2
                className="text-4xl lg:text-5xl font-black mb-4 text-red-900"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Deadly Mistakes to Avoid
              </h2>
              <p className="text-lg text-red-800">
                Don&apos;t let these common pitfalls sabotage your performance.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 border border-red-200 rounded-2xl shadow-md"
              variants={fadeInUp}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mistakes.map((mistake, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <mistake.icon className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <span className="text-red-900 font-medium">
                      {mistake.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default GroupDiscussionPage;
