import React, { ReactNode } from 'react';

interface PanelProps {
   children: ReactNode;
}

export default ({ children }: PanelProps) => {
   const content = children ? children : 'No content';
   return (
      <div className="bg-gray-100 p-6 rounded-lg shadow-md max-max-w-2xl">
         {children}
      </div>
   );
};
