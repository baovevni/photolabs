import { React, useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    favoritePhotos,
    isModalOpen,
    selectedPhoto,
    toggleFavorite,
    handleFavoriteToggle,
    handleImageClick,
    setIsModalOpen,
    setSelectedPhoto,
    isFavorite
  } = useApplicationData();


  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favoritePhotos={favoritePhotos}
        toggleFavorite={toggleFavorite}
        setIsModalOpen={setIsModalOpen}
        setSelectedPhoto={setSelectedPhoto}
        handleFavoriteToggle={handleFavoriteToggle}
        handleImageClick={handleImageClick}
        isFavorite={isFavorite}
      />
      {isModalOpen && <PhotoDetailsModal
        setIsModalOpen={setIsModalOpen}
        photo={selectedPhoto}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
        handleFavoriteToggle={handleFavoriteToggle}
        handleImageClick={handleImageClick}
      />}
    </div>
  );
};

export default App;
