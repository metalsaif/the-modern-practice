import React from 'react';

const GradientDivider = () => {
  return (
    <div 
      // This div creates the seamless gradient transition
      className="z-30 absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brand-background to-transparent"
    />
  );
};

export default GradientDivider;