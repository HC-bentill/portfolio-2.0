import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const iconStyle = {
  width: "30px",
  height: "30px",
};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: -0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://twitter.com/HcBentil"
          fgColor="gray"
          bgColor="transparent"
          style={iconStyle}
        />
        <SocialIcon
          url="https://web.facebook.com/henry.bentil/"
          fgColor="gray"
          bgColor="transparent"
          style={iconStyle}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/henry-bentil"
          fgColor="gray"
          bgColor="transparent"
          style={iconStyle}
        />
        <SocialIcon
          url="https://github.com/HC-bentill"
          fgColor="gray"
          bgColor="transparent"
          style={iconStyle}
        />
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: -500,
            opacity: -0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            network="email"
            className="cursor-pointer"
            fgColor="gray"
            bgColor="transparent"
            style={iconStyle}
          />
          <p className="hidden text-sm text-gray-400 uppercase md:inline-flex">
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
