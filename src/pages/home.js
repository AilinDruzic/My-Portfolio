import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Home() {
  return (
    <section
      id="Home"
      className="flex flex-col md:flex-row items-center justify-center h-screen text-3xl font-bold bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/Bakgrund8.jpg')",
      }}
    >
      <div className="flex flex-col items-center md:items-start max-w-3xl px-8 justify-center md:justify-between">
        <div className="text-center md:text-left">
          <div className="text-8xl text-white font-bold mb-4 font-bruno">Ailin Druzic</div>
          <div className="text-4xl text-white font-bold mb-4 font-bruno">Frontend Developer</div>
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
    </section>
  );
}
