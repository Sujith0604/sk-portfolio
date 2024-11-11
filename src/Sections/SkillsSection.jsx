import { HashLink } from "react-router-hash-link";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
const SkillsSection = () => {
  return (
    <section
      className=" text-white  md:w-[100%] flex lg:flex-row flex-col md:gap-7 gap-5 items-center justify-around"
      id="skills"
    >
      <div className=" flex flex-col gap-10 justify-center items-center  h-full">
        <h1 className=" text-3xl font-bold">My skills</h1>

        <div className=" flex gap-5   flex-wrap items-center justify-center ">
          <div className=" h-[300px] w-[300px]  rounded-3xl flex items-center justify-center bg-white hover:bg-slate-500">
            <img
              src="/images/html.png"
              className="h-[150px] w-[150px] hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="  h-[300px] w-[300px]  rounded-3xl flex items-center justify-center bg-white hover:bg-slate-500">
            <img
              src="/images/css-logo.png"
              className="h-[150px] w-[115px] hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="  h-[300px] w-[300px]  rounded-3xl flex items-center justify-center bg-white hover:bg-slate-500">
            <img
              src="/images/js.png"
              className="h-[150px] w-[150px] hover:scale-105 rounded-full"
              loading="lazy"
            />
          </div>
          <div className="  h-[300px] w-[300px]  rounded-3xl flex items-center justify-center bg-white hover:bg-slate-500">
            <img
              src="/images/react.png"
              className="h-[150px] w-[150px] hover:scale-105 rounded-full"
              loading="lazy"
            />
          </div>

          <div className="  h-[300px] w-[300px]  rounded-3xl flex items-center justify-center bg-white hover:bg-slate-500">
            <img
              src="/images/nodejs.png"
              className="h-[150px] w-[150px] hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="  h-[300px] w-[300px]  rounded-3xl flex items-center justify-center bg-white hover:bg-slate-500">
            <img
              src="/images/express.png"
              className="h-[150px] w-[150px] hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="  h-[300px] w-[300px]  rounded-3xl flex items-center justify-center bg-white hover:bg-slate-500">
            <img
              src="/images/mongodb.png"
              className="h-[150px] w-[150px] hover:scale-105 rounded-full"
              loading="lazy"
            />
          </div>
          <div className="  h-[300px] w-[300px]  rounded-3xl flex items-center justify-center bg-white hover:bg-slate-500">
            <img
              src="/images/figma.webp"
              className="h-[150px] w-[150px] hover:scale-105 rounded-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className=" flex gap-5 items-center ">
          <HashLink smooth to="#work">
            <ArrowDropDownCircleIcon />
          </HashLink>
          <button className="border px-4 py-2 rounded-3xl">
            <a href="/images/Sujith-resume.pdf" download="Resume">
              Get my resume
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
