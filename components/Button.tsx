"use client";
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
         key,
         label,
         icon,
         callback,
         isButtonActive = true,
         type = 'button',
         padding = 'py-2 px-4',
         margin = 'my-2 mx-2',
         color = 'blue',
      }) => {

   const colorndx = [ "blue", "red", "green", "yellow", "slate", "sky", "orange", ];
   const cl_ndx = colorndx.indexOf( color );
   const buttons = [
         "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none spread-5 shadow-md blur-10 spread-15 hover:shadow-2xl",
         "bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none spread-5 shadow-md blur-10 spread-15 hover:shadow-2xl",
         "bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none spread-5 shadow-md blur-10 spread-15 hover:shadow-2xl",
         "bg-yellow-300 hover:bg-yellow-600 text-white py-2 px-4 rounded focus:outline-none spread-5 shadow-md blur-10 spread-15 hover:shadow-2xl",
         "bg-slate-100 hover:bg-slate-300 text-black py-2 px-4 rounded focus:outline-none spread-5 shadow-md blur-10 spread-15 hover:shadow-2xl",
         "bg-sky-200 hover:bg-sky-300 text-indigo py-2 px-4 rounded focus:outline-none spread-5 shadow-md blur-10 spread-15 hover:shadow-2xl",
         "bg-orange-300 hover:bg-orange-500 text-indigo py-2 px-4 rounded focus:outline-none spread-5 shadow-md blur-10 spread-15 hover:shadow-2xl",
      ]

   console.log(cl_ndx);
   return (
         <button
            // className={className}
            key={key}
            className={`${buttons[cl_ndx]}  ${padding} ${margin}`}
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


      // const bgColorClass = isButtonActive
      //    ? `bg-${color}-500 hover:bg-${color}-700`
      //    : 'bg-gray-300 cursor-not-allowed';

      // const className = `text-white rounded focus:outline-none ${padding} ${margin} ${bgColorClass}`;
      // const classPink = "bg-pink-500 hover:bg-pink-700 text-white py-2 px-4 rounded focus:outline-none spread-5 shadow-md blur-10 spread-15 hover:shadow-2xl "+ padding + " " + margin;
