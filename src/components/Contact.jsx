import { CgMail } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-primary w-full h-full flex flex-col items-center"
    >
      <div className="mt-20 ">
        <h1 className="font-lobster text-beauty text-xl">Contact me</h1>
        <p className="font-poppins text-secondary text-sm">Get in touch</p>
      </div>

      <div className="grid grid-cols-1 p-2 gap-4 medium:grid-cols-2 medium:p-2 laptop:grid-cols-3">
        <div className="w-[250px] p-1 h-[110px] bg-beauty rounded-xl">
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
        </div>

        <div className="w-[250px] p-1 h-[110px] bg-beauty rounded-xl">
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
        </div>
        <div className="w-[250px] p-1 h-[110px] bg-beauty rounded-xl">
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
        </div>
      </div>
      <div className="bg-elegant w-full h-[200px] laptop:h-[120px] mt-5 border-t-slate-200 border-solid">
        <h1 className="text-3xl mt-6 font-permanent text-primary text-center laptop:mt-1">
          Arif
        </h1>

        <div className="flex justify-center text-sm gap-4 text-white font-poppins mt-2 laptop:mt-0 laptop:text-[10px]">
          <p className="hover:text-primary duration-300 transition-all">
            <a href="#about">About</a>
          </p>
          <p className="hover:text-primary duration-300 transition-all">
            <a href="#portofolio">portofolio</a>
          </p>
          <p className="hover:text-primary duration-300 transition-all">
            <a href="#skills">skills</a>
          </p>
        </div>
        
        <div className="flex justify-center text-sm gap-4 text-white mt-5 laptop:mt-2">
            <a href="https://www.instagram.com" target="blank" ><FaInstagram className="text-xl hover:scale-110 duration-300 transition-all hover:text-primary cursor-grab" /> </a>
            <a href="https://github.com/Manstzy" target="blank"><LuGithub className="text-xl hover:scale-110 duration-300 transition-all hover:text-primary cursor-grab" /> </a>
            <a href="https://id.linkedin.com/" target="blank"><FaLinkedinIn className="text-xl hover:scale-110 duration-300 transition-all hover:text-primary cursor-grab" /> </a>
        </div>
        <p className="mt-12 laptop:mt-3 text-center text-sm font-lobster text-white/80 laptop:text-[12px]">My portofolio &copy; 2024</p>
      </div>
    </div>
  );
};

export default Contact;
