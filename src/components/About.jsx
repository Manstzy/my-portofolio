import me from "../../images/me .jpeg";
import { LuLamp } from "react-icons/lu";
import { RiSuitcaseLine } from "react-icons/ri";
import { MdOutlineHeadphones } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import Cv from "../../src/Cv Ats.pdf"
const About = () => {
  return (
    <div
      className="h-full w-full flex flex-col items-center bg-primary"
      id="about"
    >
      <h1 className="mt-[60px] text-2xl font-lobster text-beauty laptop:mt-[100px] laptop:text-4xl">
        About me
      </h1>
      <p className="font-poppins text-sm text-secondary">My introduction</p>
      <div className="flex flex-col items-center laptop:flex-row laptop:space-x-10 laptop:py-10 desktop:space-x-52">
        {/* image */}
        <div className="w-[210px] laptop:w-[300px] laptop:h-[300px] h-[220px] mt-2 rounded-3xl bg-elegant flex items-center justify-center ">
          <img
            className="w-[200px] h-[210px] laptop:w-[290px] laptop:h-[290px] rounded-3xl"
            src={me}
            alt="gambar orang ganteng"
          />
        </div>

        <div>
          <div className="grid grid-cols-3 gap-2 mt-5 p-2 phone:gap-4 tablet:gap-8 laptop:mt-0 laptop:gap-4">
            <div className="w-22 phone:w-28 phone:h-28 tablet:w-32 tablet:h-32 p-4 rounded-xl laptop:w-28 laptop:h28 h-22 bg-secondary flex flex-col items-center shadow-md shadow-beauty cursor-grab">
              <LuLamp className="text-white text-2xl tablet:text-4xl tablet:mt-2 phone:text-3xl phone:mt-1" />
              <p className="font-poppins text-white text-[12px] tablet:text-[16px] mt-1">
                Experience
              </p>
              <p className="font-poppins text-center text-[10px] tablet:text-[12px] laptop:text-[14px] text-white/80">
                {" "}
                {"<"} 1 years{" "}
              </p>
            </div>
            <div className="w-22 p-4 phone:w-28 phone:h-28 rounded-xl h-22 tablet:w-32 laptop:w-28 laptop:h28 tablet:h-32 bg-secondary flex flex-col items-center shadow-md shadow-beauty cursor-grab">
              <RiSuitcaseLine className="text-white  tablet:text-4xl tablet:mt-2  text-2xl phone:text-3xl phone:mt-1" />
              <p className="font-poppins text-white text-[12px] tablet:text-[16px] laptop:text-[14px]  mt-1">
                Completed
              </p>
              <p className="font-poppins text-center text-[10px] tablet:text-[12px] text-white/80">
                + 10 projects{" "}
              </p>
            </div>
            <div className="w-22 p-4 phone:w-28 phone:h-28 rounded-xl tablet:w-32 laptop:w-28 laptop:h28 tablet:h-32 h-22 bg-secondary flex flex-col items-center shadow-md shadow-beauty cursor-grab">
              <MdOutlineHeadphones className="text-white  tablet:text-4xl tablet:mt-2   text-2xl phone:text-3xl phone:mt-1" />
              <p className="font-poppins text-white text-[12px] tablet:text-[16px] mt-1 laptop:text-[14px]">
                Support
              </p>
              <p className="font-poppins text-center text-[10px] tablet:text-[12px]  text-white/80">
                {" "}
                24/7{" "}
              </p>
            </div>
          </div>
          <p className="text-center laptop:text-left mx-auto font-poppins mt-5 text-beauty max-w-[340px] laptop:mx-0 laptop:mt-8 text-sm phone:text-[16px] phone:max-w-[400px] laptop:max-w-[430px]">
            Enthusiast from web developer, I make web developer with UI and also
            from the backend for the projects I have made so far are still
            personal projects
          </p>
          <a download="Cv Muhamad nu'man ma'arif" href={Cv}>
            <button className="rounded-xl mt-5 py-3 cursor-pointer flex hover:scale-105 justify-center gap-1 hover:bg-elegant duration-300 transition-all bg-beauty text-white items-center px-4 mx-auto laptop:mx-0">
              Download CV <FaRegFileAlt />
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
