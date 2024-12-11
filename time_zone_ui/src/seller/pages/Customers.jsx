import React from 'react'
import "./css/Customers.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Customers = () => {
  return (
    <div className="container-fluid">
        <h4>Customers</h4>
        <div className="customer-btn-box">
            <button className="add-customer-btn">+ Add Customer</button>
        </div>
        <div className="customer-list-section">
            <div className="row list-header">
                <div className="col-8">
                    <input type="text" className='searc' name="" id="" />
                </div>
                <div className="col-4 sortby-filter-box">
                    <span>sort by: </span>
                </div>
            </div>
            <div className="list-body">
                <div className="table-responsive">
                    <table className="table">
                        <thead className="table-light text-muted">
                            <tr>
                                <th scope=''></th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Customers