import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import PokeDetails from './components/PokeDetails'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path="/pokemon/:id" element={<PokeDetails /> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


const RecipeInfo = () => {
  const { id } = useParams();
  const { data: recipe, isLoading, } = useFetch('http://localhost:3001/recipes/' + id);