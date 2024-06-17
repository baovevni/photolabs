import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ setIsModalOpen, photo, toggleFavorite, favoritePhotos }) => {

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => { setIsModalOpen(false) }}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton
          photo={photo}
          isFavorite={favoritePhotos.includes(photo.id)}
          onFavoriteToggle={() => toggleFavorite(photo.id)}
        />

        <img className="photo-details-modal__image"
          src={photo.urls.full}
          alt={`Photo by ${photo.user.username}`} />
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={photo.user.profile}
            alt={`${photo.user.username}'s profile`}
          />
          <div className="photo-details-modal__photographer-info">
            {photo.user.username}
            <div className="photo-details-modal__photographer-location">
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
        <div className="photo-details-modal__header">
          Similiar Photos
        <div className='photo-details-modal__images'>
          <PhotoList
            photos={photo.similar_photos}
            toggleFavorite={toggleFavorite}
            favoritePhotos={favoritePhotos}
            setIsModalOpen={setIsModalOpen}
            setSelectedPhoto={() => { }}
            handleImageClick={() => { }}
          />
        </div>
        </div>
      </div>
    </div>



  )
};

export default PhotoDetailsModal;
