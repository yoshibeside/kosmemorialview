import './styles/amenities.css'
import Footer from '../components/footer';

function Amenities() {

    const list_amenities = ['Roof Top', 'Common Room setiap lantai', 'Laundry', 'Parkir', 'Teras Depan', 'Pantry setiap lantai', 'Security 24 jam', 'Akses khusus untuk penghuni', 'Balkoni pada setiap kamar', 'Kulkas pada setiap lantai', 'Dispenser pada setiap lantai', 'AC pada setiap kamar', 'CCTV']

    return(<> 
            <div className='w-full h-full flex flex-col items-center pb-8 justify-center' style={{ backgroundImage: 'linear-gradient( rgb(28, 29, 31), #544f3f)'}}>
                <div className='headerpage'>
                    <h1 className='text-header-color md:text-7xl text-5xl font-serif'>Amenities</h1>
                </div>
                <div className='grid my-12 container md:grid-cols-3 grid-cols-2 justify-self-left1'>

                        {list_amenities.map((amenity, index) => {
                            return <li key={index} className='text-p-color font-text'>{amenity}</li>
                        })}
                    
                </div>

                <div className='grid md:grid-cols-3 grid-cols-1 container gap-4'>
                <img src='./rooftop1.jpg' alt='floorplan' className='w-10/12 h-48'/>
                <img src='./rooftop2.jpg' alt='floorplan' className='w-10/12 h-48'/>
                <img src='./rooftop3.jpg' alt='floorplan' className='w-10/12 h-48'/>
                <img src='./basement.jpg' alt='floorplan' className='w-10/12 h-48'/>
                <img src='./terasdepan.jpg' alt='floorplan' className='w-10/12 h-48'/>
                <img src='./kitchen.jpg' alt='floorplan' className='w-10/12 h-48'/>
                <img src='./window.jpg' alt='floorplan' className='w-10/12 h-48'/>
                <img src='./airkulkas.jpg' alt='floorplan' className='w-10/12 h-48'/>
                <img src='./laundry.jpg' alt='floorplan' className='w-10/12 h-48'/>

                </div>

                

                
            </div>
            <Footer />
    </>)
}

export default Amenities;