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
            src="../../../../text_logo.png"
            width="190"
            height="80"
            alt="Dago Student Living"
          />
        </a>

        <nav>
          <button
            onClick={toggleMenu}
            type="button"
            className="flex items-center justify-center mr-10 w-10 h-10 text-xl text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only  ">Open main menu</span>
            {show ? (
                <></>
                ) : (
                    <svg
                    className="hover-button w-10 h-10 "
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
            <button onClick={toggleMenu}className="hover-button exit-menu text-3xl text-white focus:outline-none ">X</button>
            <ul className='mt-16'>
              <li>
                <a
                  href="/"
                  className="menu-option select-menu mt-40 text-xl text-white dark:bg-blue-600"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="menu-option text-white text-xl dark:text-gray-400"
                >
                  Ameneties
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="menu-option text-white text-xl dark:text-gray-400"
                >
                  Floor Plan
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="menu-option text-white text-xl dark:text-gray-400"
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