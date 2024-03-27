"use client"
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card'; // Importe o componente Card aqui
import productsData from '../../db/data';
import { usePathname } from 'next/navigation';

const SimpleSlider = () => {
    const [slidesToShow, setSlidesToShow] = useState(4);
    const [showDots, setShowDots] = useState(true);
    const [showWord, setShowWords] = useState(2);


    const pathname = usePathname();

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                setSlidesToShow(2);
                setShowDots(false);
                setShowWords(1);
            }else if(screenWidth < 1250){
                setSlidesToShow(3);
                setShowDots(false);
                setShowWords(1);
            }else if (screenWidth > 1250){
                setSlidesToShow(4);
                setShowDots(true);
                setShowWords(2);
            }
        };

        // Adicione um event listener para redimensionamento da janela
        window.addEventListener('resize', handleResize);

        // Chame a função de redimensionamento uma vez para configurar o valor inicial
        handleResize();

        // Remova o event listener ao desmontar o componente para evitar vazamentos de memória
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow, // Use a variável slidesToShow
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: showDots,
        adaptiveHeight: true,
        cssEase: 'linear'
    };

    const handleShowProduct = (id: number) => {
      window.location.href = `/pages/view/${id}`;
    };

    function truncateTitle(title: string): string {
      const words = title.split(' ');
      if (words.length > 3) {
          return words.slice(0, showWord).join(' ') + '...';
      }
      return title;
  }
  

    return (
        <div className="w-full">
            <Slider {...settings} className="w-full">
                {productsData.map((product, index) => (
                    <Card
                        key={index}
                        img={product.img}
                        title={truncateTitle(product.title)} // Passando apenas as três primeiras palavras do título
                        prevPrice={product.prevPrice}
                        onClick={() => handleShowProduct(product.id)}
                    />
                ))}
            </Slider>
        </div>
    );
}

export default SimpleSlider;

// Função para truncar o título e exibir apenas as três primeiras palavras
