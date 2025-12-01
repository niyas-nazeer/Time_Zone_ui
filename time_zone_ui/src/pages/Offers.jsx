import React from "react";
import './Offers.css';
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Sidebar from '../components/Sidebar'
import SortBox from "../components/SortBox";
import ProductGrid from "../components/Product";
import Footer from '../components/Footer';

const Offers = () => {
    return(
        <>
            <NavBar/>

            <Banner banner="/assets/banners/Offers_banner.jpg"/>

            <div className="Offers-layout">
                <Sidebar />

                <div className="Offers-content">
                    <SortBox />
                    <ProductGrid />
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Offers