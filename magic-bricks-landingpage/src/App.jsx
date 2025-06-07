import React from "react"      
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Listings from "./pages/Listings"
import PropertyDetails from "./pages/PropertyDetails"
import Footer from "./components/Footer" 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
       <Footer /> 
    </BrowserRouter>
  )
}

export default App
