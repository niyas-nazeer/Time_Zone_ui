import React, { useState } from 'react';
import "./css/CategoryBrandDropdown.css";

const CategoryBrandDropdown = ({onCategoryChange, onBrandChange}) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedBrand,setSelectedBrand]=useState();

  // categories and brand options
  const categories = ['Select Type','Analogue', 'Digital', 'Chronograph', 'Hybrid', 'Leather watches', 'Stainless steel Watches', 'Smart Watches'];
  const brands = ['Select Brand','CASIO','DIESEL','FASTRACK','FOSSIL','G-SHOCK','POLICE','TITAN','NOISE'];
  // Handle category dropdown change
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    if (onCategoryChange){
      onCategoryChange(event.target.value); // call parent function
    }
  };

  //Handle brand dropdown change
  const handleBrandChange = (event) =>{
    setSelectedBrand(event.target.value);
    if (onBrandChange){
      onBrandChange(event.target.value); // call parent function
    }
  };

  return (
    <>
    <div className="category-dropdown">
      <label htmlFor="product-category">Product Category</label>
      <select
        id="product-category"
        value={selectedCategory}
        onChange={handleChange}
        className="dropdown-select"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
    <div className="brand-dropdown">
    <label htmlFor="product-brand">Product Brand</label>
    <select
      id="product-brand"
      value={selectedBrand}
      onChange={handleBrandChange}
      className="dropdown-select"
    >
      {brands.map((brand) => (
        <option key={brand} value={brand}>
          {brand}
        </option>
      ))}
    </select>
  </div>
  </>
  );
};

export default CategoryBrandDropdown;