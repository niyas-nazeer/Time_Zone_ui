import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/ProductTable.css"

const ProductsTable = () => {
    const ProductId=['SN2001','SN2002','SN2003','SN2004','SN2005']
    const Product=[]
  return (
        <>
            <div className="table-responsive table-card">
                <table className="table table-nowrap mb-0">
                    <thead className="table_light">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col" style={{paddingRight:"250px"}}>Product</th>
                            <th scope="col" style={{paddingRight:"30px"}}>Stock</th>
                            <th scope="col" style={{paddingRight:"40px"}}>Price</th>
                            <th scope="col" style={{paddingRight:"30px"}}>Orders</th>
                            <th scope="col" style={{paddingRight:"40px"}}>Ratings</th>
                            <th scope="col" style={{paddingRight:"70px"}}>Published</th>
                            <th scope="col" style={{paddingRight:"50px"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope='col'>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault"></label>
                            </div>
                            </td>
                            {/* <td><a href="#" className="fw-semibold">#VL2110</a></td> */}
                            <td className='product-details'>
                                <div className="img-box">
                                    <img src="https://picsum.photos/100" alt="" />
                                </div>
                                <div className="name-category">
                                    <div className='product-name'><a href="">Fastrack</a></div>
                                    <p>
                                        Category :
                                        <span>Analogue watch</span>
                                    </p>
                                </div>
                            </td>
                            <td>32</td>
                            <td>$24.05</td>
                            <td>20</td>
                            <td>4⭐</td>
                            <td>18-JAN-2024</td>
                            <td>
                                <button type="button" className="btn btn-sm btn-light">Details</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default ProductsTable