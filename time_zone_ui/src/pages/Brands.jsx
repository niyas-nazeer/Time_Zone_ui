import React from "react";
import './Brands.css';
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import BrandAds from '../components/BrandAds'

const Brands = () => {
    return(
        <>
            <NavBar/>

            <Banner  banner="/assets/banners/Brands_banner.png"/>

            <BrandAds/>

            <Footer />

        </>
    )
}

export default Brands