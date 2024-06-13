import { React, useState} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import photos from 'mocks/photos';

const HomeRoute = () => {
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);

  const updateFavoriteStatus = (isFavorited) => {
    setIsFavPhotoExist(isFavorited);
  };

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist} />
      <PhotoList photos={photos} onFavoriteToggle={updateFavoriteStatus} />
    </div>
  );
};

export default HomeRoute;
