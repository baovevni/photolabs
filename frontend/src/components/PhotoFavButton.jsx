import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton( { photo, onFavoriteToggle }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    const newIsFavorite = !isFavorite;
    setIsFavorite(newIsFavorite);
    onFavoriteToggle(newIsFavorite);
  }

  // const favorited = (isFavorite ? 'photo-list__fav-icon-svg' : 'photo-list__fav-icon');

  return (
    <div className='photo-list__fav-icon'>
        <div className='photo-list__fav-icon-svg' onClick={handleClick}>
          <FavIcon selected={isFavorite} displayAlert={false} />
        </div>
    </div>
  );
}

export default PhotoFavButton;