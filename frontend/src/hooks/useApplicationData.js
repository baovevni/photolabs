import { useState } from 'react';

const useFavorite = () => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavorite = (photoId) => {
    if (favoritePhotos.includes(photoId)) {
      setFavoritePhotos(favoritePhotos.filter((id) => id !== photoId));
    } else {
      setFavoritePhotos([...favoritePhotos, photoId]);
    }
  };

  const handleFavoriteToggle = (photoId) => {
    toggleFavorite(photoId);
  };

  const handleImageClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const isFavorite = (photo) => {
    return (
      favoritePhotos?.length !== 0 ? favoritePhotos.includes(`${photo.id}`) : false)
  }

  return {
    favoritePhotos,
    isModalOpen,
    selectedPhoto,
    toggleFavorite,
    handleFavoriteToggle,
    handleImageClick,
    setIsModalOpen,
    setSelectedPhoto,
    isFavorite
  };
};

export default useFavorite;