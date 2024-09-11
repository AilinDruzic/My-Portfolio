import ContactForm from "@/components/ContactForm/ContactForm";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Talk() {
  return (
    <>
    <section
      className="w-full h-[600px] rounded-3xl shadow-xl
      text-3xl font-bold bg-slate-100 mb-6"
      id="Talk"
    >
      <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-100 pt-10 pl-16">
        Lets Talk!
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
