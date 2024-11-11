import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header className=" h-[100px] pt-5">
      <nav className=" flex items-center justify-between">
        <h1 className="flex flex-col font-semibold text-xl">
          <h1>Sujith</h1>
          <h2>Karthikaiselvan</h2>
        </h1>
        <ul className=" flex gap-5 font-semibold uppercase">
          <li className=" border px-4 py-2 rounded-3xl">
            <HashLink smooth to="#about">
              About
            </HashLink>
          </li>
          <li className=" border px-4 py-2 rounded-3xl">
            <HashLink smooth to="#skills">
              Skills
            </HashLink>
          </li>
          <li className=" border px-4 py-2 rounded-3xl">
            <HashLink smooth to="#work">
              Work
            </HashLink>
          </li>
          <li className=" border px-4 py-2 rounded-3xl">
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
