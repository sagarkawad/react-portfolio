import React from 'react';

interface PopUpProps {
    title: string,
    setPopUp: (value: boolean) => void,
    popUp: boolean,
}

const PopUp: React.FC<PopUpProps> = ({title, setPopUp, popUp}) => {
 

  const handleClose = () => {
    setPopUp(false);
  };

  if (!popUp) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg text-center shadow-lg w-80">
        <h2 className="mb-4 text-lg text-gray-800 font-semibold">
         {title}
        </h2>
        <button
          onClick={handleClose}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopUp;
