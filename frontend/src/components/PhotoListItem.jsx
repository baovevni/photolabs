import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = ({ photo, isFavorite, toggleFavorite, setIsModalOpen, setSelectedPhoto }) => {

  const handleFavoriteToggle = () => {
    toggleFavorite(photo.id);
  };

  const handleImageClick = () => {
    setSelectedPhoto(photo)
    setIsModalOpen(true)
  }
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        photo={photo}
        isFavorite={isFavorite}
        onFavoriteToggle={handleFavoriteToggle}
      />
      <img className="photo-list__image"
        src={photo.urls.regular}
        alt={`Photo by ${photo.user.username}`}
        onClick={handleImageClick}
      />
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
    </div>
  );
};

export default PhotoListItem;