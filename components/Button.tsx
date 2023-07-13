import React from 'react';

interface ButtonProps {
   label: string;
   icon?: React.ReactNode;
   callback: () => void;
   isButtonActive?: boolean;
   padding?: string;
   margin?: string;
   type?: 'button' | 'submit' | 'reset';
   color?: string;
}

const Button: React.FC<ButtonProps> = ({  
         label,
         icon,
         callback,
         isButtonActive = true,
         type = 'button',
         padding = 'py-2 px-4',
         margin = 'my-2 mx-2',
         color = 'blue',
      }) => {
      
      const bgColorClass = isButtonActive
         ? `bg-${color}-500 hover:bg-${color}-700`
         : 'bg-gray-300 cursor-not-allowed';

         return (
            <button
               className={`${bgColorClass} text-white rounded focus:outline-none ${padding} ${margin}`}
               onClick={isButtonActive ? callback : undefined}
               disabled={!isButtonActive}
               type={type}
            >
            {icon && <span className="mr-2">{icon}</span>}
               {label}
            </button> );
};

export default Button;
