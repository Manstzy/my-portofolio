import { CgMail } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-primary w-full h-full flex flex-col items-center"
    >
      <div className="mt-20 ">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="font-lobster text-beauty text-xl"
        >
          Contact me
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="font-poppins text-secondary text-sm"
        >
          Get in touch
        </motion.p>
      </div>

      <div className="grid grid-cols-1 p-2 gap-4 medium:grid-cols-2 medium:p-2 laptop:grid-cols-3">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="w-[250px] p-1 h-[110px] bg-beauty rounded-xl"
        >
          <div>
            <CgMail className="text-3xl text-white mx-auto mt-1" />
            <p className="font-poppins text-white text-sm text-center">Email</p>
            <p className="text-[10px] text-white/80 font-poppins text-center">
              muh.arhief20@gmail.com
            </p>
            <p className="text-center mt-2">
              <a
                href="mailto:muh.arhief20@gmail.com"
                className="text-white font-poppins text-[10px] flex items-center justify-center gap-2 hover:scale-105 group/item transition-all duration-300"
              >
                write me{" "}
                <FaArrowRightLong className="group-hover/item:translate-x-1 transition-all duration-300" />
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="w-[250px] p-1 h-[110px] bg-beauty rounded-xl"
        >
          <div>
            <FaWhatsapp className="text-2xl text-white mx-auto mt-1" />
            <p className="font-poppins text-white mt-1 text-sm text-center">
              Whatsapp
            </p>
            <p className="text-[10px] text-white/80 font-poppins text-center">
              085859267583
            </p>
            <p className="text-center mt-2">
              <a
                href="https://web.whatsapp.com"
                className="text-white font-poppins text-[10px] flex items-center justify-center gap-2 hover:scale-105 group/item transition-all duration-300"
                target="blank"
              >
                write me{" "}
                <FaArrowRightLong className="group-hover/item:translate-x-1 transition-all duration-300" />
              </a>
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="w-[250px] p-1 h-[110px] bg-beauty rounded-xl"
        >
          <div>
            <PiTelegramLogo className="text-3xl text-white mx-auto mt-1" />
            <p className="font-poppins text-white text-sm text-center">
              Telegram
            </p>
            <p className="text-[10px] text-white/80 font-poppins text-center">
              @Manzy20
            </p>
            <p className="text-center mt-2">
              <a
                href="https://web.telegram.org/"
                target="blank"
                className="text-white font-poppins text-[10px] flex items-center justify-center gap-2 hover:scale-105 group/item transition-all duration-300"
              >
                write me{" "}
                <FaArrowRightLong className="group-hover/item:translate-x-1 transition-all duration-300" />
              </a>
            </p>
          </div>
        </motion.div>
      </div>
      <div className="bg-elegant w-full h-[200px] laptop:h-[120px] mt-5 border-t-slate-200 border-solid">
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="text-3xl mt-6 font-permanent text-primary text-center laptop:mt-1"
        >
          Arif
        </motion.h1>

        <div className="flex justify-center text-sm gap-4 text-white font-poppins mt-2 laptop:mt-0 laptop:text-[10px]">
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 0.4,
            }}
            className="hover:text-primary duration-300 transition-all"
          >
            <a href="#about">About</a>
          </motion.p>
          <motion.p
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 0.4,
            }}
            className="hover:text-primary duration-300 transition-all"
          >
            <a href="#portofolio">portofolio</a>
          </motion.p>
          <motion.p
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 0.4,
            }}
            className="hover:text-primary duration-300 transition-all"
          >
            <a href="#skills">skills</a>
          </motion.p>
        </div>

        <div className="flex justify-center text-sm gap-4 text-white mt-5 laptop:mt-2">
          <motion.a
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 0.4,
            }}
            href="https://www.instagram.com/arhiefcs_/"
            target="blank"
          >
            <FaInstagram className="text-xl hover:scale-110 duration-300 transition-all hover:text-primary cursor-grab" />{" "}
          </motion.a>
          <motion.a
            initial={{ x: 0, opacity: 0 }}
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
            <LuGithub className="text-xl hover:scale-110 duration-300 transition-all hover:text-primary cursor-grab" />{" "}
          </motion.a>
          <motion.a
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 0.4,
            }}
            href="https://www.linkedin.com/in/muhammad-arif-455a58287/"
            target="blank"
          >
            <FaLinkedinIn className="text-xl hover:scale-110 duration-300 transition-all hover:text-primary cursor-grab" />{" "}
          </motion.a>
        </div>
        <motion.p
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="mt-12 laptop:mt-3 text-center text-sm font-lobster text-white/80 laptop:text-[12px]"
        >
          My portofolio &copy; 2024
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
