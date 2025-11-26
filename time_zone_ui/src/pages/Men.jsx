import React from "react";
import './Men.css';
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Sidebar from '../components/Sidebar'
import SortBox from "../components/SortBox";
import ProductGrid from "../components/Product";
import Footer from '../components/Footer';

const Men = () => {
    return(
        <>
            <NavBar/>

            <Banner banner="/assets/banners/Men_banner.jpg"/>

            <div className="men-layout">
                <Sidebar />

                <div className="men-content">
                    <SortBox />
                    <ProductGrid />   {/* <-- Add this */}
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Men