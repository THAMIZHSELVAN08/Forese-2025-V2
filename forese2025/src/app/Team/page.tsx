"use client";

import { useState } from "react";
import {
  coreMembers,
  seniorMembers,
  members,
  type CoreMember,
} from "@/data/team";
import Squares from "../../components/ui/Squares";
import ChromaGrid from "@/components/ui/ChromaGrid";
import Footer from "../component/Footer";
// Transform function
function transformMembers(members: CoreMember[]) {
  return members.map((m) => ({
    id: m.id,
    title: m.name,
    subtitle: m.role,
    image: m.imageUrl,
    oneLiner: m.oneLiner,
    linkedin: m.linkedinUrl,
  }));
}

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState<"core" | "senior" | "members">(
    "core",
  );

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-transparent text-white p-6">
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
        <div style={{ fontFamily: "var(--font-poppins)" }}>
          <h1 className="text-6xl font-bold mb-8 mt-20 text-blue-900 text-center">
            Meet the Team
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex mb-10 backdrop-blur-sm h-20 border-2 border-grey-50 rounded-full">
          <button
            onClick={() => setActiveTab("core")}
            className={`px-4 py-2 font-medium ${
              activeTab === "core"
                ? "bg-white text-black"
                : "bg-zinc-800 text-white"
            }`}
          >
            Core Members
          </button>
          <button
            onClick={() => setActiveTab("senior")}
            className={`px-4 py-2 font-medium ${
              activeTab === "senior"
                ? "bg-white text-black"
                : "bg-zinc-800 text-white"
            }`}
          >
            Senior Members
          </button>
          <button
            onClick={() => setActiveTab("members")}
            className={`px-4 py-2 font-medium ${
              activeTab === "members"
                ? "bg-white text-black"
                : "bg-zinc-800 text-white"
            }`}
          >
            Members
          </button>
        </div>

        {/* Tab Content */}
        <div className="w-full max-w-7xl">
          {activeTab === "core" && (
            <ChromaGrid
              items={transformMembers(coreMembers)}
              radius={350}
              damping={0.4}
              fadeOut={0.7}
              ease="power3.out"
              className="w-full h-full"
            />
          )}

          {activeTab === "senior" && (
            <ChromaGrid
              items={transformMembers(seniorMembers)}
              radius={350}
              damping={0.4}
              fadeOut={0.7}
              ease="power3.out"
              className="w-full h-full"
            />
          )}

          {activeTab === "members" && (
            <ChromaGrid
              items={transformMembers(members)}
              radius={350}
              damping={0.4}
              fadeOut={0.7}
              ease="power3.out"
              className="w-full h-full"
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
