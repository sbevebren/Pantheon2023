"use client"
import React from "react";
import { useState, useRef, useEffect } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Link from "next/link";

const EventCard = ({ day, event, venue, timing, category, desc, club, contact, path, register }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`h-[530px] w-[320px] overflow-hidden shadow-lg transition-transform transform hover:scale-105 border-white border-[1px] rounded-2xl ${
        isHovered ? "hover:description-visible" : ""
      }` }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // onClick={handleClick}
      onClick={() => {
        setIsHovered(!isHovered);
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div>
        <Image
          src={path ? path : '/Pantheon_Emblem_White.png'}
          alt="title"
          className={`w-full ${path ? 'p-0' : 'pt-[100px] mb-5'} h-350 object-cover rounded-t-lg`}
          width={320}
          height={350}
        />
      </div>

      <div className="px-6 py-4 bg-gray-300 ">
        <div className="font-bold text-xl mb-2 text-gray-700">{event}</div>
        <p className="text-gray-700 text-base">{day}</p>
        <p className="text-gray-700 text-base"><b>Venue : </b>{venue}</p>
        <p className="text-gray-700 text-base"><b>Category : </b>{category}</p>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gray-300 p-2 text-gray-700 rounded-lg ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 `}
      >
        <div className="rounded-lg">
        <p className="text-gray-700 text-base"><b>Club : </b>{club}</p>
        <p className="text-gray-700 text-base"><b>Timing : </b>{timing}</p><br />
        {desc &&
          <>
            <p className="text-gray-700 text-base">{desc.slice(0, 300)}
            {desc.length > 250 && "..."}
            </p>
            <br />
          </>
        }
        {contact.map((c, key) => {
          return <p className="text-gray-700 text-base" key={key}><b>{c}</b></p>
        })}
        </div>
        <div className="flex-grow flex items-center justify-center">
          <div className="cursor-pointer bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-105 transform transition-all duration-200 ease-in-out text-white font-bold px-3 py-2 rounded-md">
            <Link href={register ? register : "/"} target="_blank">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
