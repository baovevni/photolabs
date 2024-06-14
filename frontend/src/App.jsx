import { React, useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

const App = () => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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
        setSelectedPhoto={setSelectedPhoto}
      />
      {isModalOpen && <PhotoDetailsModal 
                        setIsModalOpen={setIsModalOpen} 
                        photo={selectedPhoto}
                        toggleFavorite={toggleFavorite}
                        favoritePhotos={favoritePhotos}
                      />}
    </div>
  );
};

export default App;
