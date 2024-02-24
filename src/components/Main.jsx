import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
// import { motion } from "framer-motion";
import nft from "../../images/nft.jpg";

const Main = ({ nav }) => {
  return (
    <div className="bg-primary h-screen flex flex-col items-center" id="home">
      {/* overlay */}
      <div
        className={
          nav
            ? "z-10 bg-black/80 backdrop-blur-sm right-0 left-0 top-0 bottom-0 fixed transition-all duration-300"
            : "z-10 bg-black/80 backdrop-blur-sm right-0 left-0 top-0 bottom-0 hidden fixed transition-all duration-300"
        }
      ></div>
      <h1 className="text-3xl font-permanent mt-32 text-beauty tablet:text-4xl ">
        Muhammad
        <Typewriter
          typeSpeed={1000}
          deleteSpeed={1000}
          words={[" Arif !"]}
          loop={false}
        />
      </h1>
      <p className="mt-1 text-secondary font-poppins desktop:mt-2">
        Enthusiast of web{" "}
        <Typewriter
          words={["Developer"]}
          loop={false}
          cursor="_"
          typeSpeed={700}
          deleteSpeed={500}
        />
      </p>
      <p className="mt-2 text-center text-sm max-w-[280px] font-poppins medium:max-w-[300px] desktop:max-w-[400px]">
        Hi, I am very enthusiastic about web development and trying to fully
        dedicate myself to this field...
      </p>
      <div className="flex gap-3 mt-6">
        <a href="https://github.com/Manstzy" target="blank">
          <GrGithub
            className="hover:text-secondary transition-all duration-300 cursor-grab"
            size={26}
          />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-arif-455a58287/" target="blank">
          <FaLinkedin
            className="hover:text-secondary transition-all duration-300 cursor-grab"
            size={26}
          />
        </a>
        <a href="https://www.instagram.com/arhiefcs_/" target="blank">
          <FaSquareInstagram
            className="hover:text-secondary transition-all duration-300 cursor-grab"
            size={26}
          />
        </a>
      </div>

      <div className="w-[180px] h-[180px] rounded-full mt-8 bg-elegant flex justify-center items-center phone:w-[200px] phone:h-[200px] phone:mt-7 medium:w-[220px] medium:h-[220px] ">
        <img
          className="rounded-full w-[170px] h-[170px] phone:w-[190px] phone:h-[190px] medium:w-[210px] medium:h-[210px]"
          src={nft}
          alt=""
        />
      </div>
    </div>
  );
};

export default Main;
