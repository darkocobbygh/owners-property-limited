import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import ListAHome from './pages/ListAHome';
import BuyAHome from './pages/BuyAHome';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Services from './pages/Services'
import About from './pages/About'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/list-a-home" element={ <ListAHome/> } />
        <Route path="/buy-a-home" element={ <BuyAHome/> } />
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about-us' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
