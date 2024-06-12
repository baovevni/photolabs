import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  const { photo } = props;
  return (
    <>
  <img src={photo.imageSource} alt={`Photo by ${photo.username}`}/>
  <img src={photo.profile} alt={`${photo.username}'s profile`}/>
  <p>{photo.username}</p>
  <p>{photo.location.city}, {photo.location.country}</p>
  </>
  );
};

export default PhotoListItem;
