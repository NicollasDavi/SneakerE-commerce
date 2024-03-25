// SearchPage.tsx
"use client"
import { Aside } from '@/app/components/Aside';
import Products from '@/app/components/Products';

import productsData from '../../../db/data';
import { useState } from 'react';

interface Product {
  img: string;
  title: string;
  prevPrice: string;
  company: string;
  op: string;
  color: string;
}

export default function SearchPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);
  
  const handleSelectFilter = (filter: string) => {
    const filtered = filter === '' ? productsData : productsData.filter(product => product.color === filter);
    setFilteredProducts(filtered);
  };
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Aside onSelectFilter={handleSelectFilter} />
        <Products filteredProducts={filteredProducts}/>
    </main>
  );
}
