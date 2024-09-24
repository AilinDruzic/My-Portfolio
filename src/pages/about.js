import Image from 'next/image';

export default function About() {
  return (
    <section
      className="w-full h-auto xl:h-[650px] rounded-3xl shadow-xl bg-slate-100 pt-10 xl:pt-20"
      id="About"
    >
      <div className="flex flex-col xl:flex-row items-center justify-center h-full px-5 xl:px-20">
        <Image
          src="/images/selfie2.png"
          alt="Bild"
          width={500}
          height={500}
          className="rounded-full mb-6 xl:mb-0 xl:mr-10 w-[250px] h-[250px] xl:w-[500px] xl:h-[500px]"
        />
        <p className="text-center xl:text-left text-black font-semibold font-mono mx-5 xl:mx-10 mb-6 xl:mb-16 text-lg xl:text-2xl">
          I&apos;m a 22-year-old junior frontend developer with a passion for creativity and
          problem-solving. Recently, I graduated from a frontend development program, where I honed
          my skills in creating dynamic and user-friendly web interfaces. I thrive on new challenges
          and love finding innovative solutions to complex problems. As I continue to grow in my
          career, I&apos;m excited to bring my fresh perspective and dedication to any project I
          take on.
        </p>
      </div>
    </section>
  );
}
