import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar1 from './components/Navbar1';
import Login from './components/Login';
import Register from './components/Register'
import Home from './pages/Home';
import Freetheme from './pages/Freetheme';
import Blog from './pages/Blog';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Forgetpass from './components/Forgetpass';
import ProtectedComp from './components/ProtectedComp';
import Game from './pages/Gamepage/Game';
import Game1 from './pages/Gamepage/Game1';
import Game2 from './pages/Gamepage/Game2';
import Game3 from './pages/Gamepage/Game3';
import Game4 from './pages/Gamepage/Game4';
import Game5 from './pages/Gamepage/Game5';
import Game6 from './pages/Gamepage/Game6';
import Game7 from './pages/Gamepage/Game7';
import Puzzle1 from './pages/Puzzlepage/Puzzle1';
import Puzzle2 from './pages/Puzzlepage/Puzzle2';
import Puzzle3 from './pages/Puzzlepage/Puzzle3';
import Chnagerule from './components/Changerule';
import Dashboard from './pages/dashboard/Dashboard';



function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar1/>
        <Routes>
          <Route element={<ProtectedComp />}>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='free' element={<Freetheme />} />
            <Route path='blog' element={<Blog />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='changerule' element={<Chnagerule />} />
            <Route path='freezenova' element={<Game />} />
            <Route path='game1' element={<Game1 />} />
            <Route path='game2' element={<Game2 />} />
            <Route path='game3' element={<Game3 />} />
            <Route path='game4' element={<Game4 />} />
            <Route path='game5' element={<Game5 />} />
            <Route path='game6' element={<Game6 />} />
            <Route path='game7' element={<Game7 />} />
            <Route path='puzzle1' element={<Puzzle1 />} />
            <Route path='puzzle2' element={<Puzzle2 />} />
            <Route path='puzzle3' element={<Puzzle3 />} />
          </Route>
          <Route path='forget' element={<Forgetpass />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;