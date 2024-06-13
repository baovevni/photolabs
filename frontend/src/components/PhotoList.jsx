import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favoritePhotos, toggleFavorite }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavorite={favoritePhotos.includes(photo.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
