"use client"
import { useState, useRef, useEffect } from "react"
import TimerComponent from "@/components/TimerComponent"

const Landing = () => {

    const [days, setDays] = useState('00')
    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        var countDownDate = new Date("Oct 05, 2023, 17:00:00").getTime();

        interval = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //stop timer
                clearInterval(interval.current)
            } else {
                //update timer
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }

        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            clearInterval(interval.current)
        }
    })

    return (
        <div className=' bg-white/[0.15] h-fit w-fit rounded-md md:rounded-lg flex flex-row justify-center items-center md:px-4 text-white' >
            {/* <h1 className="text-6xl " >Coming Soon...</h1> */}

            {/* <TimerComponent
                label="DAYS"
                value={days}
            />
            <TimerComponent
                label="HOURS"
                value={hours}
            /> */}
            {/* <TimerComponent
                label="MINUTES"
                value={minutes}
            />
            <TimerComponent
                label="SECONDS"
                value={seconds}
            /> */}
            <TimerComponent
                label="SECONDS"
                value={seconds}
            />
            {/* <div className="text-center mx-2 px-2 py-4 my-2">
      <h1 className="font-bold w-fit text-3xl md:text-5xl z-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">LIVE NOW</h1>
    </div> */}


        </div>
    )
}

export default Landing