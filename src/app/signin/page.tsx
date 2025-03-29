"use client";

import React from 'react';
import Head from 'next/head';
import './signin.css';
import { IoMailOutline, IoLockClosedOutline } from 'react-icons/io5';

const LoginForm = () => {
  return (
    <div className="login-container">
      <Head>
        <title>Login | LuxNova</title>
      </Head>
      <form className="login-form">
        <h1 className="login-title">Log In</h1>

        <div className="input-box">
          <IoMailOutline className="icon" />
          <input type="email" required placeholder="Email" />
        </div>

        <div className="input-box">
          <IoLockClosedOutline className="icon" />
          <input type="password" required placeholder="Password" />
        </div>

        <div className="login-options">
          <label><input type="checkbox" /> Remember me</label>
          <a href="#">Forgot Password?</a>
        </div>

        <button className="login-button">Log In</button>

        <div className="register-link">
          <p>Don't have an account? <a href="/signup">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;