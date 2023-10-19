"use client"
import { useEffect, useState } from 'react';
import JoinModel from '@/components/joinTeamPopup';
import React from 'react'
import TeamRegisterModel from '@/components/registerTeamPopup';
import { useStateContext } from '@/context';
import Image from 'next/image';
import Link from 'next/link';
import StarsCanvas from '@/components/Stars';
const Register = () => {
    const { user, userinfo, setUser, setUserInfo } = useStateContext();
    const [joinTeamModel, setJoinTeamModel] = useState(false)
    const [createTeamModel, setCreateTeamModel] = useState(false)

    const handleOnClose = () => {
        setJoinTeamModel(false)
        setCreateTeamModel(false)
    }

    const handleClick = (e) => {
        if (e.target.id === 'join') {
            setJoinTeamModel(true)
        } else if (e.target.id === 'create') {
            setCreateTeamModel(true)
        }
    }
    useEffect(()=>{
        if(userinfo.teamID != "null"){
            setJoinTeamModel(false)
            setCreateTeamModel(false)
        }
    }, [userinfo.teamID])
    
    if(user) {
        return (
            <div className='bg-black flex md:flex-row flex-col h-screen w-screen justify-evenly items-center relative z-0' >
                <Image className='' src = '/Pantheon_Emblem_White.png' alt='pantheon logo' height={200} width={200} />
                <div className='flex flex-col justify-center items-center mt-15'>
                    <div className='text-center flex-1 font-poppins font-semibold text-4xl lg:text-5xl mb-7 text-white w-fit h-fit' > Hello {userinfo.name} </div>
                    <div className='font-poppins font-normal text-[18px] leading-[25px] flex md:text-start text-center md:leading-[30.8px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' > Your Pantheon ID is  </div>
                    <div className='font-poppins font-normal text-white/50 text-[18px] leading-[25px] flex md:text-start text-center md:leading-[30.8px] mb-7' > {userinfo.pantheonid} </div>
                    
                    {
                        userinfo.teamID == "null" ? (
                            <div>
                                <div id='join' onClick={handleClick} className='m-2 cursor-pointer font-epilogue text-[16px] leading-[26px] min-h-[52px] bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-105 transform transition-all duration-200 ease-in-out text-white font-bold py-3 px-6 rounded-md' > Join a team </div>
                                <div id='create' onClick={handleClick} className='m-2 cursor-pointer font-epilogue text-[16px] leading-[26px] min-h-[52px] bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-105 transform transition-all duration-200 ease-in-out text-white font-bold py-3 px-6 rounded-md'  > Create a team </div>
                            </div>
                        ) : (
                            <div className='flex flex-col items-center justify-center'>
                                <div className='font-poppins font-normal text-transparent text-[18px] leading-[25px] flex md:text-start text-center md:leading-[30.8px] bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' > Your Team ID is  </div>
                                <div className='font-poppins font-normal text-white/50 text-[18px] leading-[25px] flex md:text-start text-center md:leading-[30.8px] mb-7' > {userinfo.teamID} </div>
                            </div>
                        )
                    }
                    
                </div>
                <JoinModel onClose={handleOnClose} visible={joinTeamModel} id={userinfo.pantheonid} />
                <TeamRegisterModel onClose={handleOnClose} visible={createTeamModel} id={userinfo.pantheonid} />
                <StarsCanvas />
            </div>
        )
    }else{
        return(
            <div className='bg-black flex md:flex-row flex-col h-screen justify-evenly items-center pb-20 relative z-0' >
                <Image className='' src = '/Pantheon_Emblem_White.png' alt='pantheon logo' height={200} width={200} />
                <div className='flex flex-col justify-center items-center mt-15'>
                    <div id='join' onClick={handleClick} className=' text-center font-poppins font-semibold text-[40px] lg:text-[52px] text-white  leading-[50px] lg:leading-[75px]' > Welcome to Pantheon </div>
                    <div id='join' onClick={handleClick} className='font-poppins font-normal text-white/50 text-[18px] leading-[25px] flex md:text-start text-center md:leading-[30.8px]' > Please Login First </div>
                </div>
                <StarsCanvas />
            </div>
        )
    }
    
}

export default Register