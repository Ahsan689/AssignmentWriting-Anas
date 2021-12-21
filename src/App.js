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
import StatisticsAssignment from './services/Statistics'
import ManagementAssignment from './services/ManagementAssignment'
import LinguisticsAssignment from './services/LinguisticsAssignment'
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
import EngeneeringAssignment from './services/EngeneeringAssignment'
import EnglishAssignment from './services/EnglishAssignment'
import BiologyAssignment from './services/BiologyAssignment'
import MarketingAssignment from './services/MarketingAssignment'
import RefundPolicy from './RefundPolicy'
import CencellationPolicy from './CencellationPolicy'
import TermConditions from './TermConditions'
import ReferFriend from './ReferFriend'
import PrivicyPolicy from './PrivicyPolicy'
import UsagePolicy from './UsagePolicy'
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
          <Route path="/StatisticsAssignment" element={<StatisticsAssignment/>}/>
          <Route path="/ManagementAssignment" element={<ManagementAssignment/>}/>
          <Route path="/LinguisticsAssignment" element={<LinguisticsAssignment/>}/>
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
          <Route path="/EngeneeringAssignment" element={<EngeneeringAssignment/>}/>
          <Route path="/EnglishAssignment" element={<EnglishAssignment/>}/>
          <Route path="/BiologyAssignment" element={<BiologyAssignment/>}/>
          <Route path="/MarketingAssignment" element={<MarketingAssignment/>}/>
          <Route path="/RefundPolicy" element={<RefundPolicy/>}/>
          <Route path="/CencellationPolicy" element={<CencellationPolicy />}/>
          <Route path="/TermConditions" element={<TermConditions/>}/>
          <Route path="/ReferFriend" element={<ReferFriend/>}/>
          <Route path="/PrivicyPolicy" element={<PrivicyPolicy/>}/>
          <Route path="/UsagePolicy" element={<UsagePolicy/>}/>









        </Routes>
      </BrowserRouter>
   
    </div>
  )
}
