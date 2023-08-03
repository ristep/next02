import React from 'react';
import './Button.scss';

interface ButtonEstast {
   children: React.ReactNode;
   callback: () => void;
   className?: string;
}

const ButtonEstast: React.FC<ButtonEstast> = ({ children, callback, className }) => {
   return (
      <button className={`button-estast ${className}`} onClick={callback}>
         {children}
      </button>
   );
};

export default ButtonEstast;
