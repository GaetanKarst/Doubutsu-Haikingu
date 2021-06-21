import React, { useEffect, useState } from 'react';


export default function Collection({ takenPictureFile, selectedImage, base64s, setBase64s }) {

    useEffect(() => {

        // Updates collection page every time a picture is taken
        Promise.all(takenPictureFile.map(async (file) => {
            const picture = await getBase64(file);
            return picture;
        })).then(data => setBase64s(data));

    }, [takenPictureFile]);

    // Converts a single picture taken by the camera to string 64 to place it into the collection page
    function getBase64(file) {
        if (!file) return;

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result);
            };
        });
    }

    function renderPictures() {
        return base64s.map((photo, index) => {
            return <img
                src={`data:image/jpeg;${photo}`}
                key={index}
                className="picture-of-animal"
                alt="picture of animal"
                onClick={selectedImage}
            />
        });
    }
    return (
        <div id="collection-list">
            {renderPictures()}
        </div>
    )
}