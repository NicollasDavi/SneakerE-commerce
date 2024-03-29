import React from 'react';

interface Props {
  isVisible: () => boolean;
  onClose: () => void; // Adicionando propriedade para fechar o modal
}

const Modal: React.FC<Props> = ({ isVisible, onClose }) => {
  if (!isVisible()) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-4/5  md:w-[600px] flex flex-col'>
        <button className='text-white text-xl place-self-end' onClick={onClose}>X</button>
        <div className='bg-white p-2 rounded'>
            <div className='p-8'>
                <h1 className='text-xl'>
                    Opps... Esse Produto não existe!
                </h1>
                <p className='mt-10'>
                    Esse site foi criado apenas para demostração, os items aqui anunciados não estão para venda no mesmo
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
