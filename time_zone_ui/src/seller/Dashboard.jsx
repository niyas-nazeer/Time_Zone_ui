import React from 'react'
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <>
            <div className="container">
                <div className="left-nav-section">
                    <div className="brand-name">Time Zone</div>
                    <div className="menu-section">
                        <div className="menu-links">
                            <h5 className='menu-'>MENU</h5>
                            <a href="" className="">Dashboard</a>
                            <a href="" className="">Manage Products</a>
                            <a href="" className="">Manage Orders</a>
                            <a href="" className=''>Manage Payments</a>
                            <a href="" className=''>Manage Inventory</a>
                            <a href="" className="">Analytics</a>
                        </div>
                        <div className="account-links">
                            <h5>ACCOUNT</h5>
                            <a href="" className="">Profile</a>
                            <a href="" className="">Settings</a>
                            <a href="" className="">Help Center</a>
                            <a href="" className=''>Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </>     
    );
};

export default Dashboard;