import React, { ChangeEvent } from 'react'

interface InputProps{
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  title: string;
  name: string;
  color: undefined
}


const Input: React.FC<InputProps> = ({ handleChange, value, title, name, color }) => {

  

  return (
        <label
            htmlFor={value}
            className="sidebar-label-container block relative pl-6 md:pl-9 mb-3 cursor-pointer md:text-lg text-sm"
          >
            <input
              type="radio"
              name={name}
              className="absolute cursor-pointer opacity-0"
              id={value}
              onChange={handleChange}
              value={value}
            />
              <span className="checkmark absolute top-0 left-0 w-3 h-3 md:h-5 md:w-5 bg-[#ccc] rounded-3xl"></span>
            {title}
        </label>
  )
}

export default Input
