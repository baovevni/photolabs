import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ setIsModalOpen, photo, toggleFavorite, favoritePhotos, isFavorite, handleFavoriteToggle }) => {

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => { setIsModalOpen(false) }}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__top-bar">
      <PhotoFavButton
        photo={photo}
        isFavorite={isFavorite}
        onFavoriteToggle={handleFavoriteToggle} />
        <img src={photo.urls.full}
          alt={`Photo by ${photo.user.username}`} className="photo-details-modal__image" />
      </div>

      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photo.user.profile}
          alt={`${photo.user.username}'s profile`}
        />
        <div className="photo-list__user-info">
          {photo.user.username}
          <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
        </div>
      </div>

      <div>
        <h3>Similar Photos</h3>
      </div>

      <div>
        <PhotoList
          photos={photo.similar_photos}
          toggleFavorite={toggleFavorite}
          favoritePhotos={favoritePhotos}
          setIsModalOpen={setIsModalOpen}
        />
      </div>

    </div>
  )
};

export default PhotoDetailsModal;
