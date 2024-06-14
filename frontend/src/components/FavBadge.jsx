import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, isFavorite }) => {

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={isFavPhotoExist} selected={isFavorite}/>
    </div>
  ) 
};

export default FavBadge;