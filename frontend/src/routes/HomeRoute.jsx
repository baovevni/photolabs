import { React, useState} from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = () => {
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);

  const updateFavoriteStatus = (isFavorited) => {
    setIsFavPhotoExist(isFavorited);
  };

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist} />
      <PhotoList onFavoriteToggle={updateFavoriteStatus} />
    </div>
  );
};

export default HomeRoute;
