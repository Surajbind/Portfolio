import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Briefcase,
  Code,
  BookOpen,
  Mail,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";

const sections = [
  {
    name: "About",
    icon: <User size={24} />,
    color: "from-pink-400 to-pink-600",
  },
  {
    name: "Experience",
    icon: <Briefcase size={24} />,
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Projects",
    icon: <Code size={24} />,
    color: "from-green-400 to-green-600",
  },
  {
    name: "Education",
    icon: <BookOpen size={24} />,
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "Contact",
    icon: <Mail size={24} />,
    color: "from-yellow-400 to-yellow-600",
  },
];

const CentralCircle = () => {
  const [active, setActive] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`relative w-full h-screen flex items-center justify-center transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 px-3 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 shadow-md"
      >
        {darkMode ? "🌞" : "🌙"}
      </button>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`relative w-72 h-72 rounded-full bg-white dark:bg-gray-200 shadow-[0_0_60px_20px_rgba(255,255,255,0.9)] flex items-center justify-center`}
      >
        <div className="absolute w-96 h-96 rounded-full border-2 border-white/50 opacity-40 animate-ping"></div>
        <div className="absolute w-[28rem] h-[28rem] rounded-full border border-white/30 opacity-20 animate-pulse"></div>
      </motion.div>

      {sections.map((item, index) => (
        <ThreadWithIcon
          key={index}
          index={index}
          total={sections.length}
          item={item}
          onClick={() => setActive(item.name)}
        />
      ))}

      <AnimatePresence>
        {active && (
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center p-10 bg-gradient-to-br from-black via-gray-900 to-black text-white"
          >
            <h1 className="text-4xl font-bold mb-6">{active}</h1>

            {active === "About" && (
              <p className="max-w-xl text-center">
                👋 Hi, I’m Sun! A passionate developer...
              </p>
            )}
            {active === "Experience" && (
              <p className="max-w-xl text-center">
                💻 Skilled with React, Node.js, Redux, Docker...
              </p>
            )}
            {active === "Projects" && (
              <p className="max-w-xl text-center">
                🚀 Built scalable apps, portfolio projects, and open-source
                contributions.
              </p>
            )}
            {active === "Education" && (
              <p className="max-w-xl text-center">
                🎓 B.Tech in Computer Science, etc.
              </p>
            )}
            {active === "Contact" && (
              <div className="flex gap-6 mt-4">
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  className="hover:scale-110 transition"
                >
                  <Github />
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  className="hover:scale-110 transition"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://codeforces.com/profile/yourhandle"
                  target="_blank"
                  className="hover:scale-110 transition"
                >
                  <Globe />
                </a>
              </div>
            )}

            <button
              onClick={() => setActive(null)}
              className="mt-10 px-5 py-2 bg-white text-black rounded-xl shadow-md hover:scale-105 transition"
            >
              Back
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ThreadWithIcon = ({ index, total, item, onClick }) => {
  const angle = (index * 360) / total - 90;
  const sunRadius = 144;
  const threadGap = 20;
  const threadLength = 180;
  const angleRad = (angle * Math.PI) / 180;

  const startX = (sunRadius + threadGap) * Math.cos(angleRad);
  const startY = (sunRadius + threadGap) * Math.sin(angleRad);
  const endX = (sunRadius + threadGap + threadLength) * Math.cos(angleRad);
  const endY = (sunRadius + threadGap + threadLength) * Math.sin(angleRad);

  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <svg className="absolute overflow-visible">
        <motion.path
          d={`M ${startX},${startY} Q ${(startX + endX) / 2},${
            (startY + endY) / 2 - 50
          } ${endX},${endY}`}
          stroke="url(#grad)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="transparent"
          animate={{
            d: [
              `M ${startX},${startY} Q ${(startX + endX) / 2},${
                (startY + endY) / 2 - 50
              } ${endX},${endY}`,
              `M ${startX},${startY} Q ${(startX + endX) / 2},${
                (startY + endY) / 2 + 50
              } ${endX},${endY}`,
              `M ${startX},${startY} Q ${(startX + endX) / 2},${
                (startY + endY) / 2 - 50
              } ${endX},${endY}`,
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
        />

        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="50%" stopColor="white" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.8)" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        onClick={onClick}
        className="absolute bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl cursor-pointer flex items-center justify-center hover:scale-125 transition"
        style={{ left: endX, top: endY }}
      >
        {item.icon}
      </motion.div>
    </div>
  );
};

export default CentralCircle;
