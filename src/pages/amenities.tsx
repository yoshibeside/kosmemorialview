import './styles/amenities.css'
import '../components/styles/homePage2.css'
import Footer from '../components/footer';
import { useState } from 'react';
import Navbar from '../components/navbar';

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
                <img onClick={()=>handleImageClick("rooftop1.png")} src='./rooftop1.png' alt='floorplan' className='hover-animate w-10/12 h-48'/>
                <img onClick={()=>handleImageClick("rooftop2.png")} src='./rooftop2.png' alt='floorplan' className='w-10/12 h-48 hover-animate'/>
                <img onClick={()=>handleImageClick("rooftop3.png")} src='./rooftop3.png' alt='floorplan' className='w-10/12 h-48 hover-animate'/>
                <img onClick={()=>handleImageClick("basement.png")} src='./basement.png' alt='floorplan' className='w-10/12 h-48 hover-animate'/>
                <img onClick={()=>handleImageClick("terasdepan.png")} src='./terasdepan.png' alt='floorplan' className='w-10/12 h-48 hover-animate'/>
                <img onClick={()=>handleImageClick("kitchen.png")} src='./kitchen.png' alt='floorplan' className='w-10/12 h-48 hover-animate'/>
                <img onClick={()=>handleImageClick("window.png")} src='./window.png' alt='floorplan' className='w-10/12 h-48 hover-animate'/>
                <img onClick={()=>handleImageClick("airkulkas.png")} src='./airkulkas.png' alt='floorplan' className='w-10/12 h-48 hover-animate'/>
                <img onClick={()=>handleImageClick("laundry.png")} src='./laundry.png' alt='floorplan' className='w-10/12 h-48 hover-animate'/>

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