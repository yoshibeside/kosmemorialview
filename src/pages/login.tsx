import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {


    // Implement your login logic here, e.g., send a POST request to your backend
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset form after submission (optional)
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex justify-center h-screen items-center bg-theme-color">
    <form className="flex flex-col space-y-4 w-1/3 bg-card-color p-4 rounded-lg" onSubmit={handleSubmit}>
      <div className="flex flex-col ">
        <label htmlFor="email" className="text-sm font-medium text-gray-700 ">
          Username
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder='Enter email or username or phone number'
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

    <button
        type="submit"
        className="inline-flex justify-center items-center px-4 py-2 bg-blue-500 bg-button-color hover:bg-button-color-hover text-white rounded-lg font-medium focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50"
      >
        Sign In
      </button>
      <div className='text-sm flex justify-center items-center'> 
        <p>Don't have an account?  <a href='#' className='text-link-color'> Sign Up</a></p>
        </div>

    </form>


    </div>
    
  );
};

export default Login;
