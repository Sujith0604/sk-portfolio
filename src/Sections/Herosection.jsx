import { HashLink } from "react-router-hash-link";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
const Herosection = () => {
  return (
    <section
      className=" md:h-screen md:w-[100%] flex lg:flex-row flex-col md:gap-7 gap-5 items-center justify-around"
      id="hero"
    >
      <div className=" lg:w-[50%] flex flex-col gap-5 justify-center h-full">
        <div className="flex flex-col items-center md:items-start gap-5 text-5xl md:text-7xl font-semibold text-gray-800">
          <p className=" lg:tracking-wider">MERN-STACK </p>
          <p className=" lg:tracking-wider">DEVELOPER</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className=" text-xl lg:text-[16px] text-gray-600">
            Hi there ! My name is Sujith Karthikaiselvan and I'm 25 years old
            ambitious MERN-Stack developer. Now I'm looking for a new position
            and new challenges{" "}
          </div>
          <div className=" text-xl lg:text-[16px] text-gray-600">
            I'm a passionate developer who loves building scalable and efficient
            applications using the MERN stack. My goal is to help you achieve
            your goals and create a successful career in the tech industry.
          </div>
        </div>
        <div>
          <HashLink smooth to="#about">
            <ArrowDropDownCircleIcon />
          </HashLink>
        </div>
      </div>
      <div className=" lg:w-[50%] h-full flex items-center justify-end ">
        <img
          className=" object-cover rounded-3xl h-[600px]"
          src="/images/sujith.jpg"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Herosection;
