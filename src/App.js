import React from 'react'
import Home from './Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ContactUs from './ContectUS'
import AboutUs from './AboutUs'
import Reviews from './Reviews'
import FAQs from './FAQs'

// SERVICES SECTION

import PhilosophyAssignment from './services/PhilosophyAssignment'
import PhysicsAssignment from './services/PhysicsAssignment'
import ProgrammingAssignment from './services/ProgrammingAssignment'
import PsychologyAssignment from './services/PsychologyAssignment'
import SociologyAssignment from './services/SociologyAssignment'
import StatisticsAssignment from './services/StatisticsAssignment'
import NursingAssignment from './services/NursingAssignment'
import ManagementAssignment from './services/ManagementAssignment'
import LinguisticAssignment from './services/LinguisticAssignment'
import ComputerScienceAssignment from './services/ComputerScienceAssignment'
import BussinessAssignment from './services/BussinessAssignment'
import AccountingAssignment from './services/AccountingAssignment'
import FinanceAssignment from './services/FinanceAssignment'
import EconomicsAssignment from './services/EconomicsAssignment'
import HistoryAssignment from './services/HistoryAssignment'
import GeographyAssignment from './services/GeographyAssignment'
import LawAssignment from './services/LawAssignment'
import ChemistryAssignment from './services/ChemistryAssignment'
import MathAssignment from './services/MathAssignment'
import ITAssignment from './services/ITAssignment'
import EngineeringAssignment from './services/EngineeringAssignment'
import EnglishAssignment from './services/EnglishAssignment'
import BiologyAssignment from './services/BiologyAssignment'
import MarketingAssignment from './services/MarketingAssignment'
import Header from './components/Header'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
          <Route path="/faq" element={<FAQs/>}/>

          {/* Servicessss SECTION */}
          <Route path="/PhilosophyAssignment" element={<PhilosophyAssignment/>}/>
          <Route path="/PhysicsAssignment" element={<PhysicsAssignment/>}/>
          <Route path="/ProgrammingAssignment" element={<ProgrammingAssignment/>}/>
          <Route path="/PsychologyAssignment" element={<PsychologyAssignment/>}/>
          <Route path="/SociologyAssignment" element={<SociologyAssignment/>}/>
          <Route path="/StatisticsAssignment" element={<StatisticsAssignment/>}/>
          <Route path="/NursingAssignment" element={<NursingAssignment/>}/>
          <Route path="/ManagementAssignment" element={<ManagementAssignment/>}/>
          <Route path="/LinguisticAssignment" element={<LinguisticAssignment/>}/>
          <Route path="/ComputerScienceAssignment" element={<ComputerScienceAssignment/>}/>
          <Route path="/BussinessAssignment" element={<BussinessAssignment/>}/>
          <Route path="/AccountingAssignment" element={<AccountingAssignment/>}/>
          <Route path="/FinanceAssignment" element={<FinanceAssignment/>}/>
          <Route path="/EconomicsAssignment" element={<EconomicsAssignment/>}/>
          <Route path="/HistoryAssignment" element={<HistoryAssignment/>}/>
          <Route path="/GeographyAssignment" element={<GeographyAssignment/>}/>
          <Route path="/LawAssignment" element={<LawAssignment/>}/>
          <Route path="/ChemistryAssignment" element={<ChemistryAssignment/>}/>
          <Route path="/MathAssignment" element={<MathAssignment/>}/>
          <Route path="/ITAssignment" element={<ITAssignment/>}/>
          <Route path="/EngineeringAssignment" element={<EngineeringAssignment/>}/>
          <Route path="/EnglishAssignment" element={<EnglishAssignment/>}/>
          <Route path="/BiologyAssignment" element={<BiologyAssignment/>}/>
          <Route path="/MarketingAssignment" element={<MarketingAssignment/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
