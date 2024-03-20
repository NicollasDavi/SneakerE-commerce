import { BsFillBagHeartFill } from 'react-icons/bs';

interface Props {
    img: string;
    title: string;
    prevPrice: string;
  }
  
  const Card: React.FC<Props> = ({ img, title, prevPrice }) => {
  return (
    <div className="card m-5 border-2 border-solid border-[#ededed] rounded-lg overflow-hidden h-">
      <img src={img} alt="Shoe" className="w-full h-auto object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center justify-between mb-2">
          
          <div className="">{prevPrice}</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="bag">
            <BsFillBagHeartFill className="text-[#535353]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;