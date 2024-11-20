import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Occasions from './pages/Occasions';
import TopPicks from './pages/TopPicks';
import Profile from './pages/Profile';
import AddRecipe from './pages/AddRecipe';
import RecipeDetails from './pages/RecipeDetails';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <>
        <div className="App">
          <Router>
            <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/topPicks" element={<TopPicks />} />
                <Route path="/occasions" element={<Occasions />} />
                <Route path="/addrecipe" element={<AddRecipe />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search-results" element={<SearchResults />} />
                <Route path="/recipe/:id" element={<RecipeDetails />} />
              </Routes>
              <Footer />  
          </Router>
        </div>
    </>
  )
}

export default App
