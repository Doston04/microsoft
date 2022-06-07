import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';

export default function SwiperPage() {
  const swiper = useSwiper();  

  return (
    <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide>Slide 1</SwiperSlide>
        <button onClick={() => swiper.slideNext()}>Next</button>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}