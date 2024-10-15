import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { useEffect } from 'react'

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
      <div>Home</div>
      <Link to="/product">Go to product pages</Link>
    </>
  )
}

export default Home