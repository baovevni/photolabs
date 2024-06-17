import { React } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    favoritePhotos,
    isModalOpen,
    selectedPhoto,
    toggleFavorite,
    handleImageClick,
    setIsModalOpen,
    setSelectedPhoto,
    isFavorite,
    photoData,
    topicsData,
    fetchPhotosByTopic
  } = useApplicationData();


  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicsData}
        favoritePhotos={favoritePhotos}
        toggleFavorite={toggleFavorite}
        setIsModalOpen={setIsModalOpen}
        setSelectedPhoto={setSelectedPhoto}
        handleImageClick={handleImageClick}
        isFavorite={isFavorite}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      {isModalOpen && <PhotoDetailsModal
        setIsModalOpen={setIsModalOpen}
        photo={selectedPhoto}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
        handleImageClick={handleImageClick}
      />}
    </div>
  );
};

export default App;
