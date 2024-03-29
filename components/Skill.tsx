import React from "react";

type Props = {
  image: string;
};

function Skill({ image }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <img
        src={image}
        alt="skill"
        className="border p-1 rounded-full border-gray-500 object-cover w-16 h-16 md:w-16 md:h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
    </div>
  );
}

export default Skill;
