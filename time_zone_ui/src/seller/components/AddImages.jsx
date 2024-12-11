import React, { useState } from 'react';
import './css/AddImages.css';

function AddImages({ onImageChange }) {
    const [images, setImages] = useState([]);
    const [error, setError] = useState('');

    // Triggered when the file input changes
    const handleImageUpload = (event) => {
        const newImages = Array.from(event.target.files);

        // Clear error and add new images if under the limit
        setError('');
        const imageURLs = newImages.map(file => URL.createObjectURL(file));
        setImages([...images, ...imageURLs].slice(0, 3)); // Ensures a max of 3 images
        
    };

    // Handles the "Click to upload" action
    const handleClickToUpload = () => {
        if (images.length >= 3) {
            setError('You can only upload up to 3 images.');
        } else {
            document.getElementById('fileInput').click();
        }
    };


    // Replaces an existing image
    const replaceImage = (index) => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const newImages = [...images];
                newImages[index] = URL.createObjectURL(file);
                setImages(newImages);
            }
        };
        fileInput.click();
    };

    // Removes an image
    const removeImage = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        setImages(newImages);
        setError(''); // Clear error if any
    };

    return (
        <div className="image-upload-container">
            <div className="upload-box" onClick={handleClickToUpload}>
                <span>Click to upload</span>
            </div>

            <div className="image-list">
                {images.map((src, index) => (
                    <div key={index} className="image-wrapper">
                        <img src={src} alt={`Uploaded ${index + 1}`} />
                        <div className="overlay">
                            <button onClick={() => replaceImage(index)}>Replace</button>
                            <button onClick={() => removeImage(index)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>

            <input
                id="fileInput"
                type="file"
                style={{ display: 'none' }}
                multiple
                accept="image/*"
                onChange={handleImageUpload}
            />
            <br />
            <div>{error && <p className="error-message">{error}</p>}</div>
        </div>
    );
}

export default AddImages;