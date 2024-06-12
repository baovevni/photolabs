import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';




const PhotoListItem = ({ photo }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton photo={photo}/>
      <img className="photo-list__image" src={photo.imageSource} alt={`Photo by ${photo.username}`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.profile} alt={`${photo.username}'s profile`} />
        <div className="photo-list__user-info">
          {photo.username}
          <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
