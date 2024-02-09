import me from "../../images/me kacamata.jpeg";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div className="bg-primary h-screen flex flex-col items-center" id="home">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 0.4,
        }}
        className="text-3xl font-permanent mt-32 text-beauty tablet:text-4xl "
      >
        Muhammad
        <Typewriter
          typeSpeed={1000}
          deleteSpeed={1000}
          words={[" Arif !"]}
          loop={false}
        />
      </motion.h1>
      <motion.p
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 0.4,
        }}
        className="mt-1 text-secondary font-poppins desktop:mt-2"
      >
        Enthusiast of web{" "}
        <Typewriter
          words={["Developer"]}
          loop={false}
          cursor="_"
          typeSpeed={700}
          deleteSpeed={500}
        />
      </motion.p>
      <motion.p
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 0.4,
        }}
        className="mt-2 text-center text-sm max-w-[280px] font-poppins medium:max-w-[300px] desktop:max-w-[400px]"
      >
        Hi, I am very enthusiastic about web development and trying to fully
        dedicate myself to this field...
      </motion.p>
      <div className="flex gap-3 mt-6">
        <motion.a
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.4,
          }}
          href="https://github.com/Manstzy"
          target="blank"
        >
          <GrGithub
            className="hover:text-secondary transition-all duration-300 cursor-grab"
            size={26}
          />
        </motion.a>
        <motion.a
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          href="https://id.linkedin.com/"
          target="blank"
        >
          <FaLinkedin
            className="hover:text-secondary transition-all duration-300 cursor-grab"
            size={26}
          />
        </motion.a>
        <motion.a
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.4,
          }}
          href="https://www.instagram.com/"
          target="blank"
        >
          <FaSquareInstagram
            className="hover:text-secondary transition-all duration-300 cursor-grab"
            size={26}
          />
        </motion.a>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="w-[180px] h-[180px] rounded-full mt-8 bg-elegant flex justify-center items-center phone:w-[200px] phone:h-[200px] phone:mt-7 medium:w-[220px] medium:h-[220px] "
      >
        <img
          className="rounded-full w-[170px] h-[170px] phone:w-[190px] phone:h-[190px] medium:w-[210px] medium:h-[210px]"
          src={me}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Main;
