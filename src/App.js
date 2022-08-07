import logo from './logo.svg';
import './App.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {

  let t= "prev"
  return (
    <>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      // navigation
      navigation={{
        nextEl:".next",
        prevEl:".prev",
      }}
      modules={[Navigation, Pagination]}
      >
        <SwiperSlide><img src="https://fakeimg.pl/300/"/></SwiperSlide>
        <SwiperSlide><img src="https://fakeimg.pl/300/"/></SwiperSlide>
        <SwiperSlide><img src="https://fakeimg.pl/300/"/></SwiperSlide>
        <SwiperSlide><img src="https://fakeimg.pl/300/"/></SwiperSlide>
        <div className={t}></div>
        <div className='next'></div>
    </Swiper>
    </>
  );
}

export default App;
