import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import rasm from '../../assets/images/slide.png'
import rasm1 from '../../assets/images/slider.png'
import rasm2 from '../../assets/images/slider1.png'
const Main = () => {
  return (
   <>
   <Swiper  navigation={true} modules={[Navigation]} className="mySwiper"     
        >
   <SwiperSlide>
<img src={rasm1} alt="" className='bg bg w-full h-[200px]  sm:h-[400px] md:h-[450px] lg:h-[400px]' />
</SwiperSlide>
<SwiperSlide>
<img src={rasm} alt="" className='bg bg w-full h-[200px]  sm:h-[400px] md:h-[450px] lg:h-[400px]' />
</SwiperSlide>
<SwiperSlide>
<img src={rasm2} alt="" className='bg bg w-full h-[200px]  sm:h-[400px] md:h-[450px] lg:h-[400px]'  />
</SwiperSlide>
</Swiper>
   </>
  )
}

export default Main