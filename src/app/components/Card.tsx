import React from 'react';
import { BsFillBagHeartFill } from 'react-icons/bs';

interface Props {
  img: string;
  title: string;
  prevPrice: string;
  onClick?: () => void;
}

const Card: React.FC<Props> = ({ img, title, prevPrice, onClick }) => {
  return (
    <div className="card m-5 cursor-pointer border-2 border-solid border-[#ededed] rounded-lg overflow-hidden shadow-md" onClick={onClick}>
      <img src={img} alt="Shoe" className="w-full h-auto object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center justify-between">
          <div className="text-gray-700">{prevPrice}</div>
          <div className="bag">
            <BsFillBagHeartFill className="text-[#535353]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
