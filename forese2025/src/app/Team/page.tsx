"use client";

import { useState } from "react";
import {
  coreMembers,
  seniorMembers,
  members,
  type CoreMember,
} from "@/data/team";
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
  const [activeTab, setActiveTab] = useState<
    "core" | "senior" | "members"
  >("core");

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-8 mt-20">Meet the Team</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={() => setActiveTab("core")}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === "core"
              ? "bg-white text-black"
              : "bg-zinc-800 text-white"
          }`}
        >
          Core Members
        </button>
        <button
          onClick={() => setActiveTab("senior")}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === "senior"
              ? "bg-white text-black"
              : "bg-zinc-800 text-white"
          }`}
        >
          Senior Members
        </button>
        <button
          onClick={() => setActiveTab("members")}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === "members"
              ? "bg-white text-black"
              : "bg-zinc-800 text-white"
          }`}
        >
          Members
        </button>
      </div>

      {/* Tab Content */}
      <div className="w-full max-w-6xl">
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
