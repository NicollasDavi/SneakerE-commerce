import React from 'react';

interface Props {
  onSelectFilterColor: (filter: string) => void;
  onSelectFilterCompany: (filter: string) => void;
  selectedColor: string;
  selectedCompany: string;
}

export const Aside: React.FC<Props> = ({ onSelectFilterColor, onSelectFilterCompany, selectedColor, selectedCompany }) => {
  const handleColorClick = (color: string) => {
    onSelectFilterColor(color);
  };

  const handleCompanyClick = (company: string) => {
    onSelectFilterCompany(company);
  };

  const handleClearFilterColor = () => {
    onSelectFilterColor('');
  };
  
  const handleClearFilterCompany = () => {
    onSelectFilterCompany('');
  };
  
  return (
    <aside className='fixed left-0 h-screen w-2/12 p-5 hidden md:block'>
      <div>
        <h1 className="text-lg font-semibold mb-4 cursor-pointer" onClick={handleClearFilterColor}>Cores</h1>
        <section className='flex flex-wrap gap-2'>
          <button onClick={() => handleColorClick('White')} className={`bg-white text-gray-800 rounded-full w-8 h-8 border ${selectedColor === 'White' ? 'border-black' : 'border-gray-300'} hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300`}></button>
          <button onClick={() => handleColorClick('Black')} className={`bg-black text-white rounded-full w-8 h-8 border ${selectedColor === 'Black' ? 'border-black' : 'border-gray-300'} hover:bg-gray-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300`}></button>
          <button onClick={() => handleColorClick('Red')} className={`bg-red-700 text-white rounded-full w-8 h-8 border ${selectedColor === 'Red' ? 'border-black' : 'border-gray-300'} hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300`}></button>
          <button onClick={() => handleColorClick('Blue')} className={`bg-blue-700 text-white rounded-full w-8 h-8 border ${selectedColor === 'Blue' ? 'border-black' : 'border-gray-300'} hover:bg-blue-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300`}></button>
          <button onClick={() => handleColorClick('Yellow')} className={`bg-yellow-400 text-gray-800 rounded-full w-8 h-8 border ${selectedColor === 'Yellow' ? 'border-black' : 'border-gray-300'} hover:bg-yellow-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300`}></button>
          <button onClick={() => handleColorClick('Purple')} className={`bg-purple-700 text-white rounded-full w-8 h-8 border ${selectedColor === 'Purple' ? 'border-black' : 'border-gray-300'} hover:bg-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300`}></button>
          <button onClick={() => handleColorClick('Green')} className={`bg-green-700 text-white rounded-full w-8 h-8 border ${selectedColor === 'Green' ? 'border-black' : 'border-gray-300'} hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300`}></button>
        </section>

      </div>
      <div>
        <hr className="border-t-2 border-gray-300 mb-4 mt-4" />
        <h1 className="text-lg font-semibold mb-4 cursor-pointer" onClick={handleClearFilterCompany}>Marcas</h1>
        <section className='flex flex-wrap gap-2'>
          <button onClick={() => handleCompanyClick('Nike')} className={`bg-white text-gray-800 rounded-full w-auto px-4 py-2 border ${selectedCompany === 'Nike' ? 'border-black' : 'border-gray-300'} hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300`}>Nike</button>
          <button onClick={() => handleCompanyClick('Adidas')} className={`bg-white text-gray-800 rounded-full w-auto px-4 py-2 border ${selectedCompany === 'Adidas' ? 'border-black' : 'border-gray-300'} hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300`}>Adidas</button>
          <button onClick={() => handleCompanyClick('Puma')} className={`bg-white text-gray-800 rounded-full w-auto px-4 py-2 border ${selectedCompany === 'Puma' ? 'border-black' : 'border-gray-300'} hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300`}>Puma</button>
          <button onClick={() => handleCompanyClick('Vans')} className={`bg-white text-gray-800 rounded-full w-auto px-4 py-2 border ${selectedCompany === 'Vans' ? 'border-black' : 'border-gray-300'} hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300`}>Vans</button>
        </section>
      </div>
    </aside>
  );
};
