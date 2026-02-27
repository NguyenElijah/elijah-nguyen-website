import './App.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Hobbies from './Hobbies/Hobbies';

function App() { 

  return (
    <main >
      <BrowserRouter>   
        <Header />
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Hobbies/" element={<Hobbies />} />
            <Route path="/Hobbies/*" element={<Navigate to="/Hobbies/" replace />} />
            <Route path="*"  element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />      
        </div>
      </BrowserRouter>
    </main>
  )
}

export default  App
