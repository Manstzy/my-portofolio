import loginNetflix from "../../images/loginnetflix.png";
import tugasHarisenin from "../../images/tugasharisenin.png";
import { LuScrollText } from "react-icons/lu";
import netflix from "../../images/landingpage.png";
import product from "../../images/product.png";
import productList from "../../images/product list.png";
import { motion } from "framer-motion";

const Portofolio = () => {
  return (
    <div id="portofolio" className="h-full bg-primary w-full flex flex-col">
      <div className="mt-20 text-center desktop:mt-28 tablet:mt-24">
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
          className="font-permanent text-beauty"
        >
          Portofolio
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
          className="text-sm font-poppins text-secondary"
        >
          since the beginning from my journey i was learn and making personal
          project for my learn...
        </motion.p>
      </div>

      <div className="grid grid-cols-1 mt-5 gap-8 medium:grid-cols-2 px-4 medium:gap-4 tablet:max-w-[640px] tablet:mx-auto large:gap-10 desktop:max-w-[1024px] desktop:gap-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="max-w-[250px] h-[300px] desktop:max-w-[300px] bg-beauty shadow-xl shadow-elegant/80 mx-auto rounded-t-xl overflow-hidden"
        >
          <img
            className="h-[200px] hover:cursor-grab hover:scale-105 transition-all duration-300"
            src={loginNetflix}
            alt=""
          />
          <div className="flex items-center justify-center gap-2 mt-2 p-2">
            <LuScrollText className="text-center text-lg text-white " />
            <p className="font-lobster text-white mt-1">Description</p>
          </div>
          <p className="text-center text-white/80 font-poppins text-sm">
            Login netflix with react
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="max-w-[250px] h-[300px] desktop:max-w-[300px] bg-beauty shadow-xl shadow-elegant/80 mx-auto rounded-t-xl overflow-hidden"
        >
          <img
            className="h-[200px] hover:cursor-grab hover:scale-105 transition-all duration-300"
            src={tugasHarisenin}
            alt=""
          />
          <div className="flex items-center justify-center gap-2 mt-2 p-2">
            <LuScrollText className="text-center text-lg text-white " />
            <p className="font-lobster text-white mt-1">Description</p>
          </div>
          <p className="text-center text-white/80 font-poppins text-sm">
            landing page with tailwindcss
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="max-w-[250px] desktop:max-w-[300px] h-[300px] bg-beauty shadow-xl shadow-elegant/80 mx-auto rounded-t-xl overflow-hidden"
        >
          <img
            className="h-[200px] hover:cursor-grab hover:scale-105 transition-all duration-300"
            src={netflix}
            alt=""
          />
          <div className="flex items-center justify-center gap-2 mt-2 p-2">
            <LuScrollText className="text-center text-lg text-white " />
            <p className="font-lobster text-white mt-1">Description</p>
          </div>
          <p className="text-center text-white/80 font-poppins text-sm">
            landing page with react js
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="max-w-[250px] desktop:max-w-[300px] h-[300px] bg-beauty shadow-xl shadow-elegant/80 mx-auto rounded-t-xl overflow-hidden"
        >
          <img
            className="h-[200px] hover:cursor-grab hover:scale-105 transition-all duration-300"
            src={product}
            alt=""
          />
          <div className="flex items-center justify-center gap-2 mt-2 p-2">
            <LuScrollText className="text-center text-lg text-white " />
            <p className="font-lobster text-white mt-1">Description</p>
          </div>
          <p className="text-center text-white/80 font-poppins text-sm">
            Ui page html css
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="max-w-[250px] desktop:max-w-[300px] h-[300px] bg-beauty shadow-xl shadow-elegant/80 mx-auto rounded-t-xl overflow-hidden"
        >
          <img
            className="h-[200px] hover:cursor-grab hover:scale-105 transition-all duration-300"
            src={productList}
            alt=""
          />
          <div className="flex items-center justify-center gap-2 mt-2 p-2">
            <LuScrollText className="text-center text-lg text-white " />
            <p className="font-lobster text-white mt-1">Description</p>
          </div>
          <p className="text-center text-white/80 font-poppins text-sm">
            List product sederhana memakai html ,css , js
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Portofolio;
