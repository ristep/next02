import React from 'react';
import './styles/ButtonSuperGlow.scss';

interface ButtonGlassMorphProps {
   children: React.ReactNode;
   callback: () => void;
   className?: string;
}

const ButtonSuperGlow: React.FC<ButtonGlassMorphProps> = ({ children, callback, className }) => {
   return (
      <button className={`super-glow ${className}`} onClick={callback}>
         {children}
      </button>
   );
};

export default ButtonSuperGlow;
