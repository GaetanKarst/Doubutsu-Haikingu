import React from 'react';

export default function PhotoDetails({ setPhotoDetails }) {

    function createInputField() {
        let keys = ['Species', 'Type', 'Description', 'Location', 'Comments'];
        return keys.map((key) => {
            return <input
                type="text"
                placeholder={key}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        //TODO: FIX the object passed
                        setPhotoDetails({ [key]: e.target.value });
                        // e.target.value = ''; 
                    }
                }} />
        })
            

    }

    return (
        <>
            <div className="selected-picture-details">
                {createInputField()}
            </div>
        </>
    )
}