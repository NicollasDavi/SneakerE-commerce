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
        <h1 className="text-lg font-semibold mb-4 cursor-pointer" onClick={() => onSelectFilter('')}>Cores</h1>
        <hr className="border-t-2 border-gray-300 my-4" />
        <section className='flex flex-wrap gap-2'>
          <button onClick={() => onSelectFilter('White')} className="bg-white text-gray-800 rounded-full w-8 h-8 border border-gray-300 hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"></button>
          <button onClick={() => onSelectFilter('Black')} className="bg-black text-white rounded-full w-8 h-8 border border-gray-300 hover:bg-gray-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"></button>
          <button onClick={() => onSelectFilter('Green')} className="bg-green-700 text-white rounded-full w-8 h-8 border border-gray-300 hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"></button>
          <button onClick={() => onSelectFilter('Red')} className="bg-red-700 text-white rounded-full w-8 h-8 border border-gray-300 hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"></button>
          <button onClick={() => onSelectFilter('Purple')} className="bg-purple-700 text-white rounded-full w-8 h-8 border border-gray-300 hover:bg-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"></button>
          <button onClick={() => onSelectFilter('Pink')} className="bg-pink-700 text-white rounded-full w-8 h-8 border border-gray-300 hover:bg-pink-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"></button>
          <button onClick={() => onSelectFilter('Blue')} className="bg-blue-700 text-white rounded-full w-8 h-8 border border-gray-300 hover:bg-blue-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"></button>
        </section>
      </div>
    </aside>
  );
};
