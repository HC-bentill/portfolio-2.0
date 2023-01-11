import React from "react";
import { motion } from "framer-motion";
import { IWorkExperience } from "../data";

type Props = {
  experience: IWorkExperience
};

export default function ExperienceCard({experience}: Props) {
  return (
    <article className="flex flex-col items-center flex-shrink-0 rounded-l space-y-7 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 md:hover:opacity-100 md:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-20 h-20 md:w-20 md:h-20 rounded-full object-contain object-center"
        src={experience?.image}
        alt="s"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-[20px] text-center font-light md:text-1xl">{experience?.position}</h4>
        <p className="mt-1 text-2xl font-bold text-center">{experience?.workplace}</p>

        <p className="py-5 text-gray-300 uppercase font-bold text-[12px] text-center">{`${experience?.period.started} - ${experience?.IscurrentPlace ? "Present" : experience?.period.ended}`}</p>
      </div>
    </article>
  );
}
