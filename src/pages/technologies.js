import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiWordpress,
  SiAdobe,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Technologies() {
  const icons = [
    { component: SiJavascript, color: "#F7DF1E", delay: 0 },
    { component: SiHtml5, color: "#E34F26", delay: 0.2 },
    { component: SiCss3, color: "#1572B6", delay: 0.4 },
    { component: SiReact, color: "#61DAFB", delay: 0.6 },
    { component: SiTypescript, color: "#3178C6", delay: 0.8 },
    { component: SiTailwindcss, color: "#06B6D4", delay: 1.0 },
    { component: SiNextdotjs, color: "#000000", delay: 1.2 },
    { component: SiNodedotjs, color: "#339933", delay: 1.4 },
    { component: SiGit, color: "#F05032", delay: 1.6 },
    { component: SiWordpress, color: "#3178C6", delay: 1.8 },
    { component: SiAdobe, color: "#FF0000", delay: 2.0 },
  ];

  return (
    <section className="mt-28" id="Technologies">
      <h1 className="mb-20 text-3xl md:text-5xl font-bruno text-center font-bold text-white">Technologies</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {icons.map(({ component: Icon, color, delay }, index) => (
          <motion.div
            key={index}
            className="p-4 rounded-lg border border-white"
            animate={{
              y: [0, -10, 0], 
            }}
            transition={{
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: delay, 
            }}
          >
            <Icon color={color} size={50} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
