import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import ListAHome from './pages/ListAHome';
import BuyAHome from './pages/BuyAHome';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/list-a-home" element={ <ListAHome/> } />
        <Route path="/buy-a-home" element={ <BuyAHome/> } />
      </Routes>
    </div>
  );
}

export default App;
