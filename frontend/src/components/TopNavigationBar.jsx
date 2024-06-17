import React from 'react';
const PORT = process.env.PORT;

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ isFavPhotoExist, topics, favoritePhotos, fetchPhotosByTopic }) => {
 
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" href={`http://localhost:${PORT}`}>PhotoLabs</span>
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist} 
      isFavorite={favoritePhotos.length > 0} 
      />
    </div>
  )
}

export default TopNavigation;