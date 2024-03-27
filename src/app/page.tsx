"use client"
import React from 'react';
import SimpleSlider from './components/Slider';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" w-screen md:w-10/12 mt-5">
        <Link href={"/pages/search"}>
        <img src="https://imgnike-a.akamaihd.net/branding/cdp-airmax-2024/assets/img/p1-desk-v2.png" alt="Slide 1" className="w-full h-full object-cover" />
        </Link>
      </div>
      <div className='mt-5 md:mt-14 text-center w-screen'>
        <h1 className='text-2xl md:text-6xl font-bold'>
          NIKE AIR MAX DN
        </h1>
        <h2 className='text-2xl font-semibold mt-3 w-11/12 m-auto'>
          A proxima geração da tecnologia AIR esta chegando
        </h2>
        <section className='mt-14 mb-14 justify-between w-full'>
        <Link href={"/pages/search"} className=' bg-black text-white rounded-full p-5 '>
              Saiba Mais
             
          </Link>
          <Link href={"/pages/search"} className=' bg-black text-white rounded-full p-5 ml-10 '>
              Compre agora
             
          </Link>
        </section>
      </div>
      
      <div className="w-screen md:w-10/12 h-auto mt-5">
      <h1 className='text-xl ml-5'>
      Campeões de venda
      </h1>
        <SimpleSlider />
      </div>
      
      <div className="w-screen md:w-10/12 flex flex-col mt-10 md:mt-36 h-2/3 md:mx-auto">
      <div className="md:flex justify-between items-center h-full">
        <div className="w-full md:w-6/12">
          <Link href={"/pages/search"}>
              <video
                src="https://nikevideo.nike.com/media/v1/pmp4/static/clear/72451143001/e6c5dd4d-f49c-407d-a139-50175cfac281/c317259a-01d9-46c7-b317-312f3ca1341a/main.mp4"
                className="w-full mt-5"
                autoPlay
                muted
                loop
              ></video>
          </Link>
        </div>
        <div className="md:w-6/12 text-center  h-80">
          <div className=''>
          <p className="text-lg mt-24 w-10/12 m-auto">
          Descubra o poder da excelência em um par de tênis. Conforto, estilo e desempenho se unem para criar uma experiência única em cada passo. Adquira agora e eleve seus padrões de qualidade!
              </p>
          </div>
          <div className='mt-10'>

              <Link href={"/pages/search"} className=' bg-black text-white rounded-full p-5 '>
              Compre agora
             
          </Link>
              </div>
          
        </div>
      </div>
    </div>
    </main>
  );
}
