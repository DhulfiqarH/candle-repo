import React from 'react';
import Head from 'next/head';
import './sign.css';

const SignIn = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <div className="formContainer">
          <h1 className="title">Sign In</h1>
          <form>
            <input
              type="email"
              placeholder="Email"
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="input"
            />
            <button type="submit" className="button">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
