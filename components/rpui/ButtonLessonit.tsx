import React, { Component } from 'react';
import './styles/ButtonLessonit.scss';

interface ButtonLessonitProps {
   children: React.ReactNode;
   callback: () => void;
   className?: string;
}

class ButtonLessonit extends Component<ButtonLessonitProps> {
   render() {
      const { children, callback, className } = this.props;
      return (
         <button
            className={`button-lesson ${className}`}
            onClick={callback}
         >
            {children}
         </button>
      );
   }
}

export default ButtonLessonit;
