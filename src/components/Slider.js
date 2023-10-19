import React from "react";
import styles from "../styles/styles";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Sliderss = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div
        className={`${styles.section}  sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
      >
        <div>
          <Slider {...settings}>
            <div className="container">
              <Image
                objectFit="contain"
                width={70}
                height={70}
                src="/Pantheon_Emblem_Black.png"
                alt=""
                className="  object-contain"
                // style={{maxWidth:"50%", objectFit:"contain"}}
              />
            </div>
            <div className="container">
              <Image
                objectFit="contain"
                width={70}
                height={70}
                src="/Pantheon_Emblem_Black.png"
                alt=""
                className="  object-contain"
                // style={{maxWidth:"50%", objectFit:"contain"}}
              />
            </div>
            <div className="container">
              <Image
                objectFit="contain"
                width={70}
                height={70}
                src="/Pantheon_Emblem_Black.png"
                alt=""
                className="  object-contain"
                // style={{maxWidth:"50%", objectFit:"contain"}}
              />
            </div>
            <div className="container">
              <Image
                objectFit="contain"
                width={70}
                height={70}
                src="/Pantheon_Emblem_Black.png"
                alt=""
                className="  object-contain"
                // style={{maxWidth:"50%", objectFit:"contain"}}
              />
            </div>
            <div className="container">
              <Image
                objectFit="contain"
                width={70}
                height={70}
                src="/Pantheon_Emblem_Black.png"
                alt=""
                className="  object-contain"
                // style={{maxWidth:"50%", objectFit:"contain"}}
              />
            </div>
            <div className="container">
              <Image
                objectFit="contain"
                width={70}
                height={70}
                src="/Pantheon_Emblem_Black.png"
                alt=""
                className="  object-contain"
                // style={{maxWidth:"50%", objectFit:"contain"}}
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Sliderss;
