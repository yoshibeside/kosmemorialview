import './styles/home.css'
function Home() {
    return(<> 
            <div id="header">
            </div>
            <video autoPlay id="video-background" muted loop>
                <source src="../../../luxury_kos.mp4" type="video/mp4" />
            </video>
            <div id="header-page">
                <h1 className='header-text text-header-color'>Uni Lodge</h1>
                <p className='header-child-text text-p-color'>Find your dream room with us. </p>
                <p className='header-child-text text-p-color'>We have a lot of rooms for you to choose from.</p>
                <button className='header-child-button border-button-color-hover text-p-color bg-button-color hover:bg-button-color-hover'>Find your room</button>
            </div>
    </>)
}

export default Home;