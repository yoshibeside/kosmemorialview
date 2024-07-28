import './App.css';
import Landingpage from './pages/landingpage';
import Navbar from './components/navbar';
import ProtectedRoute from './pages/protectedpage';
import { Routes, Route, HashRouter as Router  } from "react-router-dom";
import Floorplan from './pages/floorplan';
import Amenities from './pages/amenities';
import Contact from './pages/contact';


function App() {

 return (
    <div id="body-content">
        <Router>
            <Routes>
                <Route path="/" element={<Landingpage />} />
                <Route path="/floorplan" element={<Floorplan />} />
                <Route path='/amenities' element={<Amenities />} />
                <Route path='/contact' element={<Contact />} />
                <Route path="*" element={<ProtectedRoute />} />
            </Routes>
        </Router>
    </div>
 );
}

export default App;

