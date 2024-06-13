import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ setIsModalOpen, photo }) => {
  console.log(photo);

  return (
    <div className="photo-details-modal">
      {photo ? console.log(photo.id) : "No photo provided"}  {/* Conditional check for photo */}
      <button className="photo-details-modal__close-button" onClick={() => {setIsModalOpen(false)}}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
