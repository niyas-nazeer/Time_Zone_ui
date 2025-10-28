import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { useEffect } from 'react'
import './Home.css';
import NavBar from '../components/NavBar'
import HeroCarousel from '../components/HeroCarousel';
import FeatureImage from '../components/FeatureImage';
import BrandCard from '../components/BrandCard';


const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access');

    // Function to verify the token
    const verifyToken = async () => {
      if (!accessToken) {
        navigate('/login');
        return; // Exit if there's no token
      }

      try {
        const data = { access: accessToken };
        const response = await fetch('http://127.0.0.1:8000/api/user/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+accessToken
          },
          body: JSON.stringify(data),
        });

        // Check if the response is OK
        if (!response.ok) {
            localStorage.removeItem('refresh');
            localStorage.removeItem('access');
            localStorage.removeItem('userType');
          navigate('/login');
        }

      } catch (err) {
        // console.error(err);
      }
    };

    verifyToken(); // Call the async function

  }, []); 



 



  return (
    <>
      <NavBar/>

      <br></br>
      
      <HeroCarousel />

      <br></br>

      <FeatureImage />

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="brand-h1">INTERNATIONAL BRANDS</div>
      <div className="brand-h2">ON TRUSTED DESTINATION</div>


      <div className="brand-container">
        <BrandCard logo="/assets/brand-cards/amazefit.jpeg" link="/brands/amazefit" />
        <BrandCard logo="/assets/brand-cards/casio.jpg" link="/brands/casio" />
        <BrandCard logo="/assets/brand-cards/citizen.jpg" link="/brands/citizen" />
  
        <BrandCard logo="/assets/brand-cards/diesel.jpg" link="/brands/diesel" />  
        <BrandCard logo="/assets/brand-cards/fastrack.png" link="/brands/fastrack" />  
        <BrandCard logo="/assets/brand-cards/fossil.png" link="/brands/fossil" />
        <BrandCard logo="/assets/brand-cards/gshock.jpeg" link="/brands/gshock" />
        <BrandCard logo="/assets/brand-cards/noise.jpg" link="/brands/noise" />
        <BrandCard logo="/assets/brand-cards/police.png" link="/brands/police" />
        <BrandCard logo="/assets/brand-cards/seiko.jpg" link="/brands/seiko" />
        <BrandCard logo="/assets/brand-cards/sonata.jpeg" link="/brands/sonata" />
        <BrandCard logo="/assets/brand-cards/timex.jpeg"link="/brands/timex" />
        <BrandCard logo="/assets/brand-cards/titan.jpg" link="/brands/titan" />
      </div>

      <br></br>
      <br></br>

      <Link to="/product">Go to product pages</Link>

    </>
  )
}

export default Home