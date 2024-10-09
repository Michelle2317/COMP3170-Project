import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Breakfast from './pages/Breakfast';
import Lunch from './pages/Lunch';
import Dinner from './pages/Dinner';
import Cuisines from './pages/Cuisines';

function App() {
  return (
    <>
        <div className="App">
        <Router>
          <Navbar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/breakfast" element={<Breakfast />} />
              <Route path="/lunch" element={<Lunch />} />
              <Route path="/dinner" element={<Dinner />} />
              <Route path="/cuisines" element={<Cuisines />} />
            </Routes>
        </Router>
        </div>
    </>
  )
}

export default App
