import React, { useEffect, useState } from 'react';


export default function Collection({ takenPictureFile, selectedImage }) {
    const [base64s, setBase64s] = useState([]);

    useEffect(() =>{
        Promise.all(takenPictureFile.map( async(file) => {
            const test = await getBase64(file);
            return test;
         })).then(data => setBase64s(data));

        // setBase64s(Promise.all(stringPromises));
    }, [takenPictureFile]); 

    function getBase64(file) {
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