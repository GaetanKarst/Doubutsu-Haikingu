import React, { useState } from 'react';
import '../styles/App.css';
import Camera from './Camera';
import Collection from './Collection';
import DetailedView from './DetailedView';


export default function App() {
  const [takenPictureFile, setTakenPictureFile] = useState([]);
  const [currentView, setCurrentView] = useState('Collection');
  const [selectedPicture, setSelectedPicture] = useState('')

  function addTakenPictureFile(pictureFile) {
    // setTakenPictureFile([...takenPictureFile, [...pictureFile]]);
    setTakenPictureFile(takenPictureFile.concat(pictureFile));
    console.log(takenPictureFile)
  }

  function selectedImage(picture) {
    console.log(picture.target);
    setSelectedPicture(picture.target.src);
    setCurrentView('detailedView');
  }

  return (
    <>
      <div className="App">
        <header>
          <h1 id="app-title">Doubutsu Haikingu</h1>
        </header>
          <div className="camera">

            <Camera addTakenPictureFile={addTakenPictureFile} selectedImage={selectedImage} />
          </div>
          <div className="collection-wrapper">
          {currentView === 'Collection' ?
            <Collection takenPictureFile={takenPictureFile} selectedImage={selectedImage} /> :
            <DetailedView selectedPicture={selectedPicture} setCurrentView={setCurrentView} />
          }
          </div>
        </div>
    </>
  );
}