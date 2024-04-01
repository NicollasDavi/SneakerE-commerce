import React from 'react';
import Card from './Card';
import { usePathname } from 'next/navigation';

interface Product {
  id: number;
  img: string;
  title: string;
  prevPrice: string;
}

interface ProductsProps {
  filteredProducts?: Product[];
}

const Products: React.FC<ProductsProps> = ({ filteredProducts }) => {
  const pathname = usePathname();

  const handleShowProduct = (id: number) => {
    window.location.href = `/pages/view/${id}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 absolute right-5 gap-8 mt-20 w-11/12 md:w-3/4">
      {filteredProducts && filteredProducts.map((product, index) => (
        <Card
          key={index}
          img={product.img}
          title={product.title}
          prevPrice={product.prevPrice}
          onClick={() => handleShowProduct(product.id)}
        />
      ))}
    </div>
  );
};

export default Products;
