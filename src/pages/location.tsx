import { useState, useEffect} from 'react';
import './styles/location.css';
import {APIProvider, Map, AdvancedMarker, Pin} from '@vis.gl/react-google-maps';

function Location() {

    const [isVisible, setIsVisible] = useState(true);
    // const [scrollOpacity, setScrollOpacity] = useState(1);


    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        setIsVisible(entries[0].isIntersecting);
      });
    
      // Get a reference to the element with the rotating text class
      const rotatingText = document.querySelector('.animate-in');
      console.log(rotatingText)
    
      if (!rotatingText) return;
      observer.observe(rotatingText); // Observe the element
    
      return () => observer.unobserve(rotatingText); // Clean up on unmount
    }, []);

    // useEffect(() => {
    //   const handleScroll = () => {
    //     const rect = document.getElementById('pagelocation')?.getBoundingClientRect();
    //     const opacity = rect
    //       ? Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
    //       : 1;
  
    //     setScrollOpacity(opacity);
    //     console.log(opacity)
    //   };
  
    //   window.addEventListener('scroll', handleScroll);
  
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);
    
    return (
      <div id='pagelocation' className="flex h-screen">
        <div className="bg-location"/>
        <div className='w-1/2'>
          <APIProvider apiKey={'AIzaSyBswx-ajnlGq5F3bwCvT8IQDxk85WRemyw'} onLoad={() => console.log('Maps API has loaded.')}>
            <Map
                defaultZoom={17}
                defaultCenter={ {lat: -6.877304188248272, lng: 107.61479158589678} }
                mapId={'thisisid'}>
                <AdvancedMarker
                  position={{lat: -6.877304188248272, lng: 107.61479158589678}}
                >
                  <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} scale={1}/>
                </AdvancedMarker>
            </Map>
          </APIProvider>
        </div>
        

        <div className={`flex flex-col m-2 items-center w-1/2 justify-center ${isVisible ? 'animate-in' : ''}`}>
          <div className="md:w-1/2 w-4/5 text-right align-center items-center text-pretty">
            <h1 className='text-header-color md:text-7xl text-3xl font-martionmono font-semibold'>The Perfect Balance</h1>
            <br></br>
            <p className='header-child-text text-p-color md:text-base text-sm font-text'>Our residence offers first of the class (kost) in Dago. Perfect for students and where home is a corner away. Immerse yourself in the energy of Bandung's student scene while maintaining easy access to your campus and study resources – all within a short ride away.</p>
            <br></br>
            <p className='header-child-text text-p-color md:text-base font-text text-sm'>Lupakan perjalanan jauh! Tempat tinggal kami terletak ideal di dekat kampus-kampus utama. Saat Anda membutuhkan waktu istirahat belajar, makanan lezat, atau hiburan, Anda bisa mendapatkannya disini. </p>
            <br></br>
            <a className="text-link-color font-bold text-right" href="https://maps.app.goo.gl/VaSEDV9ib97FYF9RA?g_st=iw"> Open in Google Maps </a>
          </div>
    
        </div>
      </div>
    );
}

export default Location;