import React from 'react'
import "./css/SidebarMenu.css"
import { NavLink } from "react-router-dom";
import DashIcon from "./icons/dashboard.svg"
import ProductIcon from "./icons/product.svg"
import OrderIcon from "./icons/order.svg"
import AnalyticsIcon from "./icons/analytics.svg"
import SettingsIcon from "./icons/settings.svg"
import HelpIcon from "./icons/help.svg"
import LogoutIcon from "./icons/logout.svg"
import CustomerIcon from "./icons/customers.svg"
import MessagesIcon from "./icons/messages.svg"

const SidebarMenu = () => {
    return(
        <>
                <nav className="sidebar-menu">
                    <div className="brand_name">Time Zone</div>
                    <div className="menu_section">
                        <div className="menu_links">
                            <h6>MENU</h6>
                            <div className="icon_box">
                                <img src={DashIcon} alt="Dashboard Icon"  width={18} height={18}/>
                                <NavLink to="dashboard" className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink>
                            </div>
                            <div className="icon_box">
                                <img src={ProductIcon} alt="Product Icon" width={18} height={18}/>
                                <NavLink to="products" className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink>
                            </div>
                            <div className="icon_box">
                                <img src={OrderIcon} alt="Product Icon" width={18} height={18}/>
                                <NavLink to="orders" className={({ isActive }) => isActive ? "active" : ""}>Orders</NavLink>
                            </div>
                            <div className="icon_box">
                                <img src={CustomerIcon} alt="Customer Icon" width={18} height={18}/>
                                <NavLink to="customers" className={({ isActive }) => isActive ? "active" : ""}>Customers</NavLink>
                            </div>
                            <div className="icon_box">
                                <img src={AnalyticsIcon} alt="Analytics Icon" width={21} height={21}/>
                                <NavLink to="analytics" className={({ isActive }) => isActive ? "active" : ""}>Analytics</NavLink>
                            </div>
                            <div className="icon_box">
                                <img src={MessagesIcon} alt="Messages Icon" width={21} height={21}/>
                                <NavLink to="messages" className={({ isActive }) => isActive ? "active" : ""}>Messages</NavLink>
                            </div>
                        </div>
                        <div className="account_links">
                            <h6>ACCOUNT</h6>
                            <div className="icon_box">
                                <img src={SettingsIcon} alt="Settings Icon" width={15} height={15}/>
                                <NavLink to="settings" className={({ isActive }) => isActive ? "active" : ""}>Settings</NavLink>
                            </div>
                            <div className="icon_box">
                                <img src={HelpIcon} alt="Help Icon" width={18} height={18}/>
                                <NavLink to="help" className={({ isActive }) => isActive ? "active" : ""}>Help</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="profile_card mb-3">
                        <div className="img_box"><img src="https://picsum.photos/100" alt="profile image" /></div>
                        <div className="details">
                            <div className="name">Niyas</div>
                            <div className="email">niyas@gmail.com</div>
                        </div>
                        <div className='icon'>
                            <img src={LogoutIcon}  alt="Logout Icon" width={22} height={22}/>
                        </div>
                    </div>
                </nav>
        </>
    )
};

export default SidebarMenu