import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Mostrar 6 slides ao mesmo tempo
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        width: '100%' // Definir a largura do slider como 100% da tela
        
      };

  return (
    <div className="w-full h-full">
      <Slider {...settings} className="w-full">
        <div className='w-full h-full'>
          <img src="https://imgnike-a.akamaihd.net/branding/cdp-airmax-2024/assets/img/p1-desk-v2.png" alt="Slide 1" className="w-full h-full object-cover" />
        </div>
        <div className='w-full h-full'>
          <img src="https://imgnike-a.akamaihd.net/branding/home-sbf/touts/banner-invincible-3-08-03-desk.jpg" alt="Slide 1" className="w-full h-full object-cover" />
        </div>
        <div className='w-full h-full'>
          
        </div>
        
      </Slider>
    </div>
  );
}

export default SimpleSlider;
