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
        <h2 className="mt-24 text-4xl font-bold font-mono">Projects</h2>
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
        className="group relative h-[400px] w-[600px] overflow-hidden bg-neutral-200 rounded-lg"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-4"></div>
      </div>
    </a>
  );
};

export default Example;

const cards = [
  {
    url: "/images/examensarbete.png",
    title: "Examensarbete",
    description: "hej",
    id: 1,
    link: "https://undies-exarbete.vercel.app/",
  },
  {
    url: "/images/quiz.png",
    title: "Quiz app",
    description: "hej",
    id: 2,
    link: "https://quiz-redux-two.vercel.app/",
  },
  {
    url: "/images/guessinggame.png",
    title: "Number guessing game",
    description: "hej",
    id: 3,
    link: "https://ailindruzic.github.io/Guessing-Game/",
  },
  {
    url: "/images/gymlocker.png",
    title: "Gym locker project",
    description: "hej",
    id: 4,
    link: "https://github.com/AilinDruzic/Gym-project",
  },
  {
    url: "/images/radioplayer.png",
    title: "Radio player",
    description: "hej",
    id: 5,
    link: "https://react-radio-player.vercel.app/",
  },
];
