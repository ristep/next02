import React from 'react';
import './styles/Button3D.scss';

interface Button {
   children: React.ReactNode;
   callback: () => void;
   className?: string;
   type?: string;
   disabled?: boolean;
}

const Button3D: React.FC<Button> = ({ children, callback, className, type="", disabled=false }) => {
   return (
      <button className={`btn3d btn3d-${type} ${className}`} onClick={callback} disabled={disabled}>
         {children}
      </button> 
   );
};

export default Button3D;

