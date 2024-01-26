import './App.css';
import Footer from './components/footer'
import Navbar from './components/navbar';
import Home from './pages/home';
import HomePage2 from './components/homePage2';
import Location from './pages/location';


function App() {
 return (
    <div id="body-content">
        <Navbar />
        <Home />
        <HomePage2 />
        <Location />
        <Footer />
    </div>
 );
}

export default App;

