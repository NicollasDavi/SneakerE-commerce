// pages/view/[id]/page.tsx
// use client
"use client"
import { usePathname } from 'next/navigation'; // Use usePathname para acessar o caminho atual da URL
import { useEffect, useState } from 'react';
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
  const pathname = usePathname(); // Obtenha o caminho atual da URL
  const id = parseInt(pathname.replace('/pages/view/', '')); // Remova '/pages/view/' do caminho para obter apenas o ID e converta para número
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Filtrar o produto pelo ID da URL
    const product = productsData.find(product => product.id === id);
    if (product) {
      setFilteredProducts([product]);
    } else {
      // Caso o produto não seja encontrado, setFilteredProducts para um array vazio
      setFilteredProducts([]);
    }
  }, [id]);

  return (
    <div className='w-screen'>
      <ApProducts filteredProducts={filteredProducts} />
    </div>
  );
}
