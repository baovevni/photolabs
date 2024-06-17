import { React, useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = ({ photos, topics, favoritePhotos, toggleFavorite, setIsModalOpen, setSelectedPhoto, handleImageClick, isFavorite, fetchPhotosByTopic}) => {

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={favoritePhotos.length > 0}
        isFavorite={isFavorite} 
        topics={topics}
        favoritePhotos={favoritePhotos}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      <PhotoList
        photos={photos}
        favoritePhotos={favoritePhotos}
        toggleFavorite={toggleFavorite}
        setIsModalOpen={setIsModalOpen}
        setSelectedPhoto={setSelectedPhoto}
        handleImageClick={handleImageClick}
      />
    </div>
  );
};

export default HomeRoute;