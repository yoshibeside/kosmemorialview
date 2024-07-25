import React, { useEffect, useState } from 'react';
import { useParallax } from 'react-scroll-parallax';
import './styles/homePage2.css';

const HomePage2 = () => {
  const parallax1 = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    translateX: [-7, 0],
  });
  const parallax2 = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    translateX: [0, 0],
  });
  const parallax3 = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    translateX: [7, 0],
  });

  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const rect = document.getElementById('page')?.getBoundingClientRect();
      const opacity = rect
        ? Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
        : 1;

      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  return (
    <>
      <div id="page" style={{ opacity: scrollOpacity }}  className="image-container flex relative h-screen justify-center items-center">
        <div className="bg-kampus" />
        <div className='flex flex-col h-screen items-center justify-center'>
          <h1 className='text-header-color md:text-7xl text-5xl font-serif md:mb-0 mb-4'>Student Spaces</h1>

          <div className="md:flex image-container h-4/5">
            <div className="image-box" ref={parallax1.ref} onClick={() => handleImageClick("rooftop5.jpg")}>
              <img src="rooftop5.jpg" alt="FirstImage" className="small-image" />
              <div className="overlay-text">
                <h2 style={{ fontFamily: 'Courier New', fontWeight: 'bold' }}>Communal Area</h2>
              </div>
            </div>
            <div className="image-box" ref={parallax2.ref} onClick={() => handleImageClick("typec3.jpg")}>
              <img src="typec3.jpg" alt="SecondImage" className="small-image" />
              <div className="overlay-text">
                <h2 style={{ fontFamily: 'Courier New', fontWeight: 'bold' }}>Sleeping room</h2>
              </div>
            </div>
            <div className="image-box" ref={parallax3.ref} onClick={() => handleImageClick("rooftop2.jpg")}>
              <img src="rooftop2.jpg" alt="ThirdImage" className="small-image" />
              <div className="overlay-text">
                <h2 style={{ fontFamily: 'Courier New', fontWeight: 'bold' }}>Kitchen</h2>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Image Modal/Popup */}
      {modalOpen && (
        <div className="modal z-index=60" onClick={handleCloseModal}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedImage} alt="SelectedImage" className='h-96' />
          </div>
        </div>
      )}
    </>
 
  );
};

export default HomePage2;
