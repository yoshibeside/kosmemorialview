import React, { useState } from 'react';
import './styles/navbar.css';

function Navbar() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <>
    <div className="relative ">
      <div className="navbar">
        <a href="/">
          <img
            className="img-fluid"
            src="../../../../logo_dago_kos.png"
            width="358"
            height="100"
            alt="Dago Student Living"
          />
        </a>

        <nav>
          <button
            onClick={toggleMenu}
            type="button"
            className="flex items-center justify-center mr-10 w-10 h-10 text-xl text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only  ">Open main menu</span>
            {show ? (
                <button className="hover:bg-gray-100" style={{zIndex:100}}>X</button>
                ) : (
                    <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                )}
            
          </button>

          <div
                className={`${
                show ? 'translate-x-0' : 'translate-x-full'
                } transform transition-transform duration-300 ease-in-out fixed inset-y-0 right-0 w-64 bg-opacity-10 bg-blue-100 z-50`}
            >
            
            <ul className='mt-16'>
              <li>
                <a
                  href="/"
                  className="menu-option select-menu text-white bg-blue-700 rounded dark:bg-blue-600"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="menu-option text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Ameneties
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="menu-option text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Floor Plan
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="menu-option text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    </>
    
  );
}

export default Navbar;