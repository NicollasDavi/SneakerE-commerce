import React from 'react';
import Card from '../../components/Card'; // Certifique-se de ajustar o caminho conforme necessário
import products from '../../../db/data'; // Importe seus dados de produtos

export default function seacrh() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-4 gap-8">
        {products.map((product, index) => (
          <Card
            key={index}
            img={product.img}
            title={product.title}
            prevPrice={product.prevPrice}
          />
        ))}
      </div>
    </main>
  );
}
