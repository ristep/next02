"use client"
import Image from 'next/image';
import React from 'react';

interface CardProps {
   image?: string;
   title: string;
   text: string;
   subtext?: string;
   subtitle?: string;
}

const CardHorizontal: React.FC<CardProps> = ({ image, title, text, subtext, subtitle }) => {
   return (
         // <div className="max-w-sm w-full lg:max-w-full lg:flex m-4 rounded-md overflow-hidden shadow-lg">
         <div className="max-w-ml rounded-md overflow-hidden shadow-l">
            {image && (
               <Image className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src={image} alt="Image" />
            )}
            <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
               <div className="mb-8">
                  {subtitle &&
                     <p className="text-sm text-gray-600 flex items-center">{subtitle}</p>
                  }
                  <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
                  <p className="text-gray-700 text-base">{text}</p>
               </div>
               <div className="flex items-center">
                     <div className="text-sm">
                        {subtext && 
                           <p className="text-gray-500">{subtext}</p>
                        }
                     </div>
               </div>
            </div>
         </div>
   );
};

export default CardHorizontal;
