import { HashLink } from "react-router-hash-link";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
const AboutSection = () => {
  return (
    <section
      className=" text-white md:h-screen md:w-[100%] flex lg:flex-row flex-col md:gap-7 gap-5 items-center justify-around"
      id="about"
    >
      <div className=" lg:w-[50%] h-full flex items-center justify-start ">
        <img
          className=" object-cover rounded-3xl h-[600px]"
          src="/images/sujith-2.jpeg"
          loading="lazy"
        />
      </div>
      <div className=" lg:w-[50%] flex flex-col gap-5 justify-center h-full">
        <h1 className=" text-3xl font-bold">My story</h1>
        <div className=" text-2xl font-semibold tracking-wide ">
          This is my story of becoming an MERN-stack developer
        </div>

        <div className="flex flex-col items-center justify-between gap-5">
          <div className=" text-xl lg:text-[16px] ">
            Hi there! My name is Sujith Karthikaiselvan and I'm 25 years old
            ambitious MERN-Stack developer. I'm from Coimbatore, Tamil Nadu,
            India. I graduated from the University of Lincoln with a degree in
            Robotics and Autonomous systems and Also have a Bachler degree in
            Electrical and Electronics Engineering. Now I'm looking for a new
            position and new challenges.
          </div>
          <div className=" text-xl lg:text-[16px] ">
            After completing my master's I decided to change my career path so I
            started learning different skills That is how I chose Mern-stack
            development. And then I did some online courses and developed my
            websites.
          </div>
          <div className=" text-xl lg:text-[16px] ">
            I'm a passionate developer who loves building scalable and efficient
            applications using the MERN stack. My goal is to help you achieve
            your goals and create a successful career in the tech industry.
          </div>
        </div>
        <div className=" flex gap-5 items-center ">
          <HashLink smooth to="#skills">
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

export default AboutSection;
