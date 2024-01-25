import React, { useEffect } from 'react';
import { useParallax } from 'react-scroll-parallax';
import './styles/footer.css';

const HomePage2 = () => {
 const parallax = useParallax({ speed: 0.5 });

 useEffect(() => {
    const handleScroll = () => {
      const rect = document.getElementById('page')?.getBoundingClientRect();
      if (rect && rect.top >= 0 && rect.bottom <= window.innerHeight) {
        document.getElementById('page')?.classList.add('animate');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
 }, []);

 return (
    <div id="page">
      <h1 id="title">Meet the best of West Java</h1>
      <div id="content" ref={parallax.ref as React.RefObject<HTMLDivElement>}>
        <div id="text"> Torre offers unmatched variety in West Campus in order to meet the needs of every student while providing a sky-high standard of living across the board. Whether you’re after an affordable flat with shared bedrooms, a serene private apartment, or townhome-style living with a few of your best friends, Torre has a spot for you.

Perched atop this enormous variety of floor plans is an entire top floor of community amenities with unbeatable views of the Austin skyline. Between the pool, hot tub, jumbotron, & more, Torre’s community spaces are the best and largest amenity area in West Campus. You can also hit the gym, take a yoga class, grab some coffee, or practice your group presentation right here at Torre.</div>
        <img id="image-custom" src="p../../../room.jpg" alt="Boarding house"/>
      </div>
    </div>
 );
};

export default HomePage2;


