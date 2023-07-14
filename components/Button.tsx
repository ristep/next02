"use client"

import React from 'react';
interface ButtonProps {
   label: string;
   icon?: React.ReactNode;
   callback: () => void;
   key?: string;
   isButtonActive?: boolean;
   padding?: string;
   margin?: string;
   type?: 'button' | 'submit' | 'reset';
   color?: string;
}

const Button: React.FC<ButtonProps> = ({
   label,
   icon,
   callback,
   isButtonActive = true,
   type = 'button',
   padding = 'py-2 px-4',
   margin = 'my-2 mx-2',
   color = 'blue',
}) => {

   const rounding = 'rounded-full';
   const shadowing = "shadow-md hover:shadow-lg";
   const hovering = "hover:scale-105 hover:rotate-3 transition-all duration-300";
   const outliner = "focus:outline-none";

   const buttons: { [key: string]: string } = {
      blue: `bg-blue-500 hover:bg-blue-700 text-white`,
      red: `bg-red-500 hover:bg-red-700 text-white`,
      green: `bg-green-500 hover:bg-green-700 text-white`,
      yellow: `bg-yellow-300 hover:bg-yellow-600 text-white`,
      slate: `bg-slate-100 hover:bg-slate-300 text-black`,
      sky: `bg-sky-200 hover:bg-sky-300 text-indigo`,
      orange: `bg-orange-300 hover:bg-orange-500 text-indigo`,
   };

   const buttonClassName = buttons[color];

   return (
      <button
         key={label}
         className={`${buttonClassName} ${padding} ${margin} ${rounding} ${shadowing} ${hovering} ${outliner}`}
         onClick={isButtonActive ? callback : undefined}
         disabled={!isButtonActive}
         type={type}
      >
         {icon && <span className="mr-2">{icon}</span>}
         {label}

      </button>
   );
};

export default Button;
