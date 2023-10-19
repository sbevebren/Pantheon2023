import Image from "next/image";
import { Inter } from "next/font/google";
import Landing from "../components/Landing";
import Animation from "../components/Animation";
import { useRouter } from "next/router";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const buyMerch = () => {
    router.push(
      "https://docs.google.com/forms/d/e/1FAIpQLSdZ6E1MX3vwMEg9KzYLgeBAD_Vgj9bVpN54RFwcEqPmnBru7g/viewform"
    );
  };

  return (
    <div className="fixed  w-screen">
      <div className="">
        <Animation />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[55%] w-[75%] sm:w-[70%] md:w-[40%] lg:w-[30%] flex flex-col  justify-center items-center bg-transparent">
        <div>
          <Image
            src="/pantheon_main_white.png"
            alt="pantheon"
            width={400}
            height={400}
            className="scale-100 sm:scale-110 md:scale-125 text-white "
            priority
          />
        </div>
        <div className="flex justify-center flex-col  md:mt-10 items-center scale-100 ">
          <Landing />
          <div className="flex flex-col justify-center items-center scale-75 ">
            {/* <h1 className="font-bold text-4xl z-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-10 animate-bounce  ...">
            Merch Available
          </h1>
          <div onClick={buyMerch} className="cursor-pointer flex text-2xl z-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
            <span className=' cursor-pointer text-blue-500 px-2' >click here </span>  to buy now
          </div> */}
            <h1 className="text-center font-bold text-4xl z-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-10 animate-bounce  ...">
              Registration Closed
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
