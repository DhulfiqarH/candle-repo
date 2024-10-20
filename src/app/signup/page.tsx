import React from 'react';
import Head from 'next/head';
import './signup.css'; // Ensure this file is correctly named and exists

const SignUp = () => {
  return (
    <div className="signup-container">
      <Head>
        <title>Sign Up</title>
      </Head>
      <h1>Create Your Account</h1>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
