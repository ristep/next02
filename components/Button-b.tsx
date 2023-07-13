"use client"
import React, { useState } from "react";

interface ButtonProps {
   color: string;
   label: string;
   icon?: string;
   callback: () => void;
}

const Button = ({ color, label, icon, callback }: ButtonProps) => {
   const [isButtonActive, setIsButtonActive] = useState(false);

   return (
      <button
         color={color}
         type="button"
         onClick={() => {
            setIsButtonActive(!isButtonActive);
            callback();
         }}
         className={`
            px-3
            py-2
            rounded-md
            text-white
            text-sm
            font-medium
            ${isButtonActive ? "bg-blue-500" : "bg-gray-400"}
         `}
      >
         {/* {icon && <Icon name={icon} />} */}
         {label}
      </button>
   );
};

export default Button;

// use example
// const ButtonExample = () => {
//    const handleClick = () => {
//       console.log("Button clicked");
//    };

//    return (
//       <Button
//             color="blue" label="Click me!" icon="plus" callback={handleClick} 
//         />
//    );
// };

