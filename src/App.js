import './App.css';
import Navigation from './components/Navigation/Navigation';
import Standard from './components/Standard/Standard';
import Temperature from './components/Temperature/Temperature';
import VML from './components/Volume,Mass,Length/VML';
import Time from './components/Time/Time';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import { useState } from 'react';

function App() {

  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 2000)

  return (
    <>
      {loader ? <Loader /> :
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/standard" element={<Standard />}></Route>
            <Route path="/vml" element={<VML />}></Route>
            <Route path="/temperature" element={<Temperature />}></Route>
            <Route path="/time" element={<Time />}></Route>
          </Routes>
        </Router>
      }
    </>
  );
}

export default App;
