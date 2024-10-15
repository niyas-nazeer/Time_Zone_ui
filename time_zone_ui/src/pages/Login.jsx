import { useEffect, useState } from "react";
import React from 'react'
import { useNavigate } from 'react-router-dom';

let data = {}
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');
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
          if (response.ok) {
            navigate('/home');
          }
          else{
            localStorage.removeItem('refresh');
            localStorage.removeItem('access');
            localStorage.removeItem('userType');
          }
        } catch (err) {
        
          // console.error(err);
        }
      };
  
      verifyToken(); // Call the async function
  
    }, []); 
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!username || !password){
            setError("Please fill both fields!");
            return;
        };

        data={
            "username":username,
            "password":password
        }

        setError('');

        try {
            const response = await fetch('http://127.0.0.1:8000/api/user/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                
              },
              body: JSON.stringify(data),
            });
      
            // Check if the response is OK
            if (!response.ok) {
              alert("Incorrect Email or Password");
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
      
            const result = await response.json();
            localStorage.setItem('refresh', result.refresh);
            localStorage.setItem('access', result.access);
            localStorage.setItem('userType', result.type);
            navigate('/Home')
          } catch (err) {
            setError(err);
          } finally {
            // setLoading(false);
          }
    }

  return (
    <>
        <div className='container'>
            <h1>Sign in</h1>
            <form>
                <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username"/>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password"/>
                <div>{error}</div>
                <button onClick={handleSubmit}>Sign in</button>
            </form>
            <p>Don't have an account <a href="">Sign Up</a></p>

            <div>
                <pre>{data.type}</pre>
            </div>
        </div>
    </>
  )
}

export default Login