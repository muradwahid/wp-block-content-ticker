import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  EffectFade,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const Ticker = ({attributes}) => {
  const { contentSettings, animation } = attributes;
  const Slider = () => (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      slidesPerView={1}
      loop={animation.loop}
      loopAddBlankSlides={true}
      autoplay={
        animation.autoplay
          ? {
              delay: animation.autopPlaySpeed,
              reverseDirection: animation.effect==="slide"?(animation.direction === 'right' ? false :true):true,
              pauseOnMouseEnter: animation.pauseOnHover,
            }
          : false
      }
      {...(animation.effect === 'fade' ? { effect: 'fade' } : {})}
      speed={animation.sliderSpeed}
      grabCursor={animation.grabCursor}
      navigation={animation.arrows? {
        prevEl: '.custom-prev-btn',
        nextEl: '.custom-next-btn',
      }:false}
      className="cttk-ticker-content-wrapper"
    >
      {contentSettings?.map((value, index) => (
        <SwiperSlide key={index}>
          <a
          className='cttk-ticker-link'
            {...(value.link.length > 2 ? { href: value.link } : {})}
            {...(value.link.length > 2 ? { target: '_blank' } : {})}
          >
            {value.content}
          </a>
        </SwiperSlide>
      ))}
      {!(contentSettings.length > 1) && <SwiperSlide></SwiperSlide>}
    </Swiper>
  );
  return <Slider/>
};

export default Ticker;