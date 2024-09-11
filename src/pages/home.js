import { TypeAnimation } from "react-type-animation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { fontSize } from "@mui/system";
import Image from 'next/image'; 

export default function Home() {
  return (
    <section id="Home" className="flex items-center justify-center h-screen text-3xl font-bold">
      <div className="flex items-center max-w-3xl px-8 justify-between">
        <div className="flex flex-col items-start">
          <div className="text-6xl text-white font-bold mb-4 ml-4 mr-20 font-mono">
            Hi, it&apos;s <span className="text-purple-400">Ailin!</span>
          </div>
          <div className="text-4xl text-white font-bold mb-4 ml-4 font-mono">
            I&apos;m a{" "}
            <strong className="text-purple-400 text-4xl">
              <TypeAnimation sequence={["frontend developer"]} speed={20} />
            </strong>
          </div>
          <div className="flex flex-row ml-3">
            <div className="">
              <a href="https://www.linkedin.com/in/ailin-druzic-967696253/">
                <LinkedInIcon style={{ color: "secondary", fontSize: "50" }} />
              </a>
            </div>
            <div className="ml-2">
              <a href="https://github.com/AilinDruzic">
                <GitHubIcon style={{ color: "secondary", fontSize: "50" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 ml-8">
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
