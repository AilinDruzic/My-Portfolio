import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      className="w-full h-auto xl:h-[650px] pt-10 xl:pt-20"
      id="About"
    >
      <div className="flex flex-col xl:flex-row items-center justify-center h-full px-5 xl:px-20">
        <motion.div
            initial={{ x: window.innerWidth < 768 ? -50 : -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.5 }} 
          className="flex-shrink-0 mb-6 xl:mb-0 xl:mr-10 w-[250px] h-[260px] xl:w-[450px] xl:h-[500px]"
          style={{ display: 'inline-block' }}
        >
          <Image
            src="/images/selfie3.jpeg"
            alt="Bild"
            width={500}
            height={500}
            className="rounded-3xl w-full h-full"
          />
        </motion.div>
        <motion.p
          initial={{ x: window.innerWidth < 768 ? 50 : 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.5 }}
          className="text-center xl:text-left text-white font-normal mx-5 xl:mx-10 mb-6 xl:mb-16 text-lg xl:text-2xl max-w-xl leading-relaxed xl:leading-loose space-y-4 mt-12"
          style={{ display: 'inline-block' }}
        >
          I&apos;m a junior frontend developer with a passion for creativity and problem-solving.
          Recently, I graduated from a frontend development program, where I honed my skills in
          creating dynamic and user-friendly web interfaces. I thrive on new challenges and love
          finding innovative solutions to complex problems. As I continue to grow in my career,
          I&apos;m excited to bring my fresh perspective and dedication to any project I take on.
        </motion.p>
      </div>
    </section>
  );
}
