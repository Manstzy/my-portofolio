import { CgMenuBoxed } from "react-icons/cg";
import { FiHome } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { PiBooks } from "react-icons/pi";
import { LuMountain } from "react-icons/lu";
import { LuSendHorizonal } from "react-icons/lu";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-scroll";
const Navbar = ({ nav, handleNav }) => {
  const [bgNav, setBgNav] = useState(false);

  window.addEventListener("scroll", function () {
    if (scrollY >= 20) {
      setBgNav(true);
    } else {
      setBgNav(false);
    }
  });

  return (
    <div
      className={
        bgNav
          ? "miniPhone:flex miniPhone:items-center fixed top-0 left-0 right-0 w-full z-50 miniPhone:justify-between miniPhone:px-5 miniPhone:py-4 tablet:px-8 tablet:py-6 desktop:px-20 border-b duration-300 transition-all border-secondary text-white bg-secondary shadow-md shadow-secondary"
          : "miniPhone:flex miniPhone:items-center fixed top-0 left-0 right-0 w-full z-50 miniPhone:justify-between miniPhone:px-5 miniPhone:py-4 tablet:px-8 tablet:py-6 desktop:px-20 border-none duration-300 transition-all bg-primary"
      }
    >
      <ul>
        <li>
          <Link
            className={
              bgNav
                ? "cursor-grab font-lobster hover:text-primary text-xl tablet:text-2xl"
                : "cursor-grab font-lobster text-xl tablet:text-2xl hover:text-secondary"
            }
            to="home"
            smooth={true}
          >
            Hello..
          </Link>
        </li>
      </ul>
      <ul className="laptop:flex gap-4 font-poppins hidden">
        <li>
          <Link
            to="home"
            smooth={true}
            className={
              bgNav
                ? "hover:text-primary transition cursor-pointer"
                : "hover:text-secondary transition cursor-pointer"
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            className={
              bgNav
                ? "hover:text-primary transition cursor-pointer"
                : "hover:text-secondary transition cursor-pointer"
            }
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            className={
              bgNav
                ? "hover:text-primary transition cursor-pointer"
                : "hover:text-secondary transition cursor-pointer"
            }
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="portofolio"
            smooth={true}
            className={
              bgNav
                ? "hover:text-primary transition cursor-pointer"
                : "hover:text-secondary transition cursor-pointer"
            }
          >
            Portofolio
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            className={
              bgNav
                ? "hover:text-primary transition cursor-pointer"
                : "hover:text-secondary transition cursor-pointer"
            }
          >
            Contact
          </Link>
        </li>
      </ul>
      <ul
        className={
          nav
            ? "z-50 gap-4 grid place-items-center left-0 right-0 py-4 tablet:py-14 phone:py-10 px-2 bg-beauty absolute grid-cols-3 top-0 bg-beige-950 transition-all duration-300 rounded-b-xl text-white"
            : "z-50 gap-4 grid place-items-center left-0 right-0 py-4 px-2 transition-all duration-300 absolute grid-cols-3 -top-[500%] bg-rose-950 rounded-b-xl text-white"
        }
      >
        <li className="hover:bg-secondary p-3 rounded-md">
          <Link onClick={handleNav} to="home" smooth={true}>
            <FiHome className="mx-auto tablet:text-2xl phone:text-xl" /> Home
          </Link>
        </li>
        <li className="hover:bg-secondary rounded-md p-3">
          <Link onClick={handleNav} smooth={true} to="about">
            {" "}
            <CgProfile className="mx-auto tablet:text-2xl phone:text-xl" />
            About
          </Link>
        </li>
        <li className="hover:bg-secondary p-3 rounded-md">
          <Link onClick={handleNav} to="skills" smooth={true}>
            <PiBooks className="mx-auto tablet:text-2xl phone:text-xl" /> Skills
          </Link>
        </li>
        <li className="hover:bg-secondary p-3 rounded-md">
          <Link onClick={handleNav} to="portofolio" smooth={true}>
            <LuMountain className="mx-auto tablet:text-2xl phone:text-xl" />
            Portofolio
          </Link>
        </li>
        <li className="hover:bg-secondary p-3 rounded-md">
          <Link onClick={handleNav} to="contact" smooth={true}>
            <LuSendHorizonal className="mx-auto tablet:text-2xl phone:text-xl" />
            Contact
          </Link>
        </li>
        <li className="hover:bg-secondary p-3 rounded-md">
          <IoMdCloseCircleOutline
            className="tablet:text-3xl phone:text-2xl"
            onClick={handleNav}
          />
        </li>
      </ul>
      <span className="cursor-pointer hover:bg-secondary transition-all duration-300 rounded-md laptop:hidden">
        <CgMenuBoxed className="tablet:text-3xl text-2xl" onClick={handleNav} />
      </span>
    </div>
  );
};

export default Navbar;
