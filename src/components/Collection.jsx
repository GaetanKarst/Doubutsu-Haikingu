import React from 'react';
import FileReader from 'filereader'



export default function Collection({ pictures }) {

function getBase64(link){
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(link);
        reader.onloadend = () => resolve(reader.result);
    })
}


    if (pictures.length > 0) {
        return (
            <div id="collection-grid">
                {pictures.map((photo, index) => {
                    const base64 = getBase64(photo)
                    .then((data) => data);
                    console.log(base64);

                    <img
                        src={`data:image/jpg;base64,${base64}`}
                        key={index}
                        alt="picture of animal" />
                        console.log(`data:image/jpg;base64, ${photo}`)
                }
                )}
            </div>
        );
    }
    else { 
        return(<h2 id="empty-collection">Your collection is empty,
    go on a hike when you have time!</h2>)
    }
}