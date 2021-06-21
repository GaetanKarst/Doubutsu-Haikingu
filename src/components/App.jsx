import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Camera from './Camera';
import Collection from './Collection';
import DetailedView from './DetailedView';


export default function App() {
  const [takenPictureFile, setTakenPictureFile] = useState([]);
  const [currentView, setCurrentView] = useState('Collection');
  const [selectedPicture, setSelectedPicture] = useState('');
  const [base64s, setBase64s] = useState([]);


  // Add taken picture to collection
  function addTakenPictureFile(pictureFile) {
    console.log(pictureFile)
    setTakenPictureFile(takenPictureFile.concat(pictureFile));
  }

  // Change the view when an image is clicked
  function handleClickedOnImage(picture) {
    setSelectedPicture(picture.target.src);
    setCurrentView('detailedView');
  }

  return (
    <>
      <div className="App">
        <header>
          <h1 id="app-title">🦉 Doubutsu Haikingu</h1>
        </header>
        <div className="camera">

          <Camera addTakenPictureFile={addTakenPictureFile} />
        </div>
        <div className="collection-wrapper">
          {currentView === 'Collection' ?
            takenPictureFile.length <= 0 ? <h2 className="collection-empty">🐺 Your collection is empty! Go on a hike! 🐻 </h2> :
              <Collection takenPictureFile={takenPictureFile} selectedImage={handleClickedOnImage} base64s={base64s} setBase64s={setBase64s} /> :
            <DetailedView selectedPicture={selectedPicture} setCurrentView={setCurrentView} base64s={base64s} setBase64s={setBase64s} takenPictureFile={takenPictureFile} setTakenPictureFile={setTakenPictureFile} />
          }
        </div>
      </div>
    </>
  );
}