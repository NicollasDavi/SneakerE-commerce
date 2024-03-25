// Aside.tsx

import React from 'react';

interface Props {
  onSelectFilter: (filter: string) => void;
}

export const Aside: React.FC<Props> = ({ onSelectFilter }) => {
  return (
    <aside className='fixed left-0 h-screen w-1/6 p-5'>
      <div>
        <section>
          <h1 className=" mb-4">Filter by Color</h1>
          <button onClick={() => onSelectFilter('white')} className="bg-white text-gray-800 rounded-full px-4 py-2 mr-2 border border-bla">White</button>
          <button onClick={() => onSelectFilter('green')} className="bg-green-500 text-white rounded-full px-4 py-2">Green</button>
        </section>
      </div>
    </aside>
  );
};
