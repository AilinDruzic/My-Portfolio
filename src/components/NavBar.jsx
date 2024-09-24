import { Link } from "react-scroll";
import Image from 'next/image';


export default function NavBar() {
  return (
    <header className="flex sticky top-0 z-50 w-full h-20 px-20 py-10">
      <div className="flex w-full justify-between items-center">
        <div className="text-2xl font-semibold">
          <Link
            className="no-underline hover:underline"
            activeClass="active font-bold"
            smooth
            spy
            to="Ailin Druzic"
          >
          <Image src="/images/add.png"
          alt="Ailin Druzic Logo"
          width={200}
          height={100}
          className="h-10"

          />
          </Link>
        </div>
        <nav className="nav__container__actions">
          <ul className="flex gap-6 text-xl font-semibold cursor-not-allowed hover:cursor-pointer">
            <li>
              <Link
                className="no-underline hover:underline"
                activeClass="active font-bold"
                smooth
                spy
                to="Home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="no-underline hover:underline"
                activeClass="active font-bold"
                smooth
                spy
                to="About"
                offset={-80}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="no-underline hover:underline"
                activeClass="active font-bold"
                smooth
                spy
                to="Education"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                className="no-underline hover:underline"
                activeClass="active font-bold"
                smooth
                spy
                to="Projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="no-underline hover:underline"
                activeClass="active font-bold"
                smooth
                spy
                to="Talk"
              >
                Lets Talk!
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
