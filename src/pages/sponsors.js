import React from "react";
import Sliderss from "../components/Slider";
import SponsorBox from "../components/Sponsors/Sponsor";

import { learnSponosor1 } from "../utils/Sponsors23";
import StarsCanvas from "@/components/Stars";

const Sponsors = ({ data }) => {
  return (
    <div className='relative'>
      <div className="justify-center items-center relative bg-black z-0">
        <section>
          <div className="pt-8">
            <div
              id="sponsors"
              className=" pt-[50px] pb-[100px] px-0 
            new:text-left new:px-0 new:py-[50px] new:border-b-[0.2px] new:border-b-[rgba(255,255,255,0.5)] new:border-solid 
            text-center font-black
            "
            >
              <h1 className="font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
                SPONSORS
              </h1>
              {/* <h2 className="bg-clip-text text-[white] text-2xl text-center">Title Sponsor</h2> */}

              <h1 className="p-4"></h1>

              <div className="flex justify-center flex-wrap rounded-[20px] gap-20">
                {learnSponosor1.map((sponsor, index) => {
                  return <SponsorBox data={sponsor} key={index} />;
                })}
                {learnSponosor1.map((sponsor, index) => {
                  return <SponsorBox data={sponsor} key={index} />;
                })}
              </div>

              {/* <h2 className="bg-clip-text text-[white] text-2xl text-center">
                <h1 className="p-4"></h1>
                Past Sponsors
                <h1 className="p-4"></h1>
              </h2>

              <Sliderss /> */}
            </div>
          </div>
        </section>
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Sponsors;
