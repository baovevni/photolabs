import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = ({ photo, isFavorite, toggleFavorite, handleImageClick }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        photo={photo.id}
        isFavorite={isFavorite}
        onFavoriteToggle={() => toggleFavorite(photo.id)}
      />
      <img className="photo-list__image"
        src={photo.urls.regular}
        alt={`Photo by ${photo.user.username}`}
        onClick={() => handleImageClick(photo)}
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