import React from "react";
import { motion } from "framer-motion";

type Props = {};
const projects = [1, 2, 3, 4, 5];
function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly z-0"
    >
      <h3 className="absolute top-20 md:top-12 uppercase tracking-[20px] text-gray-500 text-1xl md:text-2xl">
        Projects
      </h3>
      <small className="absolute top-[110px] md:top-[120px] text-gray-400">{"<<"} slide to reveal other projects {">>"}</small>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((d, i) => (
          <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <img
              src="https://drive.google.com/uc?export=view&id=1ohi4FLBREDU95c-5rcaFyFlEmCP8V1fw"
              className="w-56 h-56 md:w-68 md:h-68"
            />
            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-sm font-semibold text-center md:text-xl ">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS clone
              </h4>

              <p className="text-xs md:text-sm text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum!
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/20 left-0 h-[300px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
