import Image from 'next/image';

export default function About() {
  return (
<section
  className="w-full h-[650px] rounded-3xl shadow-xl text-3xl font-bold bg-slate-100 pt-20"
  id="About"
>
  <div className="flex items-center justify-center h-full px-20">
  <Image
      src="/images/selfie2.png"
      alt="Bild"
      width={500}
      height={500}
      className="rounded-full mr-10 mb-16"
    />
    <p className="text-left text-black font-semibold font-mono mx-10 mb-16">
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
