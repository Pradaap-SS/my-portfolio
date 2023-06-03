import React from "react";
import { useState } from 'react';


import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {

  const [hoveredTechnology, setHoveredTechnology] = useState(null);

  const handleMouseEnter = (technology) => {
    setHoveredTechnology(technology);
  };

  const handleMouseLeave = () => {
    setHoveredTechnology(null);
  };


  return (
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div
            className='w-28 h-28'
            key={technology.name}
            onMouseEnter={() => handleMouseEnter(technology)}
            onMouseLeave={handleMouseLeave}
          >
            <BallCanvas icon={technology.icon} />
            <div
              className={`text-center transition-opacity duration-300 ${
                hoveredTechnology === technology ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    );
};

export default SectionWrapper(Tech, "tech");
