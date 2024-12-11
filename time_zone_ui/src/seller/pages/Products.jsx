import React from 'react';
import { Link } from "react-router-dom";
import "./css/Products.css"
import AddProducts from "./AddProducts"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import PriceRangeFilter from '../components/PriceRangeFilter';
import Accordion from '../components/Accordion';
import ProductsTable from '../components/ProductsTable';
import SearchIcon from "./icons/SearchIcon.svg";

const Products = () => {

  const categories = [
    { name: "Analogue", count: null },
    { name: "Digital", count: null },
    { name: "Chronograph", count: 5 },
    { name: "Hybrid", count: 5 },
    { name: "Leather watches", count: 6 },
    { name: "Stainless steel Watches", count: null },
    { name: "Smart Watches", count: 7 },
  ];
  const brands= ['CASIO','DIESEL','FASTRACK','FOSSIL','G-SHOCK','POLICE','TITAN','NOISE'];
  const discounts= ['50% or more','40% or more','30% or more','20% or more','less than 10%'] 
  const ratings=['⭐⭐⭐⭐','⭐⭐⭐','⭐⭐','⭐','']
  return (
    <>
        <div className="container-fluid product-container">
            
            <div className="header mb-3">
              <h4>Products</h4>
            </div>
            <div className="row main">
              <div className="filter-section">
                <div className="filter-header">
                  <span className="heading mb-3">Filters</span>
                  <span className='clear-text mb-3'>Clear All</span>
                </div>
                <div className="category-filter">
                    <span className='filter-title'>CATEGORY</span>
                    <div className="category-list mt-2 mb-3">
                      {categories.map((category,index)=>(
                        <div className="category-item" key={index}>
                            <span>{category.name}</span>
                            {category.count !==null && (
                              <span className="category-count">{category.count}</span>
                            )}
                        </div>
                      ))}
                    </div>
                </div>
                <PriceRangeFilter/>
                <Accordion title='BRANDS' items={brands} id="brands" defaultOpen={true}/>
                <Accordion title='DISCOUNTS' items={discounts} id="discounts" defaultOpen={false}/>
                <Accordion title='RATINGS' items={ratings} id="ratings" isRating={true} defaultOpen={false}/>
              </div>
              
              <div className="col-9 product-list-section pt-3">
                <div className="row product-list-header">
                  <div className="col-7 addproduct-btn-box">
                    <Link to="add-products">
                      <button className='add-product_btn'>+ Add Product</button>
                    </Link>
                  </div>
                  <div className="col-5 search-box">
                    <i><img src={SearchIcon} alt="Search Icon" /></i>
                    <input type="text" placeholder='Search Products...'/>
                  </div>
                </div>
                <div className="row product-list-nav">
                  <div className="col nav">
                    <ul className='nav-tab'>
                      <li className="nav-item">
                        <a href="">
                          All
                          <span className='badge bg-danger-subtle text-danger align-middle rounded-pill ms-1'>12</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="">
                          Published
                          <span className='badge bg-danger-subtle text-danger align-middle rounded-pill ms-1'>12</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="">
                          Draft
                          <span className='badge bg-danger-subtle text-danger align-middle rounded-pill ms-1'>12</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-list-table">
                  <ProductsTable/>
                </div>
              </div>
            </div>
        </div>
    </>
  );
}

export default Products;