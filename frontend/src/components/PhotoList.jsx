import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favoritePhotos, toggleFavorite, setIsModalOpen, setSelectedPhoto }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavorite={favoritePhotos.includes(photo.id)}
          toggleFavorite={toggleFavorite}
          setIsModalOpen={setIsModalOpen}
          setSelectedPhoto={setSelectedPhoto}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
