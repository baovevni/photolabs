import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import topics from 'mocks/topics';

const TopNavigation = ({ isFavPhotoExist, topics, favoritePhotos, fetchPhotosByTopic }) => {
 
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist} 
      isFavorite={favoritePhotos.length > 0} 
      />
    </div>
  )
}

export default TopNavigation;