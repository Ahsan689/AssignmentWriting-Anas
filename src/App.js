import React from 'react'
import Home from './Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ContactUs from './ContectUS'
import AboutUs from './AboutUs'
import Reviews from './Reviews'
import FAQs from './FAQs'
import PhilosophyAssignment from './services/PhilosophyAssignment'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
          <Route path="/faq" element={<FAQs/>}/>
          <Route path="/philosophy" element={<PhilosophyAssignment/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
