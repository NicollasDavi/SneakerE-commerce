import React, { Fragment, useState } from 'react';
import Modal from './Modal';
import SimpleSlider from './Slider';

interface Props {
  img: string;
  title: string;
  prevPrice: string;
  op: string;
  id: number;
}

const Apresentation: React.FC<Props> = ({ img, title, prevPrice, op, id }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <Fragment>
      <div className="md:w-10/12 p-8 bg-white items-center justify-center mx-auto">
        <div className="bg-white md:flex items-center justify-center">
          <div className="w-full md:w-1/2 mr-8">
            <img src={img} alt="Shoe" className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="w-full mt-5 md:mt-0 md:w-1/2 text-left">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <p className="text-gray-500 mb-6">{prevPrice}</p>
            <div className="flex space-x-4">
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors" onClick={handleOpenModal}>
                Comprar agora
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-md border border-black hover:bg-gray-100 transition-colors" onClick={handleOpenModal}>
                Adicionar ao carrinho
              </button>
            </div>
              <p className='mt-8'>{op}</p>
          </div>
          <div>
          </div>
        </div>
      
      </div>
      <Modal isVisible={() => modalVisible} onClose={handleCloseModal}/>
    </Fragment>
  );
};

export default Apresentation;
