import './styles/home.css'
function Home() {
    return(<> 
            <div id="header" >
            </div>
            <video autoPlay id="video-background" muted loop >
                <source src="../../../vid_teaser_kos.mp4" type="video/mp4" />
            </video>
            <div id="header-page">
                <h1 className='text-header-color md:text-7xl text-5xl font-serif'>Uni Lodge</h1>
                <p className='header-child-text text-p-color text-lg'>Find your dream room with us. </p>
                <p className='header-child-text text-p-color text-lg'>We have a lot of rooms for you to choose from.</p>
                <button className='header-child-button border-button-color-hover text-lg text-p-color bg-button-color hover:bg-button-color-hover p-2'>Find your room</button>
            </div>
    </>)
}

export default Home;