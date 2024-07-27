import './styles/footer.css'
import React from 'react';
import { FaWhatsapp, FaInstagram, FaGoogle } from 'react-icons/fa';

function Footer() {

  const socialMediaUrls = {
    whatsapp: 'your-whatsapp-url',
    instagram: 'your-instagram-url',
    google: 'your-google-url',
  };

  return (
    <>
      <footer className="footer-bottom" style={{ padding: '1rem' }}>
        <div className="md:text-sm text-xs"style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'1rem', color: '#E9E8E7'}}>
          <img src={"../../../logo-kos-rapi.png"} alt="Logo Dago Kos" style={{ maxWidth: '20%', height: 'auto' }} />
          <p className='font-text'>Contact Us: kosmemorialview@gmail.com</p>
          <p className='font-text'>Location: Jl. Dago Asri II No. D12, Dago, Kecamatan Coblong, Bandung, 40135 </p>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <a href={socialMediaUrls.whatsapp} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} className="social-icon" />
            </a>
            <a href={socialMediaUrls.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="social-icon" />
            </a>
            <a href={socialMediaUrls.google} target="_blank" rel="noopener noreferrer">
              <FaGoogle size={30} className="social-icon" />
            </a>
          </div>
        </div>
        <p className="md:text-sm text-xs font-text" style={{ textAlign: 'center', color:"#E9E8E7" }}>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
