import { useReducer, useEffect } from 'react';

const initialState = {
  favoritePhotos: [],
  isModalOpen: false,
  selectedPhoto: null,
  photoData: [],
  topicData: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        favoritePhotos: state.favoritePhotos.includes(action.photoId)
          ? state.favoritePhotos.filter((id) => id !== action.photoId)
          : [...state.favoritePhotos, action.photoId],
      };
    case 'SET_IS_MODAL_OPEN':
      return {
        ...state,
        isModalOpen: action.isModalOpen,
      };
    case 'SET_SELECTED_PHOTO':
      return {
        ...state,
        selectedPhoto: action.photo,
      };
    case 'SET_PHOTO_DATA':
      return {
        ...state,
        photoData: action.payload,
      };
    case 'SET_TOPICS_DATA':
      return {
        ...state,
        topicsData: action.payload,
      };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_PHOTO_DATA', payload: data }));
  }, []);

  useEffect(() => {
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_TOPICS_DATA', payload: data }));
  }, []);

  const toggleFavorite = (photoId) => {
    dispatch({ type: 'TOGGLE_FAVORITE', photoId });
  };

  const handleImageClick = (photo) => {
    dispatch({ type: 'SET_SELECTED_PHOTO', photo });
    dispatch({ type: 'SET_IS_MODAL_OPEN', isModalOpen: true });
  };

  const isFavorite = (photo) => {
    return state.favoritePhotos.includes(photo.id);
  };

  return {
    favoritePhotos: state.favoritePhotos,
    isModalOpen: state.isModalOpen,
    selectedPhoto: state.selectedPhoto,
    photoData: state.photoData, 
    topicsData: state.topicsData, 
    toggleFavorite,
    handleImageClick,
    setIsModalOpen: (isModalOpen) => dispatch({ type: 'SET_IS_MODAL_OPEN', isModalOpen }),
    setSelectedPhoto: (photo) => dispatch({ type: 'SET_SELECTED_PHOTO', photo }),
    isFavorite,
  };
};

export default useApplicationData;
