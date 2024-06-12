import React from 'react';

import PhotoList from './components/PhotoList';
import './App.scss';

// const sampleDataForPhotoListItem = [{
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// },
// {
//   id: "2",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// },
// {
//   id: "3",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// }
// ]


// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = sampleDataForPhotoListItem.map((photo) => {
  //   return <PhotoListItem key={photo.id} photo={photo} />;
  // });
  
  return (
    <div className="App">
      {/* {photos} */}
      <PhotoList />
    </div>
  );
};

export default App;
