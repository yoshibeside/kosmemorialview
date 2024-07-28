import './styles/amenities.css'
import '../components/styles/homePage2.css'
import Footer from '../components/footer';
import { useState } from 'react';
import Navbar from '../components/navbar';
import rooftop1 from '../assets/images/rooftop1.png'
import rooftop2 from '../assets/images/rooftop2.png'
import rooftop3 from '../assets/images/rooftop3.png'
import basement from '../assets/images/basement.png'
import terasdepan from '../assets/images/terasdepan.png'
import kitchen from '../assets/images/kitchen.png'
import window from '../assets/images/window.png'
import airkulkas from '../assets/images/airkulkas.png'
import laundry from '../assets/images/laundry.png'

function Amenities() {

    const list_amenities = ['Roof Top', 'Common Room setiap lantai', 'Laundry', 'Parkir', 'Teras Depan', 'Pantry setiap lantai', 'Security 24 jam', 'Akses khusus untuk penghuni', 'Balkoni pada setiap kamar', 'Kulkas pada setiap lantai', 'Dispenser pada setiap lantai', 'AC pada setiap kamar', 'CCTV']
    const [selectedImage, setSelectedImage] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const handleImageClick = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setModalOpen(false);
      };

    return(<> 
            <Navbar />
            <div className='w-full h-full flex flex-col items-center pb-8 justify-center bg-amenities'>
                <div className='headerpage'>
                    <h1 className='text-header-color md:text-7xl text-5xl font-martionmono font-semibold'>Amenities</h1>
                </div>
                <div className='grid my-12 container md:grid-cols-3 grid-cols-2 justify-self-left1'>

                        {list_amenities.map((amenity, index) => {
                            return <li key={index} className='text-p-color font-text'>{amenity}</li>
                        })}
                    
                </div>

                <div className='grid md:grid-cols-3 grid-cols-1 container gap-4'>
                <img onClick={()=>handleImageClick(rooftop1)} src={rooftop1} alt='floorplan' className='hover-animate w-10/12 h-48'/>
                <img onClick={()=>handleImageClick(rooftop2)} src={rooftop2} alt='floorplan' className='w-10/12 h-48 hover-animate'/>
                <img onClick={()=>handleImageClick(rooftop3)} src={rooftop3} alt='floorplan' className='w-10/12 h-48 hover-animate'/>
                <img onClick={()=>handleImageClick(basement)} src={basement} alt='floorplan' className='w-10/12 h-48 hover-animate'/>
                <img onClick={()=>handleImageClick(terasdepan)} src={terasdepan} alt='floorplan' className='w-10/12 h-48 hover-animate'/>
                <img onClick={()=>handleImageClick(kitchen)} src={kitchen} alt='floorplan' className='w-10/12 h-48 hover-animate'/>
                <img onClick={()=>handleImageClick(window)} src={window} alt='floorplan' className='w-10/12 h-48 hover-animate'/>
                <img onClick={()=>handleImageClick(airkulkas)} src={airkulkas} alt='floorplan' className='w-10/12 h-48 hover-animate'/>
                <img onClick={()=>handleImageClick(laundry)} src={laundry} alt='floorplan' className='w-10/12 h-48 hover-animate'/>

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
            <Footer />
    </>)
}

export default Amenities;