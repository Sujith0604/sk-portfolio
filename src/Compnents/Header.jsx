import { HashLink } from "react-router-hash-link";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const NavComponent = () => {
    return (
      <nav className=" h-[200px] w-[200px] flex md:hidden">
        <ul className=" flex flex-col gap-5 text-xl text-white uppercase ">
          <li>
            <HashLink smooth to="#about">
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#skills">
              Skills
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#work">
              Work
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#contact">
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-10">
      <nav className="h-[100px] flex items-center justify-between md:mx-[50px] bg-white border px-4">
        <h1 className="flex flex-col font-semibold text-xl">
          <h1 className=" tracking-wider">Sujith</h1>
          <h2 className=" tracking-wider">Karthikaiselvan</h2>
        </h1>
        {open && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-50">
            <div className="flex justify-center items-center w-full h-full">
              <NavComponent />
              <button
                className="absolute top-5 right-5 text-white"
                onClick={() => setOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
        )}
        {!open ? (
          <button
            className="px-4 py-2 rounded-3xl md:hidden"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </button>
        ) : (
          ""
        )}
        <ul className="hidden md:flex gap-5 font-semibold uppercase">
          <li className=" border px-4 py-2 rounded-3xl hover:bg-slate-500">
            <HashLink smooth to="#about">
              About
            </HashLink>
          </li>
          <li className=" border px-4 py-2 rounded-3xl hover:bg-slate-500">
            <HashLink smooth to="#skills">
              Skills
            </HashLink>
          </li>
          <li className=" border px-4 py-2 rounded-3xl hover:bg-slate-500">
            <HashLink smooth to="#work">
              Work
            </HashLink>
          </li>
          <li className=" border px-4 py-2 rounded-3xl hover:bg-slate-500">
            <HashLink smooth to="#contact">
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
