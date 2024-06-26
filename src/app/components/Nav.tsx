"use client"
import { usePathname } from 'next/navigation';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import { GiRunningShoe } from "react-icons/gi";

const Nav = () => {
  const pathname = usePathname();

  const handleClick = () => {
    window.location.href = '/pages/alert';
  };

  return (
    <nav className='z-50 flex border bg-white border-b-[#f3f3f3] justify-around items-center p-5 fixed w-full'>
      <div>
        <a href="/" className='flex items-center cursor-pointer'>
          <GiRunningShoe className='w-10 h-10 md:w-16 md:h-16 mr-2'/>
          <p className='hidden md:block'>SneakStreet</p>
        </a>
      </div>
      <div className='bg-[#f7f6f6] w-2/6'>
        <input
          type="text" 
          placeholder='Pesquisar...' 
          className='px-5 py-3 border-none bg-[#f7f6f6] outline-none rounded relative w-full'
          onClick={handleClick}
        />
      </div>
      <div className='flex'>
        <a href="/pages/alert" className='text-[97,97,97)]'>
          <FiHeart className='w-6 h-6  md:ml-8 ' />
        </a>
        <a href="/pages/alert">
          <AiOutlineShoppingCart className='w-6 h-6 ml-2 md:ml-8' />
        </a>
        <a href="/pages/alert">
          <AiOutlineUserAdd className='w-6 h-6 ml-2 md:ml-8 '/>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
