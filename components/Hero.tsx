import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi there ! ",
      "< The Name's Henry Bentil />",
      "{ I-create-awesome-builds }",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 200

  });
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <img
        data-aos="zoom-in"
        className="relative object-cover w-32 h-32 mx-auto rounded-full"
        src="https://drive.google.com/uc?export=view&id=1VA_N80uj7PzH6KNREzH4ouq77fXLTrxW"
        alt="my profile img"
      />
      <div className="z-20">
        <h2
          data-aos="fade-right"
          className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[16px] z-[100]"
        >
          Software Engineer
        </h2>
        <h1
          className="px-10 text-1xl font-semibold md:text-6xl"
          data-aos="fade-left"
        >
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#00f2ea" />
        </h1>

        <div className="pt-5" data-aos="fade-up">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
