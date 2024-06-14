import { React, useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import photos from 'mocks/photos';

const HomeRoute = ({ photos, favoritePhotos, toggleFavorite, setIsModalOpen, setSelectedPhoto, handleFavoriteToggle }) => {

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={favoritePhotos.length > 0} />
      <PhotoList
        photos={photos}
        favoritePhotos={favoritePhotos}
        toggleFavorite={toggleFavorite} 
        setIsModalOpen={setIsModalOpen}
        setSelectedPhoto={setSelectedPhoto}
        handleFavoriteToggle={handleFavoriteToggle}
      />
    </div>
  );
};

export default HomeRoute;