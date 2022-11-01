import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
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
        src="https://drive.google.com/uc?export=view&id=1WSRDLmx5YYjFaOcMMgDt7r9EA0ri6eMn"
        alt="s"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-[20px] text-center font-light md:text-1xl">Front End Engineer</h4>
        <p className="mt-1 text-2xl font-bold text-center">Meetenant</p>

        <p className="py-5 text-gray-300 uppercase font-bold text-[12px] text-center">Started work.. -Ended...</p>

        {/* <ul className="ml-5 space-y-2 md:space-y-4 text-[12px] md:text-sm list-disc">
          <li>Summary points Summary</li>
          <li>Summary points Summary</li>
          <li>Summary points Summary</li>
          <li>Summary points Summary</li>
          <li>Summary points Summary</li>
        </ul> */}
      </div>
    </article>
  );
}
