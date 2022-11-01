import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly"
    >
      <h3 className="relative mt-4 uppercase tracking-[20px] text-gray-500 text-2xl md:absolute md:top-20">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src="https://drive.google.com/uc?export=view&id=1VA_N80uj7PzH6KNREzH4ouq77fXLTrxW"
        className="flex-shrink-0 object-cover w-32 h-32 -mb-24 rounded-full md:mb-0 md:rounded-lg md:w-40 md:h-40 xl:w-[400px] xl:h-[450px]"
      />

      <div className="px-0 space-y-10 md:px-10">
        <h4 className="text-2xl font-semibold md:text-4xl mt-10">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm text-left">
          Energetic, dependable individual with a passion in Software
          development and performs extremely well in competitive, motivating and
          fast paced environment, leading to maximize productivity. I have 4
          years of developing software applications, , testing, debugging, and
          training staff on web technologies. I believe in applications having
          the ability to provide solutions to organizational challenges. I have
          acquired skills in HTML, CSS, JavaScript, PHP & SQL. I have skills in
          frameworks and libraries such JQuery, ReactJs, Boostrap 5, codeigniter
          and W3CSS.
        </p>
      </div>
    </div>
  );
}
