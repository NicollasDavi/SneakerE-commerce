"use client"
import React, { useState } from 'react';
import { Aside } from '@/app/components/Aside';
import Products from '@/app/components/Products';
import productsData from '../../../db/data';

interface Product {
  img: string;
  title: string;
  prevPrice: string;
  company: string;
  op: string;
  color: string;
  id: number;
}

export default function SearchPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedCompany, setSelectedCompany] = useState<string>('');

  const handleSelectFilterColor = (filter: string) => {
    const filtered = filter === selectedColor ? productsData : productsData.filter(product => product.color === filter);
    setFilteredProducts(selectedCompany ? filtered.filter(product => product.company === selectedCompany) : filtered);
    setSelectedColor(filter);
  };

  const handleSelectFilterCompany = (filter: string) => {
    const filtered = filter === selectedCompany ? productsData : productsData.filter(product => product.company === filter);
    setFilteredProducts(selectedColor ? filtered.filter(product => product.color === selectedColor) : filtered);
    setSelectedCompany(filter);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Aside 
        onSelectFilterColor={handleSelectFilterColor} 
        onSelectFilterCompany={handleSelectFilterCompany}
        selectedColor={selectedColor}
        selectedCompany={selectedCompany}
      />
      <Products filteredProducts={filteredProducts}/>
    </main>
  );
}
