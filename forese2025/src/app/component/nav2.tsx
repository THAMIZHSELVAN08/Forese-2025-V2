"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import StaggeredMenu from "../../components/ui/StaggeredMenu";
import Button from "../../components/ui/button";

export default function Nav() {
  const navLinks = [
    { href: "/MockPlacement", label: "MOCK PLACEMENTS" },
    { href: "/Coderforum", label: "CODERS' FORUM" },
    { href: "/Event", label: "EVENTS" },
    { href: "/Team", label: "TEAM" },
  ];

  const menuItems = [
    { label: "HOME", ariaLabel: "Visit our Home Page", link: "/" },
    {
      label: "MOCK PLACEMENT",
      ariaLabel: "Go to Mock Placement page",
      link: "/MockPlacement",
    },
    {
      label: "CODERS' FORUM",
      ariaLabel: "Go to Coders' Forum",
      link: "/Coderforum",
    },
    { label: "EVENTS", ariaLabel: "Learn about our Events", link: "/Event" },
    { label: "TEAM", ariaLabel: "Get to know the team", link: "/Team" },
    {
      label: "SUBMIT RESUME",
      ariaLabel: "Submit your resume",
      link: "/Resume",
    },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com/ForeseTech" },
    { label: "LinkedIn", link: "https://www.linkedin.com/company/forese/" },
  ];

  return (
    <>
      <div className="md:hidden fixed inset-0 z-40 pointer-events-none">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#000"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={["#B19EEF", "#5227FF"]}
          logoUrl="/FOR.png"
          accentColor="#004aad"
          onMenuOpen={() => document.body.classList.add("overflow-hidden")}
          onMenuClose={() => document.body.classList.remove("overflow-hidden")}
        />
      </div>
      <nav
        className="hidden md:flex justify-between items-center fixed top-0 left-0 right-0 h-20 z-50 w-full 
  bg-blue-50/40 backdrop-blur-sm
  border-b border-blue-200/50 shadow-lg px-0"
      >
        <Link href="/" className="z-50 flex-shrink-0 ml-6">
          <motion.div
            className="bg-blue-800 h-20 sm:h-18 px-6 flex items-center gap-3
                 rounded-xl shadow-md border border-blue-100/50"
            whileTap={{ scale: 0.98 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 4px 20px rgba(59,130,246,0.15)",
            }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/FOR.png"
              alt="logo"
              width={90}
              height={70}
              className="object-contain"
              priority
            />
          </motion.div>
        </Link>
        <div className="flex flex-wrap justify-end gap-3 text-blue-900 font-semibold tracking-wide items-center pr-4 sm:pr-6 lg:pr-8">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <motion.div
                className="relative cursor-pointer px-3 py-2 rounded-xl transition-all duration-300 
                     hover:bg-white/60 hover:shadow-md text-sm lg:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{link.label}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl opacity-0"
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                />
              </motion.div>
            </Link>
          ))}
          <Link href="/Resume">
            <motion.div
              className="relative cursor-pointer bg-blue-800 text-white 
                          px-5 sm:px-6 py-2 sm:py-3 text-sm lg:text-base font-semibold rounded-xl 
                          shadow-lg hover:shadow-xl transition-all duration-300 select-none"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 8px 25px rgba(59,130,246,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              SUBMIT RESUME
            </motion.div>
          </Link>
        </div>
      </nav>{" "}
    </>
  );
}
