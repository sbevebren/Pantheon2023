import React from 'react'
import Image from 'next/image'
const CarouselCard = (props) => {
  return (
    <div>
        <div style={{padding: 8}}>
            <Image src={props.path} alt="placeholder" height={400} width={400} />
        </div>
    </div>
  )
}

export default CarouselCard