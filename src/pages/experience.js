import { motion } from "framer-motion";

export default function Experience() {
  const fadeInFromRight = (delay = 0) => ({
    initial: { x: 20, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.7, delay },
    viewport: { amount: 0.3 },
  });

  return (
    <section id="Experience" className="mt-28 px-4 md:px-8 text-gray-200 overflow-x-hidden">
      <h1 className="mb-10 text-3xl md:text-5xl font-bruno text-center font-bold text-white">
        Experience
      </h1>
      <div className="space-y-10 md:space-y-16">
        
        {/* Erfarenhet 1 */}
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-4 overflow-hidden">
          <p className="text-lg font-semibold w-32 md:text-right text-gray-400">2023 - 2024</p>
          <motion.div
            {...fadeInFromRight(0)}
            className="text-left space-y-4 max-w-[90%] md:max-w-3xl overflow-hidden"
          >
            <motion.h2
              {...fadeInFromRight(0.2)}
              className="text-xl md:text-2xl font-semibold text-white"
            >
              Talentech - Frontend Developer (Internship)
            </motion.h2>
            <motion.p {...fadeInFromRight(0.4)} className="text-base md:text-lg leading-relaxed text-gray-300">
              During my internship, I gained valuable experience in software development by
              improving user interfaces, implementing dynamic features, and optimizing code using
              React & Redux. I redeveloped a page on the website, enhanced user interactions, and
              implemented Cypress for E2E testing to ensure quality. Additionally, I deepened my
              knowledge of web accessibility (WCAG) and gained experience with React Native for
              mobile development and responsive web design.
            </motion.p>
            <motion.div {...fadeInFromRight(0.6)} className="flex flex-wrap gap-2 md:gap-3 mt-4">
              {[
                "JavaScript",
                "React",
                "Redux",
                "Bootstrap",
                "Cypress",
                "WCAG",
                "Microsoft Azure",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-300 px-2 py-1 md:px-3 md:py-1 rounded-md shadow-sm transition-transform transform hover:scale-105 hover:bg-gray-700"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Erfarenhet 2 */}
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-4 overflow-hidden">
          <p className="text-lg font-semibold w-32 md:text-right text-gray-400">2022 - 2024</p>
          <motion.div
            {...fadeInFromRight(0)}
            className="text-left space-y-4 max-w-[90%] md:max-w-3xl overflow-hidden"
          >
            <motion.h2
              {...fadeInFromRight(0.2)}
              className="text-xl md:text-2xl font-semibold text-white"
            >
              Chas Academy - Front-End Developer for Mobile and Web
            </motion.h2>
            <motion.p {...fadeInFromRight(0.4)} className="text-base md:text-lg leading-relaxed text-gray-300">
              During my studies at Chas Academy, I built a solid foundation in frontend and mobile
              development. Learning and developing skills in technologies such as HTML, CSS,
              JavaScript, React, TypeScript. Through hands-on projects and agile teamwork, I focused
              on creating responsive and user-friendly applications, gaining experience that has
              prepared me well for collaborative, innovative development environments.
            </motion.p>
            <motion.div {...fadeInFromRight(0.6)} className="flex flex-wrap gap-2 md:gap-3 mt-4">
              {[
                "JavaScript",
                "HTML",
                "CSS",
                "React",
                "React Native",
                "Redux",
                "Git",
                "TypeScript",
                "Next.js",
                "Node.js",
                "Tailwind",
                "REST APIs",
                "MongoDB",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-300 px-2 py-1 md:px-3 md:py-1 rounded-md shadow-sm transition-transform transform hover:scale-105 hover:bg-gray-700"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
