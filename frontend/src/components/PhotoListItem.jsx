import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  const { photo } = props;
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={photo.imageSource} alt={`Photo by ${photo.username}`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.profile} alt={`${photo.username}'s profile`} />
        <div className="photo-list__user-info">
          <p>{photo.username}</p>
          <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
