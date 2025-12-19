import { useParams } from "react-router-dom";
import { brands } from "../data/brandPageData";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import SortBox from "../components/SortBox";
import ProductGrid from "../components/Product";
import Footer from "../components/Footer";

import "./BrandPage.css";

const BrandPage = () => {
  const { brandId } = useParams();
  const brand = brands.find(b => b.id === brandId);

  if (!brand) {
    return <h1 className="brand-not-found">Brand Not Found</h1>;
  }

  return (
    <>
      <NavBar/>
      

      <div className="brand-page-container">
        <img 
          src={brand.banner} 
          alt={`${brand.name} banner`} 
          className="brand-banner"
        />

        <h1 className="brand-title">{brand.name}</h1>
        <p className="brand-description">{brand.description}</p>
      </div>

      <div className="men-layout">
            <Sidebar />
      
            <div className="men-content">
                <SortBox />
                <ProductGrid />
            </div>
      </div>

      <Footer />
    </>
  );
};

export default BrandPage;
