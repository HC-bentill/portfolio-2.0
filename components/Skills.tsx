import React from 'react'
import { motion } from "framer-motion";
import Skill from './Skill';

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1.5 }}
    transition={{ duration: 1.5 }}
    className="flex relative flex-col text-center md:text-left max-w-[300px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
  >
    <h3 className="mt-4 uppercase tracking-[20px] text-gray-500 text-2xl relative  md:absolute md:top-5 my-6">
      Skills
    </h3>

    <div className='grid grid-cols-3 gap-5'>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
    </div>

  </motion.div>
  )
}