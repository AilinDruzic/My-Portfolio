import ContactForm from "@/components/ContactForm/ContactForm";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Talk() {
  return (
    <>
    <section
      className="w-full h-[600px]
      text-3xl font-bold mb-6"
      id="Talk"
    >
      <h1 className="font-extrabold text-transparent text-4xl text-talkColor  pt-10 pl-16">
        Let&apos;s Talk!
      </h1>
      <div>
        <ContactForm />
      </div>
    </section>
    <div className="flex flex-row-reverse mb-4 mr-1">
            <div className="animate-bounce">
            <a href="https://github.com/AilinDruzic">
                <GitHubIcon style={{ color: "secondary", fontSize: "50" }} />
              </a>
            </div>
            <div className="mr-1 animate-bounce">
            <a href="https://www.linkedin.com/in/ailin-druzic-967696253/">
                <LinkedInIcon style={{ color: "secondary", fontSize: "50" }} />
              </a>
            </div>
          </div>
    </>
  );
}
