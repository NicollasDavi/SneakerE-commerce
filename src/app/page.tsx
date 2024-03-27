"use client"
import React from 'react';
import SimpleSlider from './components/Slider';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className='w-10/12 flex mt-5m-auto '>
        <div className="w-6/12">
        <video src="https://nikevideo.nike.com/media/v1/pmp4/static/clear/72451143001/e6c5dd4d-f49c-407d-a139-50175cfac281/c317259a-01d9-46c7-b317-312f3ca1341a/main.mp4" className="w-full mt-5" autoPlay muted loop></video>
        </div>
        <div className="w-6/12 text-center">
          <h1 className='text-4xl mt-52'>Compre agora</h1>
        </div>
      </div>
      
      <div className="w-10/12 mt-5">
          <SimpleSlider />
      </div>
      
    </main>
  );
}
