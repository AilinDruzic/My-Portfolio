import { TypeAnimation } from "react-type-animation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from 'next/image';

export default function Home() {
  return (
    <section id="Home" className="flex flex-col md:flex-row items-center justify-center h-screen text-3xl font-bold">
      <div className="flex flex-col items-center md:items-start max-w-3xl px-8 justify-center md:justify-between">
        {/* Text centrerad på små skärmar och vänsterjusterad på större skärmar */}
        <div className="text-center md:text-left">
          <div className="text-6xl text-white font-bold mb-4 font-mono">
            Hi, it&apos;s <span className="text-purple-400">Ailin!</span>
          </div>
          <div className="text-4xl text-white font-bold mb-4 font-mono">
            I&apos;m a{" "}
            <strong className="text-purple-400 text-4xl">
              <TypeAnimation sequence={["frontend developer"]} speed={20} />
            </strong>
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.linkedin.com/in/ailin-druzic-967696253/">
              <LinkedInIcon style={{ color: "white", fontSize: "50" }} />
            </a>
            <a href="https://github.com/AilinDruzic">
              <GitHubIcon style={{ color: "white", fontSize: "50" }} />
            </a>
          </div>
        </div>
      </div>
      {/* Bilden döljs på skärmar mindre än 770px */}
      <div className="hidden md:block ml-8">
        <Image
          src="/images/whitegirl.png"
          alt="Bild"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
