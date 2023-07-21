"use client"

import React from 'react';
interface ButtonProps {
   label?: string;
   children?: React.ReactNode;
   icon?: React.ReactNode;
   callback: () => void;
   key?: string;
   active?: boolean;
   padding?: string;
   margin?: string;
   type?: 'button' | 'submit' | 'reset';
   color?: string;
}

const Button: React.FC<ButtonProps> = ({
   label = "",
   icon,
   callback,
   active = true,

   type = 'button',
   padding = 'py-2 px-4',
   margin = 'my-2 mx-2',
   color = 'blue',
   children = undefined
}) => {

   const rounding = 'rounded-xl';

   const buttons: { [key: string]: string } = {
      blue: `${active?"bg-blue-700 hover:bg-blue-500 text-white from-blue-700 to-blue-500":"bg-blue-100 text-white"}`,
      red: `${active?"bg-red-700 hover:bg-red-500 text-white from-red-700 to-red-500":"bg-red-200 text-gray-100"}`,
      green: `${active?"bg-green-700 hover:bg-green-500 text-white from-green-700 to-green-500":"bg-green-100 text-green-300"}`,
      yellow: `${active?"bg-yellow-600 hover:bg-yellow-300 text-white from-yellow-600 to-yellow-300":"bg-yellow-100 text-yellow-400"}`,
      slate: `${active?"bg-slate-300 hover:bg-slate-100 text-black from-grey-300 to-grey-100":"bg-slate-100 text-slate-300"}`,
      sky: `${active?"bg-sky-300 hover:bg-sky-200 text-indigo from-sky-300 to-sky-200":"bg-sky-100 text-sky-200"}`,
      orange: `${active?"bg-orange-500 hover:bg-orange-300 text-indigo from-ornge-500 to-orange-300":"bg-orange-100 text-orange-300"}`,
   };

   const buttonClassColor = buttons[color];
   const hoverClass = active ? "group-hover:opacity-100 group-hover:duration-200":"";

   return (

      <button 
         className={`${margin} relative group`}
         onClick={active ? callback : undefined}
         disabled={!active}
         type={type}
      >
         <div className={`${buttonClassColor} ${rounding} ${padding} ${hoverClass} absolute -inset-1 bg-gradient-to-r blur opacity-25 transition duration-500`}></div>
         <div className={`${buttonClassColor} ${rounding} ${padding} relative  ring-1 ring-gray-900/5 leading-none flex items-top justify-start space-x-2`}>
            {icon && <span className="mr-2">{icon}</span>}
            {label}
            {children}
         </div>
      </button>
   );

};

export default Button;
