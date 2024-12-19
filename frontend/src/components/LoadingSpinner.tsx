import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center absolute left-[2%] top-[4%] transform [-translate-y-1/2]">
  
      <div className="border-t-4 border-blue-500 border-solid rounded-full w-6 h-6 animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
