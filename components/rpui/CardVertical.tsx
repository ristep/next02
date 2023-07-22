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

const CardVertical: React.FC<CardProps> = ({ image, title, text, subtext, subtitle }) => {

   return (

      <div className="max-w-sm raise-on-hover rounded-lg">

         {image &&
            <Image 
               className="w-full rounded-t-lg" 
               src={"/"+image} 
               alt="sliko"
               width={500} 
               height={500}
            />
         }

         <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <div className="px-6 pt-4 pb-2">
               {subtext && <p className="text-gray-500">{subtitle}</p>}
            </div>
            <p className="text-gray-700 text-base">
               {text}
            </p>
         </div>

         <div className="px-6 pt-4 pb-2">
            {subtext && <p className="text-gray-500">{subtext}</p>}
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
         </div>

      </div>
   );
};

export default CardVertical;
