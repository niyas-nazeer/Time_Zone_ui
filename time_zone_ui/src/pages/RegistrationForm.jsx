import React from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  // Only call useForm once
  const { register, handleSubmit, formState: { errors },watch } = useForm();
  const password = watch('password'); // Watching the password field

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
        alert('Registration successful!');
        console.log(result);
      } else {
        alert(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering.');
    }
  };

  return (
    <div className="container">
      <h2>Register a New User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <div>
          <label>Username:</label>
          <input
            type="text"
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        {/* First Name */}
        <div>
          <label>First Name:</label>
          <input
            type="text"
            {...register('firstname', { required: 'First name is required' })}
          />
          {errors.firstname && <p>{errors.firstname.message}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            {...register('lastname', { required: 'Last name is required' })}
          />
          {errors.lastname && <p>{errors.lastname.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
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
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        {/* Mobile (optional) */}
        <div>
          <label>Mobile:</label>
          <input
            type="text"
            {...register('mobile', {
              maxLength: { value: 15, message: 'Mobile number can be up to 15 digits' }
            })}
          />
          {errors.mobile && <p>{errors.mobile.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register('password', { 
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters long' }
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            {...register('confirmPassword', {
              required: 'Confirm password is required',
              validate: (value) => {
                // Use watched password for comparison
                return value === password || 'Passwords do not match';
              }
            })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>

        <button type="submit">Register</button>

      </form>
    </div>

  );
};

export default RegistrationForm;