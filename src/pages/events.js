import EventCard from "@/components/EventCard";
import Image from "next/image";
import data from "@/utils/bible.json";

import StarsCanvas from "@/components/StarsEvent";
import { useEffect } from "react";

const Events = () => {
  
  // const screen = window.innerWidth >= 768 ? 0.0006 : 0.0002;
  

  return (
    <div className="bg-black z-0 relative">
      <div className="flex flex-col justify-center items-center pt-[50px] pb-[50px]  ">
        <h1 className="font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
          EVENTS
        </h1>
        <div className="flex flex-wrap gap-[100px] items-center justify-center pt-12 z-10">
          <h1 className="w-full flex justify-center m-auto text-white text-3xl font-bold">DAY 1</h1>
          {data["day1"].map((event, ind) => (
            <EventCard
              path = {event["path"]}
              key={ind}
              day={"6 Oct"}
              event={event["event"]}
              venue={event["venue"]}
              timing={event["timing"]}
              category={event["category"]}
              desc={event["description"]}
              club={event["club"]}
              contact={event["contact"]}
              register={event["register"]}
            />
          ))}
          <h1 className="w-full flex justify-center m-auto text-white text-3xl font-bold">DAY 2</h1>
          {data["day2"].map((event, ind) => (
            <EventCard
              path={event["path"]}
              key={ind}
              day={"7 Oct"}
              event={event["event"]}
              venue={event["venue"]}
              timing={event["timing"]}
              category={event["category"]}
              desc={event["description"]}
              club={event["club"]}
              contact={event["contact"]}
              register={event["register"]}
            />
          ))}
          <h1 className="w-full flex justify-center m-auto text-white text-3xl font-bold">DAY 3</h1>
          {data["day3"].map((event, ind) => (
            <EventCard
            path={event["path"]}
              key={ind}
              day={"8 Oct"}
              event={event["event"]}
              venue={event["venue"]}
              timing={event["timing"]}
              category={event["category"]}
              desc={event["description"]}
              club={event["club"]}
              contact={event["contact"]}
              register={event["register"]}
            />
          ))}
        </div>
      </div>
      {/* <StarsCanvas screen={screen} /> */}
    </div>
  );
};

export default Events;
