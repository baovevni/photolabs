import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ setIsModalOpen, photo, toggleFavorite, favoritePhotos, handleFavoriteToggle }) => {

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => { setIsModalOpen(false) }}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton
          photo={photo}
          isFavorite={favoritePhotos.length > 0}
          onFavoriteToggle={() => handleFavoriteToggle(photo.id)}
        />

        <img className="photo-details-modal__image"
          src={photo.urls.full}
          alt={`Photo by ${photo.user.username}`} />
        <div className="photo-details-modal_header">
          <div className="photo-details-modal__photographer-details">
            <img
              className="photo-details-modal__photographer-profile"
              src={photo.user.profile}
              alt={`${photo.user.username}'s profile`}
            />
            <div className="photo-details-modal__photographer-info">
              {photo.user.username}
              <div className="photo-details-modal__photographer-location">{photo.location.city}, {photo.location.country}
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>Similar Photos</h3>


      <div className='photo-details-modal__images'>
        <div>
          <PhotoList
            photos={photo.similar_photos}
            toggleFavorite={toggleFavorite}
            favoritePhotos={favoritePhotos}
            setIsModalOpen={setIsModalOpen}
            setSelectedPhoto={() => { }}
            handleFavoriteToggle={handleFavoriteToggle}
            handleImageClick={() => { }}
          />
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
