import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import Camera from './Camera';
import Collection from './Collection';
import DetailedView from './DetailedView';
import axios from 'axios';


export default function App() {
  const [takenPictureFile, setTakenPictureFile] = useState([]);
  const [currentView, setCurrentView] = useState('Collection');
  const [selectedPicture, setSelectedPicture] = useState('');
  const [test, setTest] = useState({});

  useEffect(() => {
    testAxios();
  }, [])

  function addTakenPictureFile(pictureFile) {
    // setTakenPictureFile([...takenPictureFile, [...pictureFile]]);
    setTakenPictureFile(takenPictureFile.concat(pictureFile));
    console.log(takenPictureFile)
  }

  async function testAxios() {
    try {
      const res = await axios.get('/api')
      setTest(res.data);
    }
    catch (e) {
      console.error('Error', e);
    }
  };
  console.log('test is', test)

  function selectedImage(picture) {
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

          <Camera addTakenPictureFile={addTakenPictureFile} selectedImage={selectedImage} />
        </div>
        <div className="collection-wrapper">
          {currentView === 'Collection' ?
            takenPictureFile.length <= 0 ? <h2 className="collection-empty">🐺 Your collection is empty! Go on a hike! 🐻</h2> :
              <Collection takenPictureFile={takenPictureFile} selectedImage={selectedImage} /> :
            <DetailedView selectedPicture={selectedPicture} setCurrentView={setCurrentView} />
          }
        </div>
      </div>
    </>
  );
}