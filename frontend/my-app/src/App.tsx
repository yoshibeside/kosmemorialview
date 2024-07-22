import './App.css';
import Landingpage from './pages/landingpage';
import Navbar from './components/navbar';
import ProtectedRoute from './pages/protectedpage';
import { Routes, Route, BrowserRouter as Router  } from "react-router-dom";
import Floorplan from './pages/floorplan';


function App() {
 return (
    <div id="body-content">
        <Navbar />
        <Router>
            <Routes>
                <Route path="/" element={<Landingpage />} />
                <Route path="/floorplan" element={<Floorplan />} />
                <Route path="*" element={<ProtectedRoute />} />
            </Routes>
        </Router>
    </div>
 );
}

export default App;

