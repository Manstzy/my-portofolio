import { GoCheckCircleFill } from "react-icons/go";

const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-primary w-full h-full flex flex-col items-center px-2"
    >
      <div>
        <h1 className="font-permanent text-beauty text-xl mt-20 medium:mt-24 laptop:text-2xl laptop:mt-24 desktop:mt-28">
          Skills
        </h1>
      </div>

      <p className="font-poppins text-secondary text-sm">Technical Sills</p>
      <div className="max-w-[300px] w-full medium:max-w-[400px] laptop:max-w-[650px] desktop:max-w-[700px] laptop:flex laptop:gap-14 laptop:justify-center laptop:my-10">
        <div className="max-w-[300px] laptop:h-[250px] medium:max-w-[400px] medium:flex medium:flex-col medium:items-center medium:py-8 w-full px-5 py-4 bg-secondary shadow-md shadow-beauty mt-5 rounded-xl">
          <h1 className="text-white font-poppins text-center">
            Frontend Development
          </h1>
          <div className="flex mt-3 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <GoCheckCircleFill className="text-xl mb-3 text-beauty" />
                <div>
                  <p className="font-poppins text-white text-sm medium:text-[16px]">
                    Html
                  </p>
                  <p className="font-poppins text-[10px] medium:text-[12px] text-white/80">
                    Basic
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <GoCheckCircleFill className="text-xl mb-3 text-beauty" />
                <div>
                  <p className="font-poppins text-white text-sm medium:text-[16px]">
                    Css
                  </p>
                  <p className="font-poppins text-[10px] text-white/80 medium:text-[12px]">
                    intermediate
                  </p>
                </div>
              </div>
              <div className="flex items-center  gap-2">
                <GoCheckCircleFill className="text-xl mb-3 text-beauty" />
                <div>
                  <p className="font-poppins text-white text-sm medium:text-[16px]">
                    Java Script
                  </p>
                  <p className="font-poppins text-[10px] text-white/80 medium:text-[12px]">
                    Basic
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center  gap-2">
                <GoCheckCircleFill className="text-xl mb-3 text-beauty" />
                <div>
                  <p className="font-poppins text-white text-sm medium:text-[16px]">
                    Tailwindcss
                  </p>
                  <p className="font-poppins text-[10px] text-white/80 medium:text-[12px]">
                    intermediate
                  </p>
                </div>
              </div>
              <div className="flex items-center  gap-2">
                <GoCheckCircleFill className="text-xl mb-3 text-beauty" />
                <div>
                  <p className="font-poppins text-white text-sm medium:text-[16px]">
                    React js
                  </p>
                  <p className="font-poppins text-[10px] text-white/80 medium:text-[12px]">
                    Basic
                  </p>
                </div>
              </div>
              <div className="flex items-center  gap-2">
                <GoCheckCircleFill className="text-xl mb-3 text-beauty" />
                <div>
                  <p className="font-poppins text-white text-sm medium:text-[16px]">
                    Git
                  </p>
                  <p className="font-poppins text-[10px] text-white/80 medium:text-[12px]">
                    intermediate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[300px] laptop:h-[250px] medium:max-w-[400px] medium:flex medium:flex-col medium:items-center medium:py-8 w-full px-5 py-4 bg-secondary shadow-md shadow-beauty mt-8 laptop:mt-5 rounded-xl ">
          <h1 className="text-white font-poppins text-center">
            Backend Development
          </h1>
          <div className="flex mt-3 ">
            <div className="flex flex-col gap-4 mr-12 medium:mr-32">
              <div className="flex items-center gap-2">
                <GoCheckCircleFill className="text-xl mb-3 text-beauty" />
                <div>
                  <p className="font-poppins text-white text-sm medium:text-[16px]">
                    Node js
                  </p>
                  <p className="font-poppins text-[10px] text-white/80 medium:text-[12px]">
                    Basic
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 medium:-ml-14">
              <div className="flex items-center  gap-2">
                <GoCheckCircleFill className="text-xl mb-3 text-beauty" />
                <div>
                  <p className="font-poppins text-white text-sm medium:text-[16px]">
                    My Sql
                  </p>
                  <p className="font-poppins text-[10px] text-white/80 medium:text-[12px]">
                    Basic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
