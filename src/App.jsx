import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'; 
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Compare from './pages/Compare/Compare';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import TruckDetails from './pages/TruckDetails/TruckDetails';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<TruckDetails />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer /> 
    </>
  );
}

export default App;