"use client";

import React from 'react';
import Head from 'next/head';
import './signup.css';

const SignUp = () => {
  return (
    <div className="signup-container">
      <Head>
        <title>Sign Up | LuxNova</title>
      </Head>
      <div className="signup-form">
        <h1 className="signup-title">Create an Account</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" />
        </div>
        <button className="signup-button">Sign Up</button>
        <div className="login-link">
          <p>Already have an account? <a href="/signin">Log In</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;