import React, {useState, useEffect} from 'react';
import '../styles/App.css';
import Camera from './Camera';
import Collection from './Collection';


export default function App() {
  const [takenPicture, setTakenPicture] = useState([]);

  useEffect(() => {
    
  }, [takenPicture])

  function addTakenPicture(event){
    setTakenPicture(takenPicture.concat(event));
    console.log(takenPicture)
  }

  return (
    <>
      <div className="App">
        <h1 id="app-title">Doubutsu Hikingu</h1>
      </div>

      <Camera addTakenPicture={addTakenPicture}/>

      <Collection pictures={takenPicture}/>
      
    </>
  );
}