import React from 'react';
import './Button.scss';

interface Button {
   children: React.ReactNode;
   callback: () => void;
   className?: string;
   type?: string;
   disabled?: boolean;
}

const Button: React.FC<Button> = ({ children, callback, className, type="", disabled=false }) => {
   return (
      <button className={`btn3d btn3d-${type} ${className}`} onClick={callback} disabled={disabled}>
         {children}
      </button> 
   );
};

export default Button;

