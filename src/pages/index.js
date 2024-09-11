import About from "./about";
import Projects from "./projects";
import Talk from "./talk";
import Home from "./home";

import NavBar from "@/components/NavBar";
import Education from "./education";

export default function Portfolio() {
  return (
    <div className="App font-sans bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-200">
      <NavBar />
      <div className="flex flex-col px-20 mt-10">
        <Home />
        <About />
        <Education />
        <Projects />
        <Talk />
      </div>
    </div>
  );
}
