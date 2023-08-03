import React from 'react';
import Button from './ButtonNeon/Button';
interface Buttons {
   label: string;
   onClick: () => void;
   color?: string;
}

interface AlertProps {
   visible: boolean;
   title: string;
   mainText: string;
   buttons: Buttons[];
}

const Alert: React.FunctionComponent<AlertProps> = ({ title, mainText, buttons, visible }) => {
   if (!visible) {
      return null; // Return null if visible is false
   }

   return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
         {/* Background overlay */}
         <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
            onClick={() => {
               // You can add an event handler here to handle background click if needed
            }}
         />

         {/* Alert Box */}
         <div className="bg-gray-100 p-4 rounded-lg shadow-md animate-fade-in">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-800 mb-4">{mainText}</p>
            <div className="flex space-x-4">
               {buttons.map((button) => (
                  <Button key={button.label} callback={button.onClick} label={button.label} color={button.color} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Alert;
