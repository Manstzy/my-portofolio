import Creativo from "../../images/creativo.png";
import { FiGithub } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";
import FoodWeb from "../../images/websitefood.png";
import Login from "../../images/login.png";
import FakeStore from "../../images/listproduct.png";
const Work = () => {
  return (
    <div
      id="work"
      className="h-full bg-primary w-full flex flex-col items-center px-8 medium:px-12"
    >
      <h1 className="font-semibold font-lobster text-xl mt-20 text-beauty desktop:text-2xl">
        Some Things I’ve Built
      </h1>
      <p className="font-poppins text-center text-elegant mt-0">
        view the archieve
      </p>

      <div className="tablet:grid tablet:grid-cols-2 tablet:gap-4 large:gap-6 large:max-w-[650px]">
        {/* Creativo */}
        <div className="bg-beauty relative w-full px-2 py-2 mt-2 rounded-md cursor-pointer">
          <p className="text-white font-serif text-md text-center">
            Featured Project
          </p>

          <div className="relative overflow-hidden">
            <img
              src={Creativo}
              className="hover:scale-105 hover:duration-300 mt-2 cursor-grab"
              alt=""
            />
            <div className="hover:bg-primary hover:opacity-80 gap-4 transition-all duration-300 cursor-grab flex absolute opacity-0 justify-center items-center inset-0">
              <a href="https://github.com/Manstzy/Creativo-web" target="blank">
                <FiGithub className="w-5 h-5 text-beauty cursor-pointer hover:text-elegant" />
              </a>
              <a href="https://manstzy.github.io/Creativo-web/" target="blank">
                {" "}
                <LuExternalLink className="w-5 h-5 text-beauty cursor-pointer hover:text-elegant" />
              </a>
            </div>
          </div>

          <p className="text-white  text-center font-lobster text-xl">
            Creativo Web
          </p>
          <p className="text-white px-4">
            For increase knowledge and my skill about this field , I{"'"}ve make
            landing page with tech{" "}
            <a
              href="https://react.dev/"
              target="blank"
              className="text-secondary hover:border-b transition-all duration-200"
            >
              react
            </a>{" "}
            <a
              href="https://vitejs.dev/guide/"
              className="text-purple-500 hover:border-b transition-all duration-200"
              target="blank"
            >
              vite{" "}
            </a>
            to make this website and i see design in figma and then i write
            code..
          </p>
        </div>
        {/* Foodweb */}
        <div className="bg-beauty relative w-full px-2 py-2 mt-2 rounded-md cursor-pointer">
          <p className="text-white font-serif text-md text-center">
            Featured Project
          </p>
          <div className="relative overflow-hidden ">
            <img
              src={FoodWeb}
              className="hover:scale-105 hover:duration-300 cursor-grab mt-2"
              alt=""
            />
            <div className="hover:bg-primary hover:opacity-80 gap-4 transition-all duration-300 cursor-grab flex absolute opacity-0 justify-center items-center inset-0">
              <a href="https://github.com/Manstzy/website-food" target="blank">
                <FiGithub className="w-5 h-5 text-beauty cursor-pointer hover:text-elegant" />
              </a>
              <a href="https://manstzy.github.io/website-food/" target="blank">
                {" "}
                <LuExternalLink className="w-5 h-5 text-beauty cursor-pointer hover:text-elegant" />
              </a>
            </div>
          </div>

          <p className="text-white  text-center font-lobster text-xl">
            Website Food
          </p>
          <p className="text-white px-4">
            I{"'"}ve make this website using tech like{" "}
            <a
              href="https://react.dev/"
              target="blank"
              className="text-primary hover:border-b transition-all duration-200"
            >
              react
            </a>{" "}
            <a
              href="https://tailwindcss.com/docs/installation"
              target="blank"
              className="text-primary hover:border-b transition-all duration-200"
            >
              , tailwindcss
            </a>{" "}
            and implementation hook like usestate to handle logic and using{" "}
            <a
              href="https://firebase.google.com/?gad_source=1&gclid=Cj0KCQiA5-uuBhDzARIsAAa21T-YGn-WY8KMifSVqh64b8BnyCd9cgxg6cE7M13HtDCyVMGZChLV_lkaAqM6EALw_wcB&gclsrc=aw.ds"
              className="text-purple-500 hover:border-b transition-all duration-200"
              target="blank"
            >
              firebase
            </a>{" "}
            to handle login registration with google account...
          </p>
        </div>
        {/* Assigment Harisenin */}
        <div className="bg-beauty relative w-full px-2 py-2 mt-2 rounded-md cursor-pointer">
          <p className="text-white font-serif text-md text-center">
            Featured Project
          </p>
          <div className="relative overflow-hidden ">
            <img
              src={Login}
              className="hover:scale-105 hover:duration-300 cursor-grab mt-2"
              alt=""
            />
            <div className="hover:bg-primary hover:opacity-80 gap-4 transition-all duration-300 cursor-grab flex absolute opacity-0 justify-center items-center inset-0">
              <a
                href="https://github.com/Manstzy/Individual-assignment"
                target="blank"
              >
                <FiGithub className="w-5 h-5 text-beauty cursor-pointer hover:text-elegant" />
              </a>
              <a
                href="https://manstzy.github.io/Individual-assignment/"
                target="blank"
              >
                {" "}
                <LuExternalLink className="w-5 h-5 text-beauty cursor-pointer hover:text-elegant" />
              </a>
            </div>
          </div>

          <p className="text-white  text-center font-lobster text-xl">
            Login Page
          </p>
          <p className="text-white px-4">
            As a Journey learn from Bootcamp Harisenin.com i{"'"}ve complete
            task making login page using{" "}
            <a
              href="https://tailwindcss.com/docs/installation"
              target="blank"
              className="text-primary hover:border-b transition-all duration-200"
            >
              tailwindcss
            </a>{" "}
            and make website as responsive as possibble
          </p>
        </div>
        {/* FakeStore */}
        <div className="bg-beauty relative w-full px-2 py-2 mt-2 rounded-md cursor-pointer">
          <p className="text-white font-serif text-md text-center">
            Featured Project
          </p>
          <div className="relative overflow-hidden ">
            <img
              src={FakeStore}
              className="hover:scale-105 hover:duration-300 cursor-grab mt-2"
              alt=""
            />
            <div className="hover:bg-primary hover:opacity-80 gap-4 transition-all duration-300 cursor-grab flex absolute opacity-0 justify-center items-center inset-0">
              <a
                href="https://github.com/Manstzy/Individual-assignment"
                target="blank"
              >
                <FiGithub className="w-5 h-5 text-beauty cursor-pointer hover:text-elegant" />
              </a>
              <a
                href="https://manstzy.github.io/Individual-assignment/"
                target="blank"
              >
                {" "}
                <LuExternalLink className="w-5 h-5 text-beauty cursor-pointer hover:text-elegant" />
              </a>
            </div>
          </div>

          <p className="text-white  text-center font-lobster text-xl">
            List Product
          </p>
          <p className="text-white px-4">
            The part of i learned in Harisenin.com i{"'"}ve also completed
            project using{" "}
            <a
              href="https://www.w3schools.com/js/"
              target="blank"
              className="text-primary hover:border-b transition-all duration-200"
            >
              Java Script
            </a>{" "}
            consume api using fecth and implementation async await , making some
            logic for increase price product and decrease price product and
            added to card..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
