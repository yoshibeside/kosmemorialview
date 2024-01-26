import React, { useState } from 'react';
import './styles/navbar.css';

function Navbar() {
  const [show, setShow] = useState(false);

  const toggleMenu = (state: boolean) => {
    if (state !== show){ 
      setShow(state);
      console.log("lkasjdlfksjlkdfj")
    }
    else return

  };

  return (
    <>
    <div  style={{ position: 'fixed', top: 0, width: '100%', zIndex:4}}>
      <div className="navbar">
        <a href="/">
          <img
            className="img-fluid"
            src="../../../../text_logo.png"
            alt="Dago Student Living"
          />
        </a>

        <nav>
          <button
            onClick={() => toggleMenu(true)}
            type="button"
            className="flex items-center justify-center mr-10 w-10 h-10 text-xl text-p-color dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
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

          <div onMouseEnter={() => toggleMenu(true)} className='hover-menu fixed inset-y-0 right-0 w-64 bg-pink'>

          </div>

          <div
            className={`${
            show ? 'translate-x-0' : 'translate-x-full'
            } transform transition-transform duration-300 ease-in-out fixed inset-y-0 right-0 w-64 bg-opacity-40 bg-nav-color`}
            onMouseOver={() => toggleMenu(true)}
            onMouseLeave={() => toggleMenu(false)}
            >
            <ul className='mt-16'>
              <li>
                <a
                  href="/"
                  className="menu-option select-menu mt-40 text-xl text-p-color dark:bg-blue-600"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="menu-option text-p-color text-xl dark:text-gray-400"
                >
                  Ameneties
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="menu-option text-p-color text-xl dark:text-gray-400"
                >
                  Floor Plan
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="menu-option text-p-color text-xl dark:text-gray-400"
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