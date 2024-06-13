import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favoritePhotos, toggleFavorite, setIsModalOpen }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavorite={favoritePhotos.includes(photo.id)}
          toggleFavorite={toggleFavorite}
          setIsModalOpen={setIsModalOpen}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
