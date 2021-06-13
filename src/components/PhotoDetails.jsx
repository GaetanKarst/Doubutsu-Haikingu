import React, { useMemo, useEffect, useCallback,useState } from 'react';

let inputs = [];
export default function PhotoDetails({displayPicture}) {
    const [details, setPhotoDetails] = useState({species: '', type: '', description: '', location: '', comments: '' });


    const createInputField = () => {
        console.log(inputs)
        for(let key in details) {
            console.log(key)
            return <input
                type="text"
                key={key+ inputs.indexOf(key)}
                value={details[key] !== '' ? details[key]:''}
                placeholder={key}
                onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                        handleChange(e, key);

                    }
                }} />
        }
        // return inputs.map((inputTag) => {return inputTag}) 
    };

    const handleChange = useCallback((e, key) => {

        setPhotoDetails({details,[key]: e.target.value})
    }, [details]);

    return (
        <>
            <div className="selected-picture-details">
                {createInputField}
            </div>
        </>
    )
}