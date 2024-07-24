import React, { useState } from 'react';
import './styles/navbar.css';

function Navbar() {
  const [show, setShow] = useState(false);

  const toggleMenu = (state: boolean) => {
    if (state !== show){ 
      setShow(state);
    }
    else return

  };

  return (
    <>
    <div  style={{ width: '100%', zIndex:2}}>
      <div className="navbar">
        <a href="/">
          <img className='logo'
            src="../../../../logo-kos-rapi.png"
            alt="Dago Student Living"
          />
        </a>

        <nav className='fixed top-0 right-0 bottom-0 mt-12'>
          <button
            onClick={() => toggleMenu(true)}
            onMouseEnter={() => toggleMenu(true)}
            type="button"
            className="position-toggle flex items-center justify-center w-10 h-10 text-xl text-p-color"
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

          <div
            className={`${
            show ? 'translate-x-0' : 'translate-x-full'
            } transform transition-transform duration-300 ease-in-out fixed inset-y-0 right-0 w-60 bg-opacity-40 bg-nav-color`}
            onPointerEnter={() => toggleMenu(true)}
            onPointerLeave={() => toggleMenu(false)}
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
                  href="/amenities"
                  className="menu-option text-p-color text-xl dark:text-gray-400"
                >
                  Ameneties
                </a>
              </li>
              <li>
                <a
                  href="/floorplan"
                  className="menu-option text-p-color text-xl dark:text-gray-400"
                >
                  Floor Plan
                </a>
              </li>
              <li>
                <a
                  href="/contact"
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