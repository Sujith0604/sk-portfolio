import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
const WorkSection = () => {
  return (
    <section
      className=" flex flex-col gap-5 items-center justify-center"
      id="work"
    >
      <h1 className=" text-3xl font-bold">My Projects</h1>
      <section className="  md:h-[400px] md:w-[100%] flex lg:flex-row flex-col md:gap-7 gap-5 items-center justify-around rounded-3xl border p-4">
        <div className=" lg:w-[50%] h-full flex items-center justify-center bg-gradient-to-t from-gray-700 via-gray-900 to-black text-white rounded-3xl">
          <img
            className=" object-cover rounded-3xl h-[300px] hover:opacity-15 "
            src="/images/data-dashboard.avif"
            loading="lazy"
          />
        </div>
        <div className=" lg:w-[50%] flex flex-col gap-5 justify-center h-full">
          <div className=" text-2xl font-semibold tracking-wide ">
            This is a simple Employee dashboard.
          </div>
          <h1 className=" text-xl">Dashboard</h1>
          <div className="flex flex-col items-center justify-between gap-5">
            <div className=" text-xl lg:text-[16px] ">
              This is an employee website sample where the admin can create,
              read, update, and delete the employee. However, the employee can
              only view his details on the website. On this website, I used
              Oauth for authentication and JWT token for authorization. Where
              only the admin can perform certain actions.
              <p className=" text-xl lg:text-[16px] ">
                <br />
                Tech: ReactJS, Nodejs, TailwindCSS and Mongodb
              </p>
            </div>

            <div className=" text-xl lg:text-[16px] ">
              In this, I used ReactJS for the frontend NodeJS for the backend
              tailwind for styling and Mongodb for the database.
            </div>
          </div>
          <div className=" flex gap-5 items-center ">
            <a href="https://github.com/Sujith0604/FrontendDealsDray.git">
              <GitHubIcon />
            </a>
            <a>
              <WebIcon />
            </a>
          </div>
        </div>
      </section>
      <section className="  md:h-[400px] md:w-[100%] flex lg:flex-row flex-col md:gap-7 gap-5 items-center justify-around rounded-3xl border p-4 bg-gradient-to-t from-gray-700 via-gray-900 to-black text-white">
        <div className=" lg:w-[50%] h-full flex items-center justify-center bg-white rounded-3xl ">
          <img
            className=" object-cover rounded-3xl h-[300px] hover:opacity-15"
            src="/images/restaurant.webp"
            loading="lazy"
          />
        </div>
        <div className=" lg:w-[50%] flex flex-col gap-5 justify-center h-full">
          <div className=" text-2xl font-semibold tracking-wide ">
            This is a simple restaurant project design.
          </div>
          <h1 className=" text-xl">Restaurant</h1>
          <div className="flex flex-col items-center justify-between gap-5">
            <div className=" text-xl lg:text-[16px] ">
              This website was built for a client to show our design for their
              website designs this sample website gives the menu and other
              details of the restaurant and it is a sample design, not an
              production one. This website explains the design for the clients
              restaurant website.
              <p className=" text-xl lg:text-[16px] ">
                <br />
                Tech: ReactJS and TailwindCSS
              </p>
            </div>

            <div className=" text-xl lg:text-[16px] ">
              In this, I have used Reactjs to develop the UI of the website
              which consists of images, menu items, and restaurant information.
              For the animation part framer motion is used.
            </div>
          </div>
          <div className=" flex gap-5 items-center ">
            <a>
              <GitHubIcon />
            </a>
            <a href="https://heroic-medovik-c18bd4.netlify.app/">
              <WebIcon />
            </a>
          </div>
        </div>
      </section>
      <section className="  md:h-[400px] md:w-[100%] flex lg:flex-row flex-col md:gap-7 gap-5 items-center justify-around rounded-3xl border p-4">
        <div className=" lg:w-[50%] h-full flex items-center justify-center bg-gradient-to-t from-gray-700 via-gray-900 to-black text-white rounded-3xl">
          <img
            className=" object-cover rounded-3xl h-[300px] hover:opacity-15"
            src="/images/photo.png"
            loading="lazy"
          />
        </div>
        <div className=" lg:w-[50%] flex flex-col gap-5 justify-center h-full">
          <div className=" text-2xl font-semibold tracking-wide ">
            This is a simple design designed for photography project.
          </div>
          <h1 className=" text-xl">Photography</h1>
          <div className="flex flex-col items-center justify-between gap-5">
            <div className=" text-xl lg:text-[16px] ">
              This Photography website was created with with ReactJs and Framer
              motion this website is a sample website to display your
              photographs with good animation. These websites help you build a
              reputation for yourself among other photographers. This website
              explains in detail how the client's photo works.
            </div>

            <div className=" text-xl lg:text-[16px] ">
              In this, I have used Reactjs to develop the UI of the website
              which consists of images and the client's information. For the
              animation part framer motion is used.
              <p className=" text-xl lg:text-[15px] ">
                <br />
                Tech: ReactJS and TailwindCSS
              </p>
            </div>
          </div>
          <div className=" flex gap-5 items-center ">
            <a>
              <GitHubIcon />
            </a>
            <a href="https://flourishing-raindrop-f77e0c.netlify.app/">
              <WebIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="  md:h-[400px] md:w-[100%] flex lg:flex-row flex-col md:gap-7 gap-5 items-center justify-around rounded-3xl border p-4 bg-gradient-to-t from-gray-700 via-gray-900 to-black text-white">
        <div className=" lg:w-[50%] h-full flex items-center justify-center bg-white rounded-3xl ">
          <img
            className=" object-cover rounded-3xl h-[300px] hover:opacity-15"
            src="/images/quiz.webp"
            loading="lazy"
          />
        </div>
        <div className=" lg:w-[50%] flex flex-col gap-5 justify-center h-full">
          <div className=" text-2xl font-semibold tracking-wide ">
            This is a simple Quiz Application.
          </div>
          <h1 className=" text-xl">Quiz App</h1>
          <div className="flex flex-col items-center justify-between gap-5">
            <div className=" text-xl lg:text-[16px] ">
              This website was built to demonstrate a simple quiz app that has
              its data. This displays the total number of questions and several
              correct and wrong answers. The total score is displayed in
              percentage with the progress bar.
              <p className=" text-xl lg:text-[16px] ">
                <br />
                Tech: ReactJS and TailwindCSS
              </p>
            </div>

            <div className=" text-xl lg:text-[16px] ">
              In this, I have used Reactjs to develop the UI of the website and
              consists of quiz datas.
            </div>
          </div>
          <div className=" flex gap-5 items-center ">
            <a href="https://github.com/Sujith0604/Quiz-App.git">
              <GitHubIcon />
            </a>
            <a href="https://quiz-app-one-indol-67.vercel.app/">
              <WebIcon />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WorkSection;
