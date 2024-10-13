import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Breakfast from './pages/Breakfast';
import Lunch from './pages/Lunch';
import Dinner from './pages/Dinner';
import Cuisines from './pages/Cuisines';
import AddRecipe from './pages/AddRecipe';
import Footer from './components/Footer';
function App() {
  return (
    <>
        <div className="App">
        <Router>
          <Navbar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/breakfast" element={<Breakfast />} />
              <Route path="/lunch" element={<Lunch />} />
              <Route path="/dinner" element={<Dinner />} />
              <Route path="/cuisines" element={<Cuisines />} />
              <Route path="/addrecipe" element={<AddRecipe />} />
            </Routes>
        </Router>
        <Footer />
        </div>
    </>
  )
}

export default App
