import React from "react";
import {motion} from "framer-motion";
import {ProjectsList} from "../data";

type Props = {};
function Projects({}: Props) {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.5}} className="relative flex items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly z-0">
      <h3 className="absolute top-20 md:top-12 uppercase tracking-[20px] text-gray-500 text-1xl md:text-2xl">Projects</h3>
      <small className="absolute top-[110px] md:top-[120px] text-gray-400">
        {"<<"} slide to reveal other projects {">>"}
      </small>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#00f2ea]/80">
        {ProjectsList &&
          ProjectsList.map((data, index) => (
            <div key={index} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <img src={data.image} className="w-100 h-100 md:w-100 md:h-56" />
              <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                <h4 className="text-sm font-semibold text-center md:text-xl ">
                  <span className="underline decoration-[#00f2ea]/50">
                    Case Study {index + 1} of {ProjectsList.length}:
                  </span>{" "}
                  <a href={data?.link}>{data?.projectTitle}</a>
                </h4>

                <p className="text-xs md:text-sm text-center md:text-left">{data?.description}</p>
              </div>
            </div>
          ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#00f2ea]/20 left-0 h-[300px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
