import React, { ChangeEvent, useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import { GiRunningShoe } from "react-icons/gi";



const Nav = () => {
  return (
    <nav className='flex border bg-white border-b-[#f3f3f3] justify-around items-center p-5 scroll-ml-8 fixed w-full'>
      <div>
        <a href="/" className='cursor-pointer'>
          <GiRunningShoe className='w-10 h-10 md:w-16 md:h-16'/>hehe boy
        </a>
      </div>
      <div className='bg-[#f7f6f6] w-2/6'>
        <input
        type="text" 
        placeholder='Enter your seacrh shoes.' 
        className='px-5 py-3 border-none bg-[#f7f6f6] outline-none md:mr-5 rounded relative w-36 md:w-80'
        // onChange={handleInputChange}
        // value={query}
        />
      </div>
      <div className='flex'>
        <a href="#" className='text-[97,97,97)]'>
          <FiHeart className='w-6 h-6  md:ml-8 ' />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className='w-6 h-6 ml-2 md:ml-8' />
        </a>
        <a href="#">
          <AiOutlineUserAdd className='w-6 h-6 ml-2 md:ml-8 '/>
        </a>
      </div>
    </nav>
  )
}

export default Nav
