// CarrinhoPage.tsx

import React from 'react';
import { getCarrinhoFromLocalStorage } from '@/app/server';

const CarrinhoPage: React.FC = () => {
  // Obter o carrinho do LocalStorage
  const carrinho = getCarrinhoFromLocalStorage();

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <ul>
        {carrinho.map((produto, index) => (
          <li key={index}>
            <img src={produto.img} alt={produto.title} />
            <p>{produto.title}</p>
            <p>Preço: {produto.prevPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarrinhoPage;
