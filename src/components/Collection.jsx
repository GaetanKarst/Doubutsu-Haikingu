import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Collection({ takenPictureFile, selectedImage }) {
    const [base64s, setBase64s] = useState([]);

    useEffect(() => {
        Promise.all(takenPictureFile.map(async (file) => {
            const imageString = await getBase64(file);
            return imageString;
        })).then(data => { 
            setBase64s(data);
        });

        // setBase64s(Promise.all(stringPromises));
    }, [takenPictureFile]);

    useEffect(() => {
        savePictureToDatabase(base64s[0]); 
    }, [base64s])

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result);
            };
        });
    }

    async function savePictureToDatabase(imageString) {
        try {
            const res = await axios.post('/api', { image: imageString });
        }
        catch (e) {
            console.log('Error', e);
        }
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