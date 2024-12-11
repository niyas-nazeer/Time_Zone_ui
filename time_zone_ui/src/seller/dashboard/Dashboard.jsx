import React from 'react'
import { Routes, Route } from "react-router-dom";
import "./Dashboard.css"
import SidebarMenu from '../components/SidebarMenu';
import Products from '../pages/Products';
import Overview from '../pages/Overview';
import Orders from '../pages/Orders';
import Customers from '../pages/Customers';
import Messages from '../pages/Messages';
import Analytics from '../pages/Analytics';
import Settings from '../pages/Settings';
import Help from '../pages/Help';
import AddProducts from '../pages/AddProducts'

const Dashboard = () => {
    return (
        <>
        <div className='dashboard-container' style={{ display: "flex" }}>
            {/* Sidebar */}
            <SidebarMenu />

            {/* Main content area */}
            <div style={{ flex: 1 ,marginLeft:"250px"}}>
                <Routes>
                    <Route path="dashboard" element={<Overview />} />
                    <Route path="products" element={<Products />} />
                    <Route path="products/add-products" element={<AddProducts />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="analytics" element={<Analytics />} />
                    <Route path="messages" element={<Messages />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="help" element={<Help />} /> 
                    {/* Add more routes here as needed */}
                </Routes>
            </div>
        </div>

        </>     
    );
};

export default Dashboard;