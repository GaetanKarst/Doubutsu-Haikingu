import React, { useMemo, useEffect, useCallback,useState } from 'react';

let inputs = [];
export default function PhotoDetails({displayPicture}) {
    const [details, setPhotoDetails] = useState({species: '', type: '', description: '', location: '', comments: '' });


    // const createInputField = () => {
    //     console.log(inputs)
    //     for(let key in details) {
    //         console.log(key)
    //         return <input
    //             type="text"
    //             key={key+ inputs.indexOf(key)}
    //             value={details[key] !== '' ? details[key]:''}
    //             placeholder={key}
    //             onKeyDown={(e) => {
    //                 if(e.key === 'Enter'){
    //                     handleChange(e, key);

    //                 }
    //             }} />
    //     }
    //     // return inputs.map((inputTag) => {return inputTag}) 
    // };

    const handleChange = useCallback((e, key) => {

        setPhotoDetails({details,[key]: e.target.value})
    }, [details]);

    return (
        <>
            <div className="selected-picture-details">
            <input
                type="text"
                value={details.species !== '' ? details.species:undefined}
                placeholder='species'
                onKeyPress={(e) => {

                    if(e.key === 'Enter'){
                        handleChange(e, 'species');
                    }
                }} />
                <input
                type="text"
                value={details.type !== '' ? details.type:undefined}
                placeholder='type'
                onKeyPress={(e) => {

                    if(e.key === 'Enter'){
                        handleChange(e, 'type');
                    }
                }} /><input
                type="text"
                value={details.description !== '' ? details.description:undefined}
                placeholder='description'
                onKeyPress={(e) => {

                    if(e.key === 'Enter'){
                        handleChange(e, 'description');
                    }
                }} />
            </div>
        </>
    )
}