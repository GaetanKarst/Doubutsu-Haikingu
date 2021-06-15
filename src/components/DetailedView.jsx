import React, { useState } from 'react';
import PhotoDetails from './PhotoDetails';

export default function DetailedView({ selectedPicture, setCurrentView, base64s, setBase64s }) {
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

    function handleDeletePicture() {
        const pictureToDelete = document.getElementById(selectedPicture);
        base64s.splice(base64s.indexOf(selectedPicture), 1);
        setCurrentView('Collection');
    }

    return (
        <>
        <button className="back-button" onClick={backToCollection}>Back</button>
            <div id="selected-picture-container">
                {displayPicture()}
            </div>
                <PhotoDetails details={details} setPhotoDetails={setPhotoDetails}/>

            <div className="button-container">
                <button>Share</button>
                <button
                    onClick={handleDeletePicture}
                    className="delete-button">
                    Delete
            </button>

            </div>
        </>
    )
};