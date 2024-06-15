import { useReducer } from 'react';

const initialState = {
  favoritePhotos: [],
  isModalOpen: false,
  selectedPhoto: null,
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
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
    toggleFavorite,
    handleImageClick,
    setIsModalOpen: (isModalOpen) => dispatch({ type: 'SET_IS_MODAL_OPEN', isModalOpen }),
    setSelectedPhoto: (photo) => dispatch({ type: 'SET_SELECTED_PHOTO', photo }),
    isFavorite,
  };
};

export default useApplicationData;
