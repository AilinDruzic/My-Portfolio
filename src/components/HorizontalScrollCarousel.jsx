import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const cards = [
  {
    url: "/images/wcag.png",
    title: "WCAG Checker",
    description:
      "WCAG-Checker is an accessibility analysis tool that evaluates websites based on WCAG guidelines. It identifies issues like contrast problems, missing alt text, and incorrect ARIA attributes, presenting results in a clear, categorized format. Developed with: React, Next.js, Chakra UI, TypeScript, axe-core, and JSDOM.",
    id: 1,
    link: "https://wcag-checker.vercel.app/",
  },
  {
    url: "/images/examensarbete.png",
    title: "Thesis Project",
    description:
      "Undies Webshop is a responsive, user-friendly online store focused on selling niche underwear products. The site prioritizes simplicity and ease of navigation, featuring a sleek design, a categorized product menu, a search function, and a streamlined checkout process. Developed with: Tailwind, React/Next.js, TypeScript, and MongoDB.",
    id: 2,
    link: "https://undies-exarbete.vercel.app/",
  },
  {
    url: "/images/quiz.png",
    title: "Quiz app",
    description:
      "An interactive quiz app where users answer questions and get immediate feedback. Built with React and Redux, it’s designed to be responsive and work well on any device. Developed with: React, Redux, JavaScript, and CSS.",
    id: 3,
    link: "https://quiz-redux-two.vercel.app/",
  },
  {
    url: "/images/guessinggame.png",
    title: "Number guessing game",
    description:
      "A simple and engaging number guessing game where users input guesses and receive feedback until they find the correct number. Designed to be intuitive and enjoyable. Developed with: HTML, CSS, and JavaScript.",
    id: 4,
    link: "https://ailindruzic.github.io/Guessing-Game/",
  },
  {
    url: "/images/gymlocker.png",
    title: "Gym locker project",
    description:
      "The Gym Locker Reserve App is a simple application designed to help gym members reserve the next available locker. The app displays gym lockers, indicating which ones are free or occupied, and allows users to reserve a locker with a single button click. Each reserved locker is visually distinct to help users identify their reserved locker easily. The reservation logic ensures that lockers are spaced out as much as possible from previously taken ones. Developed with JavaScript, React, and CSS.",
    id: 5,
    link: "https://github.com/AilinDruzic/Gym-project",
  },
  {
    url: "/images/radioplayer.png",
    title: "Radio player",
    description:
      "A radio player app built with React that allows users to stream various online radio stations. It includes basic playback controls and a simple, responsive design for an enjoyable listening experience. Developed with: React, JavaScript, and CSS.",
    id: 6,
    link: "https://react-radio-player.vercel.app/",
  },
];

const HorizontalScrollCarousel = () => {
  return (
    <section className="relative py-16">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-white font-bruno mb-8">
        Projects
      </h1>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
          1440: { slidesPerView: 1 },
        }}
        className="px-8"
        onInit={(swiper) => {
          swiper.navigation.prevEl.classList.add(
            "absolute",
            "top-1/2",
            "-translate-y-1/2",
            "left-4",
            "z-10",
            "text-white",
            "hidden",
            "md:flex"
          );
          swiper.navigation.nextEl.classList.add(
            "absolute",
            "top-1/2",
            "-translate-y-1/2",
            "right-4",
            "z-10",
            "text-white",
            "hidden",
            "md:flex"
          );
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <Card card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative h-[300px] w-[80vw] md:h-[400px] md:w-[600px] overflow-hidden bg-neutral-200 rounded-lg mx-auto pointer-events-none">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 pointer-events-none"
      ></div>

      <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-300 pointer-events-none z-10"></div>

      <a
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex flex-col justify-center items-center w-full h-full pointer-events-auto z-20"
      >
        <h3 className="text-xl md:text-2xl font-bold text-black opacity-0 group-hover:opacity-100 mx-4 md:mx-8 transition-opacity duration-300">
          {card.title}
        </h3>
        <p className="mt-2 text-sm md:text-lg text-black opacity-0 group-hover:opacity-100 mx-4 md:mx-8 font-semibold transition-opacity duration-300">
          {card.description}
        </p>
      </a>
    </div>
  );
};

export default HorizontalScrollCarousel;
