import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";


export default function Camera({ addTakenPictureFile }) {
    
    function handleIconClick() {
        const cameraFileField = document.getElementById('camera-file');
        return cameraFileField.click();
    }

    // Extracts taken picture from the camera 
    function getShot(event) {
        try {
            addTakenPictureFile(event.target.files[0]);
            console.log('Picture taken!');
        }
        catch (e) {
            console.error('Error at picture taken', e);
        }
    }

    return (
        <div className="camera-container">
            <Grid container>
                <Box>
                    <input type="file"
                        accept="image/*"
                        capture
                        id="camera-file"
                        hidden
                        onChange={getShot}
                    />
                </Box>
                <label htmlFor="camera-file">
                    <IconButton onClick={handleIconClick}>
                        <PhotoCameraRoundedIcon id="camera-icon" />
                    </IconButton>
                </label>
            </Grid>
        </div>
    );
}

