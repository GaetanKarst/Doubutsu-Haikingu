import React from 'react';

export default function PhotoDetails({ details, setPhotoDetails }) {

    function createInputField() {
        console.log(details)
        for (let key in details) {
            return (<input
                type="text"
                placeholder={key}
                onKeyDown={(e) => {
                    if(e === 'Enter'){
                        //TODO: FIX the object passed
                        setPhotoDetails({species: e.target.value})
                    }
                }} />
            )
        }
    }

    return (
        <>
        <div className="selected-picture-details">
            {createInputField()}
        </div>
        </>
    )
}