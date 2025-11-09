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
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import Footer from "../component/Footer";

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
        <div style={{ fontFamily: "var(--font-poppins)" }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 mt-20 text-blue-900 text-center">
            Meet the Team
          </h1>
        </div>

        <StarBorder
          color="#3b82f6"
          speed="1s"
          thickness={4.5}
          className="mb-10"
        >
          <div className="flex backdrop-blur-sm h-20 border-2 border-grey-50 rounded-full bg-white/10">
            <button
              onClick={() => setActiveTab("core")}
              className={`px-6 py-3 font-medium rounded-l-full ${
                activeTab === "core"
                  ? "bg-white text-black"
                  : "bg-zinc-800 text-white"
              }`}
            >
              Core Members
            </button>
            <button
              onClick={() => setActiveTab("senior")}
              className={`px-6 py-3 font-medium ${
                activeTab === "senior"
                  ? "bg-white text-black"
                  : "bg-zinc-800 text-white"
              }`}
            >
              Senior Members
            </button>
            <button
              onClick={() => setActiveTab("members")}
              className={`px-6 py-3 font-medium rounded-r-full ${
                activeTab === "members"
                  ? "bg-white text-black"
                  : "bg-zinc-800 text-white"
              }`}
            >
              Members
            </button>
          </div>
        </StarBorder>

        <div className="w-full max-w-7xl">
          {activeTab === "core" && (
            <div className="space-y-8">
              <div className="flex justify-center">
                <StarBorder
                  color="#3b82f6"
                  speed="1s"
                  thickness={4.5}
                  className="inline-block"
                >
                  <div className="flex backdrop-blur-sm h-16 border-2 border-grey-50 rounded-full bg-white/10">
                    <button
                      onClick={() => setActiveCoreTab("seniorCore")}
                      className={`px-6 py-3 font-medium rounded-l-full ${
                        activeCoreTab === "seniorCore"
                          ? "bg-zinc-800 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      Senior Core
                    </button>
                    <button
                      onClick={() => setActiveCoreTab("juniorCore")}
                      className={`px-6 py-3 font-medium rounded-r-full ${
                        activeCoreTab === "juniorCore"
                          ? "bg-zinc-800 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      Junior Core
                    </button>
                  </div>
                </StarBorder>
              </div>

              {activeCoreTab === "seniorCore" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                  {seniorCoreMembers.map((member) => (
                    <article
                      key={member.id}
                      className="group relative flex flex-col w-full max-w-[280px] h-[340px] sm:h-[360px] lg:h-[380px] bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="relative z-10 flex-1 p-[10px] box-border">
                        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={member.imageUrl}
                            alt={member.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                      </div>

                      <footer className="relative z-10 p-3 text-black font-sans flex items-end justify-between w-full">
                        <div className="flex flex-col items-start">
                          <h3 className="m-0 text-[1.05rem] font-semibold text-black">
                            {member.name}
                          </h3>
                          <p className="m-0 text-[0.85rem] opacity-85 text-black">
                            {member.role}
                          </p>
                          {member.oneLiner && (
                            <p className="text-[0.8rem] italic opacity-80 font-handwritten">
                              {member.oneLiner}
                            </p>
                          )}
                        </div>

                        {member.linkedinUrl && (
                          <a
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-blue-400"
                          >
                            <svg
                              className="w-[18px] h-[18px]"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        )}
                      </footer>
                    </article>
                  ))}
                </div>
              )}

              {activeCoreTab === "juniorCore" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                  {juniorCoreMembers.map((member) => (
                    <article
                      key={member.id}
                      className="group relative flex flex-col w-full max-w-[280px] h-[340px] sm:h-[360px] lg:h-[380px] bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="relative z-10 flex-1 p-[10px] box-border">
                        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={member.imageUrl}
                            alt={member.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                      </div>

                      <footer className="relative z-10 p-3 text-black font-sans flex items-end justify-between w-full">
                        <div className="flex flex-col items-start">
                          <h3 className="m-0 text-[1.05rem] font-semibold text-black">
                            {member.name}
                          </h3>
                          <p className="m-0 text-[0.85rem] opacity-85 text-black">
                            {member.role}
                          </p>
                          {member.oneLiner && (
                            <p className="text-[0.8rem] italic opacity-80 font-handwritten">
                              {member.oneLiner}
                            </p>
                          )}
                        </div>

                        {member.linkedinUrl && (
                          <a
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-blue-400"
                          >
                            <svg
                              className="w-[18px] h-[18px]"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        )}
                      </footer>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "senior" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                {seniorMembers.slice(0, 50).map((member) => (
                  <article
                    key={member.id}
                    className="group relative flex flex-col w-full max-w-[280px] h-[340px] sm:h-[360px] lg:h-[380px] bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative z-10 flex-1 p-[10px] box-border">
                      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={member.imageUrl}
                          alt={member.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <footer className="relative z-10 p-3 text-black font-sans flex items-end justify-between w-full">
                      <div className="flex flex-col items-start">
                        <h3 className="m-0 text-[1.05rem] font-semibold text-black">
                          {member.name}
                        </h3>
                        <p className="m-0 text-[0.85rem] opacity-85 text-black">
                          {member.role}
                        </p>
                        {member.oneLiner && (
                          <p className="text-[0.8rem] italic opacity-80 font-handwritten">
                            {member.oneLiner}
                          </p>
                        )}
                      </div>

                      {member.linkedinUrl && (
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:text-blue-400"
                        >
                          <svg
                            className="w-[18px] h-[18px]"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                    </footer>
                  </article>
                ))}
              </div>

              {seniorMembers.length > 50 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                  {seniorMembers.slice(50).map((member) => (
                    <article
                      key={member.id}
                      className="group relative flex flex-col w-full max-w-[280px] h-[340px] sm:h-[360px] lg:h-[380px] bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="relative z-10 flex-1 p-[10px] box-border">
                        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={member.imageUrl}
                            alt={member.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                      </div>

                      <footer className="relative z-10 p-3 text-black font-sans flex items-end justify-between w-full">
                        <div className="flex flex-col items-start">
                          <h3 className="m-0 text-[1.05rem] font-semibold text-black">
                            {member.name}
                          </h3>
                          <p className="m-0 text-[0.85rem] opacity-85 text-black">
                            {member.role}
                          </p>
                          {member.oneLiner && (
                            <p className="text-[0.8rem] italic opacity-80 font-handwritten">
                              {member.oneLiner}
                            </p>
                          )}
                        </div>

                        {member.linkedinUrl && (
                          <a
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-blue-400"
                          >
                            <svg
                              className="w-[18px] h-[18px]"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        )}
                      </footer>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "members" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
              {members.map((member) => (
                <article
                  key={member.id}
                  className="group relative flex flex-col w-full max-w-[280px] h-[340px] sm:h-[360px] lg:h-[380px] bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative z-10 flex-1 p-[10px] box-border">
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <footer className="relative z-10 p-3 text-black font-sans flex items-end justify-between w-full">
                    <div className="flex flex-col items-start">
                      <h3 className="m-0 text-[1.05rem] font-semibold text-black">
                        {member.name}
                      </h3>
                      <p className="m-0 text-[0.85rem] opacity-85 text-black">
                        {member.role}
                      </p>
                      {member.oneLiner && (
                        <p className="text-[0.8rem] italic opacity-80 font-handwritten">
                          {member.oneLiner}
                        </p>
                      )}
                    </div>

                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-blue-400"
                      >
                        <svg
                          className="w-[18px] h-[18px]"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                  </footer>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
