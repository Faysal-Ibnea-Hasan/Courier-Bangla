import React from 'react'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Support from './components/Support';
import Footer from './components/Footer';
import Order from './components/Order';


function App() {
  return (
    <>
      <Router>

        <Navbar />



        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="about" element={<About />}></Route>
          <Route exact path="services" element={<Services />}></Route>
          <Route exact path="support" element={<Support />}></Route>
          <Route exact path="order" element={<Order />}></Route>
          <Route exact path="login" element={<Login />}></Route>
          <Route exact path="signup" element={<Signup />}></Route>
        </Routes>
        <Footer />




      </Router>
    </>
  )
}

export default App