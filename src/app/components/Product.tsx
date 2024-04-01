import Apresentation from './Apresentation';

interface Product {
  id: number;
  img: string;
  title: string;
  prevPrice: string;
  op: string;
}

interface ProductsProps {
  filteredProducts: Product[];
}

const ApProducts: React.FC<ProductsProps> = ({ filteredProducts }) => {

  return (
      <div className="mt-24 overflow-hidden absolute">
        {filteredProducts.map((product, index) => (
          <Apresentation
            id={product.id}
            key={index}
            img={product.img}
            title={product.title}
            prevPrice={product.prevPrice}
            op={product.op}
          />
        ))}
      </div>
  );
  
};

export default ApProducts;
