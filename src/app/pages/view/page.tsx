// pages/view/[id].tsx
"use client"
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import productsData from '../../../db/data'; // Importe o arquivo JSON

interface Product {
  id: number;
  img: string;
  title: string;
  prevPrice: string;
  company: string;
  op: string;
  color: string;
}

export default function View(){
  const pathname = usePathname();
  const id = pathname.replace('/view/', ''); 
  const [product, setProduct] = useState<Product | null>(null);
  console.log(id)
  useEffect(() => {
    // Buscar os detalhes do produto com base no ID do arquivo JSON
    const selectedProduct = productsData.find((product: Product) => product.id === parseInt(id));
    
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [id]);

  return (
    <div>
        
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <img src={product.img} alt={product.title} />
          <p>{product.prevPrice}</p>
          <p>{product.company}</p>
          <p>{product.op}</p>
          <p>{product.color}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}

    </div>
  );
};

