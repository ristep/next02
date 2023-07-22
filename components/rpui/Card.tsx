import React, { FC } from "react";
import ImageWithOverlay from "./ImageWithOverlay";

interface CardProps {
   title: string;
   image: string;
   text?: string;
   subtext?: string;
   subtitle?: string;
}

const Card: FC<CardProps> = ({ title, image, text, subtext="", subtitle="" }) => {
   return (
      <div className="raise-on-hover rounded-md">
         <ImageWithOverlay
            clss="rounded-t"
            src={"/"+image}
            alt={title}
            text={subtitle}
            x={"3%"}
            y={"2%"}
         />
         <div className="card-content px-6 py-4">
            <h2>{title}</h2>
            <p>{text}</p>
         </div>

         {subtext && <p className="text-sky-300 text-1x2 px-6 py-1">{subtext}</p>}

      </div>
   );
};

export default Card;
