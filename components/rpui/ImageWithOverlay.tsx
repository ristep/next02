import React from 'react';
import Image from 'next/image';

interface ImageWithOverlayProps {
   src: string;
   alt: string;
   text: string;
   x?: string | number;
   y?: string | number;
   textShadow?: string;
   clss?: string;
}

const ImageWithOverlay: React.FC<ImageWithOverlayProps> = ({
      src,
      alt,
      text,
      x = '50%', // Default to 50% if x prop is not provided
      y = '50%', // Default to 50% if y prop is not provided
      textShadow = "0px 2px 6px maroon", // Default shadow color
      clss = ''
   }) => {

   const overlayStyle: React.CSSProperties = {
      left: typeof x === 'number' ? `${x}px` : x,
      top: typeof y === 'number' ? `${y}px` : y,
      // transform: 'translate(-50%, -50%)',
      textShadow
   };

   return (
      <div className={"relative " + clss}>
         <Image 
            className={"w-full h-auto " + clss}
            src={src}
            alt={alt}
            width={500}
            height={500}
         />
         <div className="  absolute flex items-center justify-center text-orange-800 text-m-4"
            style={overlayStyle}
         >
            {text}
         </div>
      </div>
   );
};

export default ImageWithOverlay;
