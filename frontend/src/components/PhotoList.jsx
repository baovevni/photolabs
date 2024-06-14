import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favoritePhotos, toggleFavorite, setIsModalOpen, setSelectedPhoto, handleFavoriteToggle }) => {
  if (!Array.isArray(photos)) {
    photos = Object.values(photos);
    }
    
  return (
    <ul className="photo-list">
      { photos?.length && photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavorite={favoritePhotos?.length ? favoritePhotos.includes(photo.id) : false}
          toggleFavorite={toggleFavorite}
          setIsModalOpen={setIsModalOpen}
          setSelectedPhoto={setSelectedPhoto}
          handleFavoriteToggle={handleFavoriteToggle}
        />
      ))}
    </ul>
  );
};

export default PhotoList;