"use client"
import { usePathname } from 'next/navigation';
import {useEffect, useState } from 'react';
import SimpleSlider from '@/app/components/Slider';
import productsData from '../../../../db/data';
import ApProducts from '@/app/components/Product';

interface Product {
  id: number;
  img: string;
  title: string;
  prevPrice: string;
  company:string | string[];
  op: string;
  color: string | string[];
}

export default function View() {
  const pathname = usePathname();
  const id = parseInt(pathname.replace('/pages/view/', ''));
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const product = productsData.find(product => product.id === id);
    if (product) {
      setFilteredProducts([product]);
    } else {
      setFilteredProducts([]);
    }
  }, [id]);

  return (
      <div className='w-screen h-screen absolute overflow-x-hidden'>
        <div className='block h-screen'>
            <ApProducts filteredProducts={filteredProducts} />
        </div>
        <div className='md:block w-10/12 m-auto h-auto hidden'>
          <SimpleSlider />
        </div>
      </div>
  );
}
