import './styles/footer.css'
import React from 'react';
import { FaWhatsapp, FaInstagram, FaGoogle } from 'react-icons/fa';


function Footer () {

    const socialMediaUrls = {
        whatsapp: 'your-whatsapp-url',
        instagram: 'your-instagram-url',
        google: 'your-google-url',
       };

    const toggleFuntion = () => {

    }

    return (
        <footer className="footer-bottom" style={{ backgroundColor: '#d3d3d3', padding: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
            <img src={"../../../logo_dago_kos.png"} alt="Logo Dago Kos" style={{ maxWidth: '30%', height: 'auto' }}/>
            <p>Contact Us: cozykos@gmail.com</p>
            <p>Location: Dago, Kecamatan Coblong, Kota Bandung, Jawa Barat 40135</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <FaWhatsapp size={30} className="social-icon" />
              <a href={socialMediaUrls.whatsapp} target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className="social-icon" />
              </a>
              <a href={socialMediaUrls.instagram} target="_blank" rel="noopener noreferrer">
                <FaGoogle size={30} className="social-icon" />
              </a>
            </div>
          </div>
          <p style={{ textAlign: 'center' }}>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </footer>
     );
    }

export default Footer