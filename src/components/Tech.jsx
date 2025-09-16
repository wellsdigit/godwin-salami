import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <>
          <div className='lg:block hidden w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
          <div className='lg:hidden block w-28 h-28' key={technology.name}>
            <img src={technology.icon} alt="..." />
          </div>
        </>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
