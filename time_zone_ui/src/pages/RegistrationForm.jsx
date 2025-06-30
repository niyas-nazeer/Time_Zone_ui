import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css'; // Import CSS styles

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors },watch } = useForm();
  const password = watch('password');
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        toast.success('🎉 Registration successful!');
        console.log(result);
        setTimeout(() => navigate('/home'), 2000); // Delay navigation for toast visibility
      } else {
        toast.error(result.message || '❌ Username or Email already used');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('🚫 An error occurred while registering.');
    }
  };
  

  return (
    <div className="register-container">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
          <h1>Create an Account</h1>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              {...register('username', { required: 'Username is required' })}
            />
            {errors.username && <p className="error">{errors.username.message}</p>}
          </div>

          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              {...register('firstname', { required: 'First name is required' })}
            />
            {errors.firstname && <p className="error">{errors.firstname.message}</p>}
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              {...register('lastname', { required: 'Last name is required' })}
            />
            {errors.lastname && <p className="error">{errors.lastname.message}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label>Mobile</label>
            <input
              type="text"
              {...register('mobile', {
                maxLength: { value: 15, message: 'Max 15 digits' }
              })}
            />
            {errors.mobile && <p className="error">{errors.mobile.message}</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'At least 6 characters' }
              })}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              {...register('confirmPassword', {
                required: 'Confirm password is required',
                validate: (value) => value === password || 'Passwords do not match'
              })}
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
          </div>

          <button type="submit" className="submit-btn">Register</button>
        </form>
        <p className="login-link">Existing user? <a href="/login">Login</a></p>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};



export default RegistrationForm;
