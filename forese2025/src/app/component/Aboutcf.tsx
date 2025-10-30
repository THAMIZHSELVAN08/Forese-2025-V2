"use client";
import { motion } from "framer-motion";
import { FaCode, FaUsers, FaTrophy, FaLightbulb } from "react-icons/fa";
import LetterGlitch from "../../components/ui/LetterGlitch";
import Image from "next/image";

export function Something() {
  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      <div className="relative z-10 flex flex-col pt-30 min-h-screen justify-center items-center gap-7">
        <div className="flex justify-center">
          <h1
            className="text-white text-4xl md:text-8xl font-semibold"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            CODERS FORUM
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-white text-2xl md:text-4xl font-semibold">
            A place for all the coders to share their knowledge and experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Aboutcf() {
  const glitchColors: Array<string> = ["#2b4539", "#61dca3", "#61b3dc"];

  const chiefMentors = [
    {
      name: "Sanjay",
      quote: "Code with passion, debug with patience",
      role: "Chief Mentor",
      image: "/images/sm28.jpg",
    },
    {
      name: "Vinaya",
      quote: "Every expert was once a beginner",
      role: "Chief Mentor",
      image: "/images/sm48.jpg",
    },
  ];

  const mentors = [
    {
      name: "Bershay R",
      quote:
        "I’m an aspiring IT professional passionate about building apps, exploring AR/VR, while growing my skills through leadership and collaboration.",
      role: "Mentor",
      image: "/bershay.jpg",
    },
    {
      name: "Chandrasekar S",
      quote: "The best way to learn is by doing",
      role: "Mentor",
      image: "/chandrasekar.jpg",
    },
    {
      name: "Karnan S",
      quote:
        "An ambitious IT student passionate about technology, creativity, and continuous learning",
      role: "Mentor",
      image: "/karnan.jpg",
    },
    {
      name: "Thirukumaran",
      quote:
        "I enjoy finishing projects early—it’s only professional to make it look like a battle",
      role: "Mentor",
      image: "/images/sm100.jpg",
    },
  ];

  const features = [
    {
      icon: FaCode,
      title: "Hackathons",
      description:
        "Participate in exciting coding competitions and showcase your skills",
    },
    {
      icon: FaUsers,
      title: "Peer Learning",
      description:
        "Learn from experienced mentors and collaborate with fellow students",
    },
    {
      icon: FaTrophy,
      title: "Competitions",
      description: "Compete in various coding challenges and technical rounds",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description:
        "Bring your creative ideas to life through coding and technology",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
    
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
     
        <div className="absolute inset-0 z-0">
          <LetterGlitch
            glitchColors={glitchColors}
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="flex justify-center items-center mb-4 ">
            <div className="rounded-full bg-white backdrop-blur-md ">
              <Image
                src="/CoderForum.png"
                alt="CoderForum"
                width={100}
                height={100}
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-white bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              CODERS&#39; FORUM
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Breaking barriers in coding education through peer mentorship and
              collaborative learning
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-full">
                <div className="bg-black px-8 py-3 rounded-full">
                  <span className="text-lg font-semibold">
                    Students Helping Students
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

     
      <section className="py-20 px-6 h-screen w-full">
        <div className="max-w-6xl mx-auto mt-30">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About Coders&#39; Forum
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The Coders&#39; Forum is a wing of FORESE which believes in the
              motto of students helping students. It aspires to break the
              barriers faced by students when learning to code. The club
              consists of experienced mentors who help their peers enhance their
              skills and get them to put their best foot forward during the
              technical rounds in placements by conducting a series of
              hackathons and teaching sessions.
            </p>
          </motion.div>

          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300"
              >
                <feature.icon className="text-4xl text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Team
            </h2>
          </motion.div>

         
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-blue-400">
              Chief Mentors
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {chiefMentors.map((mentor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 text-center hover:from-blue-800/40 hover:to-purple-800/40 transition-all duration-300"
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-2xl font-bold mb-2 text-white">
                    {mentor.name}
                  </h4>
                  <p className="text-blue-300 mb-4 font-medium">
                    {mentor.role}
                  </p>
                  <p className="text-gray-300 italic">{`"${mentor.quote}"`}</p>
                </motion.div>
              ))}
            </div>
          </div>

         
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">
              Mentors
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mentors.map((mentor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 text-center hover:from-cyan-800/40 hover:to-blue-800/40 transition-all duration-300"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    {mentor.name}
                  </h4>
                  <p className="text-cyan-300 mb-3 font-medium text-sm">
                    {mentor.role}
                  </p>
                  <p className="text-gray-300 italic text-sm">
                    {`"${mentor.quote}"`}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
