import React, { useState, useEffect, useCallback } from 'react';

const Signup = () => {
    
    const [name, setName] = useState('');
    const [phonenum, setPhonenumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validnum, setValidnum] = useState(false);

    const handleSubmit = () => {

        // Implement your login logic here, e.g., send a POST request to your backend
        console.log('Email:', email);
        console.log('Password:', password);

        // Reset form after submission (optional)
        setName('');
        setEmail('');
        setPassword('');
        setPhonenumber('');
    };

    const handleChangePhone = useCallback((e: string) => {
        const re = /^\d{0,11}$/;
        const value = e
        if (value === '' || re.test(value)) {
            setPhonenumber((e) as string)
        }       
    }, [phonenum]);

    return (
        <div className="flex justify-center h-screen items-center bg-theme-color">
        <form className="flex flex-col space-y-4 w-1/3 bg-card-color p-4 rounded-lg" onSubmit={handleSubmit}>
        <div className="flex flex-col ">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 ">
            Name
            </label>
            <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-2"
            placeholder=''
            />
            <label htmlFor="phonenum" className="text-sm font-medium text-gray-700 ">
            Phone Number
            </label>
            <div className='flex flex-row items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 46.35 32.3"><g fill-rule="nonzero"><path fill="#fff" stroke="#CCC" stroke-width=".19" stroke-miterlimit="2.613" d="M2.63.09h41.09c1.39 0 2.53 1.15 2.53 2.54v27.04c0 1.39-1.13 2.53-2.52 2.54H2.61a2.553 2.553 0 0 1-2.52-2.54V2.63C.09 1.24 1.24.09 2.63.09z"/><path fill="red" d="M2.72.18h40.91c1.44-.04 2.53 1.1 2.53 2.54v13.43H.18V2.72C.18 1.28 1.27.14 2.72.18z"/></g></svg>
            <p className='mx-2 text-sm font-medium text-gray-700'>+62</p>
            <input
            id="phonenum"
            type="tel"
            value={phonenum} 
            onChange={(e) => {handleChangePhone(e.target.value)}}
            className={`rounded-lg mb-2 border px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full ${
                validnum ? 'border-correct-color' : 'border-wrong-color'
              }`}
            placeholder=''
            />
            </div>
            
            
        <label htmlFor="email" className="text-sm font-medium text-gray-700 ">
        Email
        </label>
        <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder=''
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
            Sign Up
        </button>
        <div className='text-sm flex justify-center items-center'> 
            <p>Already have an account?  <a href='#' className='text-link-color'> Sign In</a></p>
            </div>
        </form>
        </div>
        
    );
};

export default Signup;
