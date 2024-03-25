// Aside.tsx

import React from 'react';

interface Props {
  onSelectFilter: (filter: string) => void;
}

export const Aside: React.FC<Props> = ({ onSelectFilter }) => {
  return (
    <aside className='fixed left-0 h-screen w-2/12 p-5'>
      <div>
        <hr className="border-t-2 border-gray-300 mb-4 mt-1" />
        <h1 className="text-lg font-semibold mb-4">Cores</h1>
        <hr className="border-t-2 border-gray-300 my-4" />
        <section className='flex flex-wrap gap-2'>
          <button onClick={() => onSelectFilter('')} className="bg-white text-gray-800 rounded-full w-8 h-8 border border-gray-300 hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300">
            <span className="sr-only">Todos</span>
          </button>
          <button onClick={() => onSelectFilter('White')} className="bg-white text-gray-800 rounded-full w-8 h-8 border border-gray-300 hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"></button>
          <button onClick={() => onSelectFilter('Black')} className="bg-black text-white rounded-full w-8 h-8 border border-gray-300 hover:bg-gray-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"></button>
          <button onClick={() => onSelectFilter('Green')} className="bg-green-500 text-white rounded-full w-8 h-8 border border-gray-300 hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"></button>
          <button onClick={() => onSelectFilter('Red')} className="bg-red-500 text-white rounded-full w-8 h-8 border border-gray-300 hover:bg-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"></button>
          <button onClick={() => onSelectFilter('Purple')} className="bg-purple-500 text-white rounded-full w-8 h-8 border border-gray-300 hover:bg-purple-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"></button>
          <button onClick={() => onSelectFilter('Yellow')} className="bg-yellow-500 text-white rounded-full w-8 h-8 border border-gray-300 hover:bg-yellow-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"></button>
          <button onClick={() => onSelectFilter('Pink')} className="bg-pink-500 text-white rounded-full w-8 h-8 border border-gray-300 hover:bg-pink-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"></button>
        </section>
      </div>
    </aside>
  );
};
