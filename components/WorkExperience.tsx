import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { workExperienceList } from "../data";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <h3 className="absolute top-24 md:top-12 uppercase tracking-[20px] text-gray-500 text-1xl md:text-2xl">
        Experience
      </h3>
      <small className="absolute top-[140px] text-gray-400">{"<<"} slide to reveal other experiences {">>"}</small>

      <div className="flex w-full mt-10 md:mt-8 p-10 space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#00f2ea]/80">
        {workExperienceList && workExperienceList.map((item, index)=>(
          <ExperienceCard experience={item} key={index}/>
        ))}
      </div>
      
    </motion.div>
  );
}
