import React from 'react'
import styled from 'styled-components'
import Image from "next/image";




const Name = styled.h3`
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

const Sponsor = ({ data }) => {
    return (
        <>
            <div className='w-[180px] bg-white flex flex-col justify-center items-center m-2.5 p-2.5 rounded-[5px]'>
                <div className='w-full h-full flex flex-col justify-between items-center no-underline' href={data.Link}>
                    <div className='w-[120px] h-[120px] flex justify-center items-center'>
                        <Image alt='sponsor' className=' rounded-[5px]' width={120} height={70} src={data.image} />
                    </div>
                    <div className=' flex flex-col justify-around items-center p-2.5'>
                        <Name className='text-base bg-[linear-gradient(to_right,#f76c6c,#e8637c,#d45f8a,#bc5e93,#a25e97)] bg-clip-text no-underline text-center'>{data.Name}</Name>
                        <h4 className='text-sm font-bolder text-[#0e0f25] text-center'>{data.type}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sponsor