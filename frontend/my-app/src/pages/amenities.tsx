import './styles/amenities.css'

function Amenities() {

    const list_amenities = ['alkdjflkajd', 'sldkflsdj', 'sldkflsdj', 'sldkflsdj', 'alkdjflkajd', 'sldkflsdj', 'sldkflsdj', 'sldkflsdj', 'alkdjflkajd', 'sldkflsdj', 'sldkflsdj', 'sldkflsdj', 'alkdjflkajd', 'sldkflsdj', 'sldkflsdj', 'sldkflsdj']

    return(<> 
            <div className='w-full h-full flex flex-col items-center pb-8 justify-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                <div className='headerpage'>
                    <h1 className='text-header-color md:text-7xl text-5xl font-serif'>Amenities</h1>
                </div>
                <div className='grid my-12 container md:grid-cols-3 grid-cols-2'>
                    <div className='mx-1/4 grid md:grid-4 grid-2'>
                        {list_amenities.map((amenity, index) => {
                            return <li key={index} className='text-p-color font-text'>{amenity}</li>
                        })}
                    </div>
                    <div className='mx-8'>
                        {list_amenities.map((amenity, index) => {
                            return <li key={index} className='text-p-color font-text'>{amenity}</li>
                        })}
                    </div>
                    <div className='mx-8'>
                        {list_amenities.map((amenity, index) => {
                            return <li key={index} className='text-p-color font-text'>{amenity}</li>
                        })}
                    </div>
                </div>

                <div className='grid md:grid-cols-3 grid-cols-1 container gap-4'>
                <img src='./denah1.jpg' alt='floorplan' className='w-10/12 h-48'/>
                <img src='./denah2.jpg' alt='floorplan' className='w-10/12 h-48'/>
                <img src='./denah1.jpg' alt='floorplan' className='w-10/12 h-48'/>
                <img src='./denah2.jpg' alt='floorplan' className='w-10/12 h-48'/>
                <img src='./denah1.jpg' alt='floorplan' className='w-10/12 h-48'/>
                <img src='./denah1.jpg' alt='floorplan' className='w-10/12 h-48'/>
                <img src='./denah1.jpg' alt='floorplan' className='w-10/12 h-48'/>
                <img src='./denah1.jpg' alt='floorplan' className='w-10/12 h-48'/>
                <img src='./denah1.jpg' alt='floorplan' className='w-10/12 h-48'/>

                </div>

                

                
            </div>
    </>)
}

export default Amenities;