import React from 'react';

interface Props {
  onSelectFilter: (filter: string) => void; // Função para selecionar o filtro
}

export const Aside: React.FC<Props> = ({ onSelectFilter }) => {
  return (
    <aside className='fixed left-0 h-screen w-1/4 bg-gray-400'>
      <div>
        <section>
          <h1>Title</h1>
          <button onClick={() => onSelectFilter('white')}>White</button>
          <button onClick={() => onSelectFilter('green')}>Green</button>
        </section>
      </div>
    </aside>
  );
};
