import React from "react";
import './Women.css';
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Sidebar from '../components/Sidebar'
import SortBox from "../components/SortBox";
import ProductGrid from "../components/Product";
import Footer from '../components/Footer';

const Women = () => {
    return(
        <>
            <NavBar/>

            <Banner banner="/assets/banners/Women_banner.jpg"/>

            <div className="women-layout">
                <Sidebar />

                <div className="women-content">
                    <SortBox />
                    <ProductGrid />
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Women