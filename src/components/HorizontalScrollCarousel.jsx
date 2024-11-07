import { Description } from "@mui/icons-material";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-98%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="absolute top-10 left-0 right-0 w-full text-center z-10">
        <h1 className="mt-16 text-3xl md:text-5xl font-bold font-bruno text-white">Projects</h1>
      </div>
      <div className="sticky top-32 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <a href={card.link} target="_blank" rel="noopener noreferrer" className="group">
      <div
        key={card.id}
        className="group relative h-[300px] w-[80vw] md:h-[400px] md:w-[600px] overflow-hidden bg-neutral-200 rounded-lg"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 flex flex-col justify-center bg-white bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-100">
          <h3 className="text-xl md:text-2xl font-bold text-black opacity-0 group-hover:opacity-100 mx-4 md:mx-8">
            {card.title}
          </h3>
          <p className="mt-2 text-sm md:text-lg items-center text-black opacity-0 group-hover:opacity-100 mx-4 md:mx-8 font-semibold">
            {card.description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Example;

const cards = [
  {
    url: "/images/examensarbete.png",
    title: "Thesis Project",
    description:
      "Undies Webshop is a responsive, user-friendly online store focused on selling niche underwear products. The site prioritizes simplicity and ease of navigation, featuring a sleek design, a categorized product menu, a search function, and a streamlined checkout process. Developed with: Tailwind, React/Next.js, TypeScript, and MongoDB.",
    id: 1,
    link: "https://undies-exarbete.vercel.app/",
  },
  {
    url: "/images/quiz.png",
    title: "Quiz app",
    description:
      "An interactive quiz app where users answer questions and get immediate feedback. Built with React and Redux, it’s designed to be responsive and work well on any device. Developed with: React, Redux, JavaScript, and CSS.",
    id: 2,
    link: "https://quiz-redux-two.vercel.app/",
  },
  {
    url: "/images/guessinggame.png",
    title: "Number guessing game",
    description:
      "A simple and engaging number guessing game where users input guesses and receive feedback until they find the correct number. Designed to be intuitive and enjoyable. Developed with: HTML, CSS, and JavaScript.",
    id: 3,
    link: "https://ailindruzic.github.io/Guessing-Game/",
  },
  {
    url: "/images/gymlocker.png",
    title: "Gym locker project",
    description:
      "The Gym Locker Reserve App is a simple application designed to help gym members reserve the next available locker. The app displays gym lockers, indicating which ones are free or occupied, and allows users to reserve a locker with a single button click. Each reserved locker is visually distinct to help users identify their reserved locker easily. The reservation logic ensures that lockers are spaced out as much as possible from previously taken ones. Developed with JavaScript, React, and CSS.",
    id: 4,
    link: "https://github.com/AilinDruzic/Gym-project",
  },
  {
    url: "/images/radioplayer.png",
    title: "Radio player",
    description:
      "A radio player app built with React that allows users to stream various online radio stations. It includes basic playback controls and a simple, responsive design for an enjoyable listening experience. Developed with: React, JavaScript, and CSS.",
    id: 5,
    link: "https://react-radio-player.vercel.app/",
  },
];
