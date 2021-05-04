import React, {useState, useEffect} from 'react';
import '../styles/App.css';
import Camera from './Camera';
import Collection from './Collection';
import DetailedView from './DetailedView';


export default function App() {
  const [takenPictureFile, setTakenPictureFile] = useState([]);
  const [currentView, setCurrentView] = useState('Collection');

  function addTakenPictureFile(pictureFile){
    // setTakenPictureFile([...takenPictureFile, [...pictureFile]]);
    setTakenPictureFile(takenPictureFile.concat(pictureFile));
    console.log(takenPictureFile)
  }

  function selectedImage() {
    setCurrentView('detailedView');
  }

  return (
    <>
      <div className="App">
        <h1 id="app-title">Doubutsu Hikingu</h1>
      </div>

      <Camera addTakenPictureFile={addTakenPictureFile} selectedImage={selectedImage}/>

      {currentView === 'Collection' ? 
      <Collection takenPictureFile={takenPictureFile}/> :
      <detailedView />
      }
      
      
    </>
  );
}