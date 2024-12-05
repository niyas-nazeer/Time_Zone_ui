import React from 'react'
import { useState } from "react";
import "./AddProducts.css"

const AddProducts = () => {
  const [productData, setProductData] = useState({
    name: '',
    brand: '',
    category: '',
    short_description: '',
    description: '',
    slug: '',
    price: '',
    discount_price: '',
    connectivity: '',
    model_number: '',
    serial_number: ''
  });
  
  const [image, setImage] = useState(null); // Separate state for image file

  // Handle form input changes
  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };


   // Handle image upload
   const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Only select the first image
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create a FormData object to send the data as multipart/form-data
    const formData = new FormData();
  
    // Append each form field to the FormData object
    for (let key in productData) {
      formData.append(key, productData[key]);
    }
  
    // Append the image file to the formData
    if (image) {
      formData.append('image', image);
    }

    try {
        const response = await fetch('http://127.0.0.1:8000/api/products/add_products', {
          method: 'POST',
          body: formData, // Send the formData object
        });
    
        const result = await response.json();
    
        if (response.ok) {
          alert('Product added successfully!');
          console.log('Response:', result);
        } else {
          alert(result.message || 'Failed to add product');
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding the product.');
      }
    };

    return(
        <>
            <div className="form-container">
                <h1>Add Products</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={productData.name} onChange={handleChange} required />

                    <label htmlFor="brand">Brand</label>
                    <input type="text" name="brand" id="brand" value={productData.brand} onChange={handleChange} required/>

                    <label htmlFor="category">Category</label>
                    <input type="text" name="category" id="category" value={productData.category} onChange={handleChange} required/>

                    <label htmlFor="image">Image</label>
                    <input type="file" name="image" id="image" accept='image/*' onChange={handleImageChange} required/>

                    <label htmlFor="short-desc">Short Description</label>
                    <textarea type="text" name="short_description" id="short-desc" value={productData.short_description} onChange={handleChange} required/>

                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" value={productData.description} onChange={handleChange} required/>

                    <label htmlFor="slug">Slug</label>
                    <input type="text" name="slug" id="slug" value={productData.slug} onChange={handleChange} required/>

                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" id="price" value={productData.price} onChange={handleChange} required/>

                    <label htmlFor="discount-price">Discount Price</label>
                    <input type="text" name="discount_price" id="discount-price" value={productData.discount_price} onChange={handleChange} required/>

                    <label htmlFor="connectivity">Connectivity</label>
                    <input type="text" name="connectivity" id="connectivity" value={productData.connectivity} onChange={handleChange} required/>

                    <label htmlFor="model_number">Model Number</label>
                    <input type="text" name="model_number" id="model_number" value={productData.model_number} onChange={handleChange} required/>

                    <label htmlFor="serial-number">Serial Number</label>
                    <input type="text" name="serial_number" id="serial_number" value={productData.serial_number} onChange={handleChange} required/>
                    
                    <button type="submit">Create Product</button>
                </form>
            </div>
            
        </>
    );
};
export default AddProducts;