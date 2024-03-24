"use client"
import Card from '../../components/Card';
import productsData from '../../../db/data';
import { Aside } from '@/app/components/Aside';
import { useState } from 'react';
import Products from '@/app/components/Products';

// Defina o tipo para os dados do produto
interface Product {
  img: string;
  title: string;
  prevPrice: string;
  company: string;
  op: string;
  color: string;
}

export default function Search() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);

  // Função para filtrar os produtos por uma propriedade diferente de 'category'
  const handleSelectFilter = (filter: string) => {
    const filtered = productsData.filter(product => product.color === filter); // Filtrar por cor como exemplo
    setFilteredProducts(filtered);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-1/4">
        <Aside onSelectFilter={handleSelectFilter} />
      </div>
      <div className='w-3/5'>
        <Products filteredProducts={filteredProducts}/>
      </div>
    </main>
  );
}
