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
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getUserInfo();
  }, [])

  // Add taken picture in the gallery
  async function addTakenPictureFile(pictureFile) {
    // setTakenPictureFile([...takenPictureFile, [...pictureFile]]);
    setTakenPictureFile(takenPictureFile.concat(pictureFile));
    try {
      await axios({
        method: 'post',
        url: '/api',
        data: {
          email: userInfo.email,
          image: pictureFile.toString()
        }
      })

    } catch (error) {
      console.error(error, 'when adding the picture.')
    }
    console.log(takenPictureFile)
  }

  async function getUserInfo() {
    try {
      const res = await axios.get('/profile')
      setUserInfo(res.data);
      console.log(userInfo)
    }
    catch (e) {
      console.error('Error', e);
    }
  };

  function selectedImage(picture) {
    setSelectedPicture(picture.target.src);
    setCurrentView('detailedView');
  }

  return (
    <>
      <div className="App">
        <header>
          <h1 id="app-title">🦉 Doubutsu Haikingu</h1>
          <h2 id="user-name">Hello {userInfo.given_name ? userInfo.given_name[0].toUpperCase() + userInfo.given_name.slice(1): 'Login'}</h2>
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