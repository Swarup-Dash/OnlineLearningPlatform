import React from 'react';
import backgroundImage from '../Asset/loginBackground.jpg';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
        }}
      >
        <div className="login-container" style={{
          height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '300px',
          margin: '0 auto',
          marginTop: '200px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}>
          <form className="login-form">
            <h2 style={{ textAlign: 'center' }}>Login</h2>

            <div className="form-group" style={{ marginBottom: '5px' }}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid black',
                  borderRadius: '6px',
                }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: '5px' }}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid black',
                  borderRadius: '6px',
                }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: '5px' }}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid black',
                  borderRadius: '6px',
                }}
              />
            </div>

            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>

            <button type="submit" className="login-button" style={{
              marginTop: '8px',
              marginLeft: '20%',
              width: '60%',
              padding: '10px',
              border: '1px solid',
              borderRadius: '4px',
              cursor: 'pointer',
              textAlign: 'center'
            }}>
              <Link to="/courses" style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
            </button>

            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <p>Not a member?</p>
              <Link to="/register" style={{ color: '#4169E1' }}>Click here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
