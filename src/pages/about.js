import React from 'react'
import Image from 'next/image'
import Carousel from '@/components/Carousel/Carousel'
import CarouselCard from '@/components/Carousel/CarouselCard'
import StarsCanvas from '@/components/Stars'

const About = () => {
  return (
    <div className=' bg-black p-2 relative z-0' >
        <h1 className="font-bold text-3xl md:text-5xl z-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">ABOUT</h1>
        <div className='mx-auto bg-primary bg-pink-200  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.09] rounded-lg w-[90%] sm:w-[83%]  m-5'>
            <div className=" flex justify-center items-center flex-col  sm:p-10 p-6 ">
                <div className="w-full mt-[10px] flex flex-col gap-[15px]">
                    <div className='text-white text-lg font-bold'> {"With a steadfast commitment to excellence and a fervent desire to ignite the flames of technical prowess and ingenious innovation, BIT Mesra takes immense pride in hosting 'PANTHEON,' one of Eastern India's premier technical extravaganzas. This annual event stands as a beacon of inspiration, drawing students and technology enthusiasts from across the nation to partake in an exceptional celebration of technology and innovation. Embark on an intellectual journey with WikiWar, delve into the enigmatic mysteries of the universe through Illuminati's mind- bending challenges, decode hidden secrets within enigmatic puzzles and experience an adrenaline surge with FlashCode's thrilling coding challenges Mark your calendars for October 6th to 8th, 2023, as we extend a warm invitation to tech enthusiasts nationwide, inviting them to immerse themselves in a diverse range of events and seminars."} </div>
                </div>
            </div>
        </div>
        
        <h1 className="font-bold text-3xl md:text-5xl z-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">PANTHEON 2022</h1>
        <div style={{ maxWidth: 1200, maxHeight: 400, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <Carousel
                show={4}
                infiniteLoop
            >
                <CarouselCard path='/about/1.jpg' />
                <CarouselCard path='/about/2.jpg' />
                <CarouselCard path='/about/3.jpg' />
                <CarouselCard path='/about/4.jpg' />
                <CarouselCard path='/about/5.jpg' />
                <CarouselCard path='/about/6.jpg' />
                <CarouselCard path='/about/7.jpg' />
                <CarouselCard path='/about/8.jpg' />
                <CarouselCard path='/about/9.jpg' />
                <CarouselCard path='/about/10.jpg' />
                <CarouselCard path='/about/11.jpg' />
                <CarouselCard path='/about/12.jpg' />
            </Carousel>
        </div>
        <StarsCanvas />
    </div>
  )
}

export default About