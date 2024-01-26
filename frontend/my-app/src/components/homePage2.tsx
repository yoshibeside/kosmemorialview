import React, { useEffect, useState } from 'react';
import { useParallax } from 'react-scroll-parallax';
import './styles/homePage2.css';

const HomePage2 = () => {
  const parallax1 = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    translateX: [-10, 0],
  });
  const parallax2 = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    translateX: [0, 0],
  });
  const parallax3 = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    translateX: [10, 0],
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
    <div id="page" style={{ opacity: scrollOpacity }}>
      <div className="image-container">
        <div className="bg-kampus" />
        <div className="image-box" ref={parallax1.ref} onClick={() => handleImageClick("room.jpg")}>
          <img src="room.jpg" alt="FirstImage" className="small-image" />
          <div className="overlay-text">
            <h2 style={{ fontFamily: 'Courier New', fontWeight: 'bold' }}>Discussion room</h2>
          </div>
        </div>
        <div className="image-box" ref={parallax2.ref} onClick={() => handleImageClick("room.jpg")}>
          <img src="room.jpg" alt="SecondImage" className="small-image" />
          <div className="overlay-text">
            <h2 style={{ fontFamily: 'Courier New', fontWeight: 'bold' }}>Sleeping room</h2>
          </div>
        </div>
        <div className="image-box" ref={parallax3.ref} onClick={() => handleImageClick("room.jpg")}>
          <img src="room.jpg" alt="ThirdImage" className="small-image" />
          <div className="overlay-text">
            <h2 style={{ fontFamily: 'Courier New', fontWeight: 'bold' }}>Kitchen</h2>
          </div>
        </div>
      </div>

      {/* Image Modal/Popup */}
      {modalOpen && (
        <div className="modal z-index=60" onClick={handleCloseModal}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedImage} alt="SelectedImage" />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage2;
