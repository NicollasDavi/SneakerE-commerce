import React from 'react';
import Card from './Card'; // Certifique-se de importar corretamente o componente Card

interface Product {
  img: string;
  title: string;
  prevPrice: string;
}

interface ProductsProps {
  filteredProducts: Product[]; // Defina a propriedade filteredProducts como um array de produtos
}

const Products: React.FC<ProductsProps> = ({ filteredProducts }) => {
  return (
    <div className="grid grid-cols-4 gap-8 mt-20">
      {filteredProducts.map((product, index) => (
        <Card
          key={index}
          img={product.img}
          title={product.title}
          prevPrice={product.prevPrice}
        />
      ))}
    </div>
  );
};

export default Products;
