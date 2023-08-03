"use client"

import React from 'react';
interface ButtonProps {
   label: string;
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
   label,
   icon,
   callback,
   active = true,
   type = 'button',
   padding = 'py-2 px-4',
   margin = 'my-2 mx-2',
   color = 'blue',
}) => {

   const rounding = 'rounded-full';
   const shadowing = "shadow-sm";
   const hovering = "hover:scale-105 hover:rotate-3 hover:shadow-lg transition-all duration-300";
   const glowing = "group-hover:opacity-100 transition duration-1000 group-hover:duration-200";
   // const glowing = "";
   const outliner = "focus:outline-none";

   const buttons: { [key: string]: string } = {
      blue: `${active?"bg-blue-500 hover:bg-blue-700":"bg-blue-100 "} text-white`,
      red: `${active?"bg-red-500 hover:bg-red-700":"bg-red-100 "} text-white`,
      green: `${active?"bg-green-500 hover:bg-green-700":"bg-green-200"} text-white`,
      yellow: `${active?"bg-yellow-300 hover:bg-yellow-600 text-white":"bg-yellow-100 text-yellow-300"} `,
      slate: `${active?"bg-slate-300 hover:bg-slate-100 text-black":"bg-slate-100 text-slate-300"}`,
      sky: `${active?"bg-sky-300 hover:bg-sky-300":"bg-sky-100 text-white"} text-indigo`,
      orange: `${active?"bg-orange-300 hover:bg-orange-500 text-indigo":"bg-orange-100 text-white"} `,
   };

   const buttonColor = buttons[color];

   const finalClass = active ?
                           `${buttonColor} ${padding} ${margin} ${rounding} ${shadowing} ${hovering} ${outliner} ${glowing}`
                           :
                           `${buttonColor} ${padding} ${margin} ${rounding} ${shadowing}`;


   return (
      <button
         key={label}
         className={finalClass}
         onClick={active ? callback : undefined}
         disabled={!active}
         type={type}
      >
      
         {icon && <span className="mr-2">{icon}</span>}
         {label}

      </button>
   );
};

export default Button;
