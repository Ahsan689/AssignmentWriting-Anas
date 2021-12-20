import React from 'react'
import Home from './Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ContactUs from './ContectUS'
import AboutUs from './AboutUs'
import Review from './Review'
import FAQs from './FAQs'
import Experts from './Experts'
import Portfolio from './Portfolio'
import Sample from '../src/sample/Sample'
import PhilosophyAssignment from './services/PhilosophyAssignment'
import NursingAssignment from './services/NursingAssignment'
import PhysicsAssignment from '../src/services/PhysicsAssignment'
import ProgrammingAssignment from './services/ProgrammingAssignment'
import PhychologyAssignment from './services/PsychologyAssignment'
import SociologyAssignment from './services/SociologyAssignment'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/review" element={<Review/>}/>
          <Route path="/faq" element={<FAQs/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/Experts" element={<Experts/>}/>
          <Route path="/Sample" element={<Sample/>}/>
            {/* service Routes */}
          <Route path="/philosophy" element={<PhilosophyAssignment/>}/>
          <Route path="/PhysicsAssignment" element={<PhysicsAssignment/>}/>
          <Route path="/NursingAssignment" element={<NursingAssignment/>}/>
          <Route path="/ProgrammingAssignment" element={<ProgrammingAssignment/>}/>
          <Route path="/PhychologyAssignment" element={<PhychologyAssignment/>}/>
          <Route path="/SociologyAssignment" element={<SociologyAssignment/>}/>


        </Routes>
      </BrowserRouter>
   
    </div>
  )
}
