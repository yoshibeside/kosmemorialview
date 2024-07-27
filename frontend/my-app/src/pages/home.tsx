import './styles/home.css'
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    return(<> 
            <div id="header" >
            </div>
            <video autoPlay id="video-background" muted loop >
                <source src="../../../video for website.mp4" type="video/mp4" />
            </video>
            <div id="header-page">
                <h1 className='text-header-color md:text-7xl text-5xl font-martionmono font-semibold'>University Lodge</h1>
                <p className='header-child-text text-p-color text-lg font-text'>Find your dream room with us. </p>
                <p className='header-child-text text-p-color text-lg font-text'>We have a lot of rooms for you to choose from.</p>
                <button onClick={()=>navigate("/floorplan")} className='header-child-button border-button-color-hover text-lg text-p-color bg-button-color hover:bg-button-color-hover p-2'>Find your room</button>
            </div>
    </>)
}

export default Home;