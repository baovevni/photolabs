import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton( { photo, isFavorite, onFavoriteToggle }) {

  const handleClick = () => {
    onFavoriteToggle();
  }

  return (
    <div className='photo-list__fav-icon'>
        <div className='photo-list__fav-icon-svg' onClick={handleClick}>
          <FavIcon photo={photo.id} selected={isFavorite} displayAlert={false} 
          />
        </div>
    </div>
  );
}

export default PhotoFavButton;