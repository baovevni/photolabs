import { React, useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import photos from 'mocks/photos';

const HomeRoute = ({ photos, favoritePhotos, toggleFavorite, setIsModalOpen, setSelectedPhoto, handleFavoriteToggle, handleImageClick, handleClick, isFavorite }) => {

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={favoritePhotos.length > 0}
        isFavorite={isFavorite} favoritePhotos={favoritePhotos}
      />
      <PhotoList
        photos={photos}
        favoritePhotos={favoritePhotos}
        toggleFavorite={toggleFavorite}
        setIsModalOpen={setIsModalOpen}
        setSelectedPhoto={setSelectedPhoto}
        handleFavoriteToggle={handleFavoriteToggle}
        handleImageClick={handleImageClick}
        handleClick={handleClick}
      />
    </div>
  );
};

export default HomeRoute;