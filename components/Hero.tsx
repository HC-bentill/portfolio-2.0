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
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <img
        className="relative object-cover w-32 h-32 mx-auto rounded-full"
        src="https://drive.google.com/uc?export=view&id=1VA_N80uj7PzH6KNREzH4ouq77fXLTrxW"
        alt="my profile img"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] z-[100]">
          Software Engineer
        </h2>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <button className="heroButton">About</button>
          <button className="heroButton">Experience</button>
          <button className="heroButton">Skills</button>
          <button className="heroButton">Projects</button>
        </div>
      </div>
    </div>
  );
}
