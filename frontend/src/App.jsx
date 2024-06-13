import { React, useState} from 'react';

import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import TopNavigationBar from './components/TopNavigationBar';

import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);

  const handleFavoriteToggle = (isFavorited) => {
    setIsFavPhotoExist(isFavorited);
  };

  return (
    <div className="App">
       <TopNavigationBar isFavPhotoExist={isFavPhotoExist} />
       <PhotoList onFavoriteToggle={handleFavoriteToggle} />
    </div>
  );
};

export default App;
