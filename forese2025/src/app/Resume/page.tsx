"use client";

import Footer from "../component/Footer";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Star,
  Lightbulb,
  Target,
  Award,
  Users,
} from "lucide-react";
import Squares from "../../components/ui/Squares";

export default function ResumeSubmission() {
  const resumeTips = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Tailor Your Resume",
      description:
        "Customize your resume for each job application. Match keywords from the job description to increase your chances of passing ATS systems.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Quantify Achievements",
      description:
        "Use numbers and metrics to showcase your impact. Instead of 'improved sales,' write 'increased sales by 25% over 6 months.'",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Keep It Concise",
      description:
        "Limit your resume to 1-2 pages. Use bullet points and concise language. Recruiters spend only 6-10 seconds scanning each resume.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Highlight Skills",
      description:
        "Create a dedicated skills section with both technical and soft skills relevant to your target role. Include certifications and tools you're proficient in.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Format",
      description:
        "Use a clean, professional layout with consistent fonts and spacing. Avoid graphics and photos unless you're in a creative field.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Proofread Carefully",
      description:
        "Check for typos, grammatical errors, and formatting inconsistencies. Have someone else review your resume before submitting.",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-white pt-30">
     
      <div className="fixed inset-0 -z-10">
        <div
          className="bg-blue-50"
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <Squares
            speed={0.3}
            squareSize={40}
            direction="up"
            borderColor="#004aad"
            hoverFillColor="#222"
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-blue-900 mb-6"
          >
            Resume Building <span className="text-blue-600">Tips</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-black/90 max-w-2xl mx-auto leading-relaxed"
          >
            Craft a winning resume with these expert tips to stand out from
            the competition and land your dream job.
          </motion.p>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Expert Resume Tips
            </h2>
            <p className="text-black/90 text-lg max-w-2xl mx-auto">
              Master the art of resume writing with these proven strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {resumeTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/95 backdrop-blur-sm border border-blue-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-blue-600">{tip.icon}</span>
                  </div>
                  <h3 className="text-blue-900 font-semibold text-lg">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-black/90 leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
