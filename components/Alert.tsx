import React from 'react';
import Button from './Button';

interface Button {
   label: string;
   onClick: () => void;
   // accessKey?: string;
   color?: string;
}

interface AlertProps {
   visible: boolean;
   title: string;
   mainText: string;
   buttons: Button[];
}

const Alert:  React.FunctionComponent<AlertProps> = ({ title, mainText, buttons, visible }) => {

   if (!visible) {
      return null; // Return null if visible is false
   }

   return( 
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50" >
         <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-800 mb-4">{mainText}</p>
            <div className="flex space-x-4">

               {buttons.map((button) => (
                  <Button
                     callback={button.onClick}
                     label={button.label}
                     color={button.color}
                  />
               ))}

            </div>
         </div>
      </div>
   );
};

export default Alert;

