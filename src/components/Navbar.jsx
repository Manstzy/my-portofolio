import { CgMenuBoxed } from "react-icons/cg";
import { FiHome } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { PiBooks } from "react-icons/pi";
import { LuMountain } from "react-icons/lu";
import { LuSendHorizonal } from "react-icons/lu";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
const Navbar = () => {
    const [nav , setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className="miniPhone:flex miniPhone:items-center fixed w-full z-50 miniPhone:justify-between miniPhone:px-5 miniPhone:py-4 tablet:px-8 tablet:py-6 desktop:px-20 border-b border-secondary bg-primary/30 shadow-md shadow-secondary">
      <ul>
        <li>
          <a className="font-lobster text-xl tablet:text-2xl" href="#">
            Arif
          </a>
        </li>
      </ul>
      <ul className="laptop:flex gap-4 font-poppins hidden">
        <li><a href="#home" className="hover:text-secondary transition">Home</a></li>
        <li><a href="#about"  className="hover:text-secondary transition">About</a></li>
        <li><a href="#skills"  className="hover:text-secondary transition">Skills</a></li>
        <li><a href="#portofolio"  className="hover:text-secondary transition">Portofolio</a></li>
        <li><a href="#contact"  className="hover:text-secondary transition">Contact</a></li>
      </ul>
      <ul className={nav ? "z-50 gap-4 grid place-items-center left-0 right-0 py-4 tablet:py-14 phone:py-10 px-2 bg-beauty absolute grid-cols-3 top-0 bg-beige-950 transition-all duration-300 rounded-b-xl text-white" : "z-50 gap-4 grid place-items-center left-0 right-0 py-4 px-2 transition-all duration-300 absolute grid-cols-3 -top-[500%] bg-rose-950 rounded-b-xl text-white" }>
        <li className="hover:bg-secondary p-3 rounded-md">
        <a href="#home"><FiHome className="mx-auto tablet:text-2xl phone:text-xl" /> Home</a>
        </li>
        <li className="hover:bg-secondary rounded-md p-3">
        <a href="#about"> <CgProfile className="mx-auto tablet:text-2xl phone:text-xl" />About</a>
        </li>
        <li className="hover:bg-secondary p-3 rounded-md">
        <a href="#skills"><PiBooks className="mx-auto tablet:text-2xl phone:text-xl" /> Skills</a>
        </li>
        <li className="hover:bg-secondary p-3 rounded-md">
        <a href="#portofolio"><LuMountain className="mx-auto tablet:text-2xl phone:text-xl" />Portofolio</a>
        </li>
        <li className="hover:bg-secondary p-3 rounded-md">
        <a href="#contact"><LuSendHorizonal className="mx-auto tablet:text-2xl phone:text-xl" />Contact</a>
        </li>
        <li className="hover:bg-secondary p-3 rounded-md">
            <IoMdCloseCircleOutline className="tablet:text-3xl phone:text-2xl" onClick={handleNav}/>
        </li>
      </ul>
      <span className="cursor-pointer hover:bg-secondary transition-all duration-300 rounded-md laptop:hidden">
        <CgMenuBoxed className="tablet:text-3xl text-2xl" onClick={handleNav} />
      </span>
    </div>
  );
};

export default Navbar;
