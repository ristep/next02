import React from 'react';
import './styles/ButtonGlassMorph.scss';

interface ButtonGlassMorphProps {
   children: React.ReactNode;
   callback: () => void;
   className?: string;
}

const ButtonGlassMorph: React.FC<ButtonGlassMorphProps> = ({ children, callback, className }) => {
   return (
      <body>
            <div className={`button-glass ${className}`} onClick={callback}>{children}</div>
      </body>

      // <button className={`button-glass ${className}`} onClick={callback}>
      //    {children}
      // </button>
   );
};

export default ButtonGlassMorph;
