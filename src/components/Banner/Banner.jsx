import React from 'react'
import ban from '../../assets/images/bannir.webp'
const Banner = () => {
  return (
       <>
    <div
  className="bg w-full h-[200px]  sm:h-[400px] md:h-[450px] lg:h-[400px] "
  style={{
    backgroundImage: `url(${ban})`,
  }}
></div>

       </>
  )
}

export default Banner