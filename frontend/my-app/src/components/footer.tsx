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
      <div style={{ height: '300px', width: '100%' }}>
        <iframe
          title="OpenStreetMap"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${107.6094732284546}%2C${-6.885962926014352}%2C${107.62093639373779}%2C${-6.868854214389994}&layer=mapnik&marker=${-6.877408570202181}%2C${107.61469979463256}`}
          allowFullScreen
        ></iframe>
      </div>

      <footer className="footer-bottom" style={{ backgroundColor: '#d3d3d3', padding: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={"../../../ahsoska_logo.png"} alt="Logo Dago Kos" style={{ maxWidth: '20%', height: 'auto' }} />
          <p>Contact Us: cozykos@gmail.com</p>
          <p>Location: Dago, Kecamatan Coblong, Kota Bandung, Jawa Barat 40135</p>
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
        <p style={{ textAlign: 'center' }}>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
