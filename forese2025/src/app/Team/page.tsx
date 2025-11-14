"use client";

import { useState } from "react";
import {
  seniorCoreMembers,
  juniorCoreMembers,
  seniorMembers,
  members,
} from "@/data/team";
import Squares from "../../components/ui/Squares";
import StarBorder from "@/components/ui/StarBorder";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Footer from "../component/Footer";

function MemberCard({ member, index }: { member: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="group relative flex flex-col w-full max-w-[280px] h-[380px] bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-gray-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image - Takes 3/4 of the card */}
      <div className="relative w-full h-[285px] overflow-hidden rounded-t-2xl">
        <motion.div
          className="relative w-full h-full"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={member.imageUrl}
            alt={member.name}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        {/* Overlay with one-liner on hover */}
        <AnimatePresence>
          {isHovered && member.oneLiner && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-end justify-center p-4"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-white text-center text-sm md:text-base font-medium italic px-2"
              >
                "{member.oneLiner}"
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer - Takes 1/4 of the card */}
      <footer className="relative z-10 p-4 bg-white flex items-center justify-between w-full h-[95px] rounded-b-2xl">
        <div className="flex flex-col items-start justify-center">
          <h3 className="m-0 text-base font-semibold text-gray-900 leading-tight">
            {member.name}
          </h3>
          <p className="m-0 text-sm text-gray-600 mt-1">{member.role}</p>
        </div>

        {member.linkedinUrl && (
          <motion.a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>
        )}
      </footer>
    </motion.article>
  );
}

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState<"core" | "senior" | "members">(
    "core",
  );
  const [activeCoreTab, setActiveCoreTab] = useState<
    "seniorCore" | "juniorCore"
  >("seniorCore");

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-transparent text-white p-6">
        <div className="fixed inset-0 -z-10">
          <div
            className="bg-blue-50 blur-[3px]"
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

        <motion.div
          style={{ fontFamily: "var(--font-poppins)" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 mt-20 text-blue-900 text-center">
            Meet the Team
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <StarBorder
            color="#3b82f6"
            speed="1s"
            thickness={4.5}
            className="mb-10"
          >
            <div className="flex h-20 border-2 border-grey-50 rounded-full bg-black relative">
              <motion.div
                className="absolute top-0 bottom-0 bg-white rounded-full"
                initial={false}
                animate={{
                  left:
                    activeTab === "core"
                      ? "0%"
                      : activeTab === "senior"
                        ? "33.33%"
                        : "66.66%",
                  width: "33.33%",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                style={{ zIndex: 0 }}
              />
              <button
                onClick={() => setActiveTab("core")}
                className={`relative z-10 px-6 py-3 font-medium rounded-l-full transition-colors duration-300 ${
                  activeTab === "core" ? "text-black" : "text-white"
                }`}
              >
                Core Members
              </button>
              <button
                onClick={() => setActiveTab("senior")}
                className={`relative z-10 px-6 py-3 font-medium transition-colors duration-300 ${
                  activeTab === "senior" ? "text-black" : "text-white"
                }`}
              >
                Senior Members
              </button>
              <button
                onClick={() => setActiveTab("members")}
                className={`relative z-10 px-6 py-3 font-medium rounded-r-full transition-colors duration-300 ${
                  activeTab === "members" ? "text-black" : "text-white"
                }`}
              >
                Members
              </button>
            </div>
          </StarBorder>
        </motion.div>

        <div className="w-full max-w-7xl">
          <AnimatePresence mode="wait">
            {activeTab === "core" && (
              <motion.div
                key="core"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="space-y-8"
              >
                <div className="flex justify-center">
                  <StarBorder
                    color="#3b82f6"
                    speed="1s"
                    thickness={4.5}
                    className="inline-block"
                  >
                    <div className="flex h-16 border-2 border-grey-50 rounded-full bg-black relative">
                      <motion.div
                        className="absolute top-0 bottom-0 bg-zinc-800 rounded-full"
                        initial={false}
                        animate={{
                          left: activeCoreTab === "seniorCore" ? "0%" : "50%",
                          width: "50%",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        style={{ zIndex: 0 }}
                      />
                      <button
                        onClick={() => setActiveCoreTab("seniorCore")}
                        className={`relative z-10 px-6 py-3 font-medium rounded-l-full transition-colors duration-300 ${
                          activeCoreTab === "seniorCore"
                            ? "text-white"
                            : "text-white"
                        }`}
                      >
                        Senior Core
                      </button>
                      <button
                        onClick={() => setActiveCoreTab("juniorCore")}
                        className={`relative z-10 px-6 py-3 font-medium rounded-r-full transition-colors duration-300 ${
                          activeCoreTab === "juniorCore"
                            ? "text-white"
                            : "text-white"
                        }`}
                      >
                        Junior Core
                      </button>
                    </div>
                  </StarBorder>
                </div>

                <AnimatePresence mode="wait">
                  {activeCoreTab === "seniorCore" && (
                    <motion.div
                      key="seniorCore"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
                    >
                      {seniorCoreMembers.map((member, index) => (
                        <MemberCard
                          key={member.id}
                          member={member}
                          index={index}
                        />
                      ))}
                    </motion.div>
                  )}

                  {activeCoreTab === "juniorCore" && (
                    <motion.div
                      key="juniorCore"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
                    >
                      {juniorCoreMembers.map((member, index) => (
                        <MemberCard
                          key={member.id}
                          member={member}
                          index={index}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {activeTab === "senior" && (
              <motion.div
                key="senior"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                  {seniorMembers.slice(0, 50).map((member, index) => (
                    <MemberCard key={member.id} member={member} index={index} />
                  ))}
                </div>

                {seniorMembers.length > 50 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {seniorMembers.slice(50).map((member, index) => (
                      <MemberCard
                        key={member.id}
                        member={member}
                        index={index + 50}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === "members" && (
              <motion.div
                key="members"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
              >
                {members.map((member, index) => (
                  <MemberCard key={member.id} member={member} index={index} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </>
  );
}
