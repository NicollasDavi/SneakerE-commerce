"use client"
import React, { useState } from 'react';
import { Aside } from '@/app/components/Aside';
import Products from '@/app/components/Products';
import productsData from '../../../db/data';

interface Product {
  img: string;
  title: string;
  prevPrice: string;
  company: string | string[];
  op: string;
  color: string | string[];
  id: number;
}

export default function SearchPage() {
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedCompany, setSelectedCompany] = useState<string>('');

  const handleSelectFilterColor = (color: string) => {
    setSelectedColor(color === selectedColor ? '' : color);
  };

  const handleSelectFilterCompany = (company: string) => {
    setSelectedCompany(company === selectedCompany ? '' : company);
  };

  

  const filteredProducts = productsData.filter((product) => {
    if (selectedColor && selectedCompany) {
      return (
        (Array.isArray(product.color) ? product.color.includes(selectedColor) : product.color === selectedColor) &&
        (Array.isArray(product.company) ? product.company.includes(selectedCompany) : selectedCompany === product.company)
      );
    } else if (selectedColor) {
      return Array.isArray(product.color) ? product.color.includes(selectedColor) : product.color === selectedColor;
    } else if (selectedCompany) {
      return Array.isArray(product.company) ? product.company.includes(selectedCompany) : selectedCompany === product.company;
    }
    return true;
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='md:hidden'>
          <button>

          </button>
      </div>
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
