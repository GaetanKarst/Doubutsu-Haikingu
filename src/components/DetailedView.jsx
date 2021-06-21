import React, { useState } from 'react';
import PhotoDetails from './PhotoDetails';

export default function DetailedView({ selectedPicture, setCurrentView, base64s, setBase64s, takenPictureFile, setTakenPictureFile }) {
    const [details, setPhotoDetails] = useState({});

    function displayPicture() {
        return (
            <img
                className="selected-picture"
                id={selectedPicture}
                src={selectedPicture}
                alt="selected picture" />
        )
    }

    function backToCollection() {
        setCurrentView('Collection');
    }

    // Removes both the picture file and the base64 string
    function handleDeletePicture() {
        const pictureToDelete = document.getElementById(selectedPicture);
        base64s.splice(base64s.indexOf(pictureToDelete), 1);
        takenPictureFile.splice(takenPictureFile.indexOf(pictureToDelete), 1);

        setBase64s(base64s);
        setTakenPictureFile(takenPictureFile)
        setCurrentView('Collection');
    }

    return (
        <>
            <button className="back-button" onClick={backToCollection}>Back</button>
            <div id="selected-picture-container">
                {displayPicture()}
            </div>
            <PhotoDetails details={details} setPhotoDetails={setPhotoDetails} />

            <div className="button-container">
                <button>Share</button>
                <button
                    onClick={() => handleDeletePicture()}
                    className="delete-button">
                    Delete
            </button>

            </div>
        </>
    )
};