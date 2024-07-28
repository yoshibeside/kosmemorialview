import React, { useEffect, useState } from 'react';
import './styles/navbar.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo-kos-rapi.png';

function Navbar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
    const navHome = () => {
        navigate('/');
    }
    const navAmenities = () => {
        navigate('/amenities');
    }
    const navContact = () => {
        navigate('/contact');
    }
    const navFloorPlan = () => {
        navigate('/floorplan');
    }

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
        <button onClick={()=>navHome()}>
          <img className='logo'
            src={logo}
            alt="logo"
          />
        </button>

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
            } transform transition-transform duration-300 ease-in-out fixed inset-y-0 right-0 w-52 bg-nav-color`}
            onPointerEnter={() => toggleMenu(true)}
            onPointerLeave={() => toggleMenu(false)}
            >
            <ul className='mt-16 flex justify-center flex-col'>
              <li className='max-w-full min-w-full'>
                <button
                  onClick={() => navHome()}
                  className="menu-option min-w-full font-semibold mt-40 text-xl text-p-color dark:bg-blue-600"
                  aria-current="page"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navAmenities()}
                  className="menu-option min-w-full  font-semibold text-p-color text-xl dark:text-gray-400"
                >
                  Ameneties
                </button>
              </li>
              <li>
                <button
                  onClick={() => navFloorPlan()}
                  className="menu-option min-w-full font-semibold text-p-color text-xl dark:text-gray-400"
                >
                  Floor Plan
                </button>
              </li>
              <li>
                <button
                  onClick={() => navContact()}
                  className="menu-option min-w-full font-semibold text-p-color text-xl dark:text-gray-400"
                >
                  Contact
                </button>
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