import { useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex fixed top-0 z-50 w-full h-20 px-10 py-5 font font-bruno text-white">
      <div className="flex w-full justify-between items-center">
        <div className="text-xl font-semibold">
          <Link
            className="no-underline hover:underline cursor-pointer"
            activeClass="active font-bold"
            smooth
            spy
            to="Home"
          >
            <Image
              src="/images/AAlogo.png"
              alt="Ailin Druzic Logo"
              width={50}
              height={200}
              className="h-10"
            />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon fontSize="large" />
          </button>
        </div>
        <nav
          className={`fixed top-0 left-0 h-full w-64 bg-bgColor transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-auto md:flex md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row gap-6 text-lg font-medium p-4 md:p-0">
            <li>
              <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
                <Link
                  className="no-underline cursor-pointer"
                  activeClass="active font-bold"
                  smooth
                  spy
                  to="Home"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
                <Link
                  className="no-underline cursor-pointer"
                  activeClass="active font-bold"
                  smooth
                  spy
                  to="About"
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
                <Link
                  className="no-underline cursor-pointer"
                  activeClass="active font-bold"
                  smooth
                  spy
                  to="Experience"
                  onClick={() => setIsOpen(false)}
                >
                  Experience
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
                <Link
                  className="no-underline cursor-pointer"
                  activeClass="active font-bold"
                  smooth
                  spy
                  to="Technologies"
                  onClick={() => setIsOpen(false)}
                >
                  Technologies
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
                <Link
                  className="no-underline cursor-pointer"
                  activeClass="active font-bold"
                  smooth
                  spy
                  to="Projects"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
                <Link
                  className="no-underline cursor-pointer"
                  activeClass="active font-bold"
                  smooth
                  spy
                  to="Talk"
                  onClick={() => setIsOpen(false)}
                >
                  Let&apos;s Talk!
                </Link>
              </motion.div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
