import About from "./about";
import Projects from "./projects";
import Talk from "./talk";
import Home from "./home";

import NavBar from "@/components/NavBar";
import Experience from "./experience";
import Technologies from "./technologies";

export default function Portfolio() {
  return (
    <div className="App font-sans bg-bgColor">
      <NavBar />
      <div>
        <Home />
      </div>
      <div className="flex flex-col px-6 md:px-20">
        <About />
        <Experience />
        <Technologies/>
        <Projects />
        <Talk />
      </div>
    </div>
  );
}
