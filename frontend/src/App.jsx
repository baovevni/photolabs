import { React, useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

const App = () => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const toggleFavorite = (photoId) => {
    if (favoritePhotos.includes(photoId)) {
      setFavoritePhotos(favoritePhotos.filter((id) => id !== photoId))
    } else {
      setFavoritePhotos([...favoritePhotos, photoId])
    }
  }

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favoritePhotos={favoritePhotos}
        toggleFavorite={toggleFavorite}
        setIsModalOpen={setIsModalOpen} 
      />
      {isModalOpen && <PhotoDetailsModal setIsModalOpen={setIsModalOpen}/>}
    </div>
  );
};

export default App;
