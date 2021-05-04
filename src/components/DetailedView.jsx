import { PinDropSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import PhotoDetails from './PhotoDetails';

export default function DetailedView({ selectedPicture, setCurrentView }) {
    const [details, setPhotoDetails] = 
    useState({species: '', type: '', description: '', location: '', comments: '' });

    useEffect(() => {
        console.log(details)
    }, [details])

    function displayPicture() {
        return (
            <img
                className="selected-picture"
                src={selectedPicture}
                alt="selected picture" />
        )
    }

    function backToCollection() {
        setCurrentView('Collection');
    }

    function deletePhoto() {
        //TODO: Implement the delete function
        // selectedPicture = '';
    }

    //TODO: Make the location set automatically with the camera
    //TODO: Make the button 'share' work for social media
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
                    onClick={deletePhoto}
                    className="delete-button">
                    Delete
            </button>

            </div>
        </>
    )
};