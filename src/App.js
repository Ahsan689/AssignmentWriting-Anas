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
import Accounting1 from './sample/Accounting1'
import Accounting2 from './sample/Accounting2'
import Accounting3 from './sample/Accounting3'
import Architecture1 from './sample/Architecture1'
import Architecture2 from './sample/Architecture2'
import Architecture3 from './sample/Architecture3'
import Art1 from './sample/Art1'
import Art2 from './sample/Art2'
import Biology1 from './sample/Biology1'
import Biology2 from './sample/Biology2'
import Biology3 from './sample/Biology3'
import Bussiness1 from './sample/Bussiness1'
import Bussiness2 from './sample/Bussiness2'
import Bussiness3 from './sample/Bussiness3'
import ChildCare1 from './sample/ChildCare1'
import ChildCare2 from './sample/ChildCare2'
import ChildCare3 from './sample/ChildCare3'
import ChildCare4 from './sample/ChildCare4'
import Commerce1 from './sample/Commerce1'
import Commerce2 from './sample/Commerce2'
import ComputerScience from './sample/ComputerScience'
import ComputerScience2 from './sample/ComputerScience2'
import Design1 from './sample/Design1'
import Design2 from './sample/Design2'
import Education1 from './sample/Education1'
import Education2 from './sample/Education2'
import Education3 from './sample/Education3'
import Education4 from './sample/Education4'
import Economics1 from './sample/Economics1'
import Economics2 from './sample/Economics2'
import Economics3 from './sample/Economics3'
import Economics4 from './sample/Economics4'
import Employee1 from './sample/Employee1'
import Employee2 from './sample/Employee2'
import Employee3 from './sample/Employee3'
import Engeering1 from './sample/Engeering1'
import Engeneering2 from './sample/Engeneering2'
import Fashion1 from './sample/Fashion1'
import Fashion2 from './sample/Fashion2'
import Fashion3 from './sample/Fashion3'
import Finance1 from './sample/Finance1'
import Finance2 from './sample/Finance2'
import Finance3 from './sample/Finance3'
import Finance4 from './sample/Finance4'
import FoodSafety1 from './sample/FoodSafety1'
import FoodSafety2 from './sample/FoodSafety2'
import GerneralStudies from './sample/GerneralStudies'
import GerneralStudies2 from './sample/GerneralStudies2'
import GerneralStudies3 from './sample/GerneralStudies3'
import GernernalStudies4 from './sample/GernernalStudies4'
import Geography1 from './sample/Geography1'
import Geography2 from './sample/Geography2'
import Health1 from './sample/Health1'
import Health2 from './sample/Health2'
import Health3 from './sample/Health3'
import Health4 from './sample/Health4'
import HealthCare1 from './sample/HealthCare1'
import HealthCare2 from './sample/HealthCare2'
import HealthCare3 from './sample/HealthCare3'
import HealthCare4 from './sample/HealthCare4'
import HumanRight1 from './sample/HumanRight1'
import HumanRight2 from './sample/HumanRight2'
import HumanRight3 from './sample/HumanRight3'
import IndustrialRelation1 from './sample/IndustrialRelation1'
import IndustrialRelation2 from './sample/IndustrialRelation2'
import InformationSystem1 from './sample/InformationSystem1'
import InformationRelation2 from './sample/InformationRelation2'
import InformationSystem3 from './sample/InformationSystem3'
import Language1 from './sample/Language1'
import Language2 from './sample/Language2'
import Language3 from './sample/Language3'
import Law1 from './sample/Law1'
import Law2 from './sample/Law2'
import Law3 from './sample/Law3'
import Law4 from './sample/Law4'
import Leadership1 from './sample/Leadership1'
import Leadership2 from './sample/Leadership2'
import Leadership3 from './sample/Leadership3'
import Management1 from './sample/Management1'
import Management2 from './sample/Management2'
import Management3 from './sample/Management3'
import ManagingPeopleCare1 from './sample/ManagingPeopleCare1'
import ManagingPeopleCare2 from './sample/ManagingPeopleCare2'
import Mathametic1 from './sample/Mathametic1'
import Mathametic2 from './sample/Mathametic2'
import Networking1 from './sample/Networking1'
import Nursing1 from './sample/Nursing1'
import Nursing2 from './sample/Nursing2'
import Nursing3 from './sample/Nursing3'
import Nursing4 from './sample/Nursing4'
import OrganizationBehaviour1 from './sample/OrganizationBehaviour1'
import OrganizationBehaviour2 from './sample/OrganizationBehaviour2'
import OrganizationBehaviour3 from './sample/OrganizationBehaviour3'
import OrganizationBehaviour4 from './sample/OrganizationBehaviour4'
import ProfessionalDevelopment1 from './sample/ProfessionalDevelopment1'
import ProfessionalDevelopment2 from './sample/ProfessionalDevelopment2'
import Philosophy1 from './sample/Philosophy1'
import Philosophy2 from './sample/Philosophy2'
import PlaningGrowth1 from './sample/PlaningGrowth1'
import PlaningGrowth2 from './sample/PlaningGrowth2'
import Religion1 from './sample/Religion1'
import Religion2 from './sample/Religion2'
import SocialMedia1 from './sample/SocialMedia1'
import SocialMedia2 from './sample/SocialMedia2'
import SocialMedia3 from './sample/SocialMedia3'
import SocialPolicy1 from './sample/SocialPolicy1'
import SocialPolicy2 from './sample/SocialPolicy2'
import SocialPolicy3 from './sample/SocialPolicy3'
import Sociology1 from './sample/Sociology1'
import Sociology2 from './sample/Sociology2'
import Sociology3 from './sample/Sociology3'
import Sociology4 from './sample/Sociology4'
import Teacher1 from './sample/Teacher1'
import Teacher2 from './sample/Teacher2'
import Theology1 from './sample/Theology1'
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
          {/* Sample Routes */}
          <Route path="/Accounting1" element={<Accounting1/>}/>
          <Route path="/Accounting2" element={<Accounting2/>}/>
          <Route path="/Accounting3" element={<Accounting3/>}/>
          <Route path="/Architecture1" element={< Architecture1/>}/>
          <Route path="/Architecture2" element={<Architecture2/>}/>
          <Route path="/Architecture3" element={<Architecture3/>}/>
          <Route path="/Art1" element={<Art1/>}/>
          <Route path="/Art2" element={<Art2/>}/>
          <Route path="/Biology1" element={<Biology1/>}/>
          <Route path="/Biology2" element={<Biology2/>}/>
          <Route path="/Biology2" element={<Biology2/>}/>
          <Route path="/Biology3" element={<Biology3/>}/>
          <Route path="/Bussiness1" element={<Bussiness1/>}/>
          <Route path="/Bussiness2" element={<Bussiness2/>}/>
          <Route path="/Bussiness3" element={<Bussiness3/>}/>
          <Route path="/ChildCare1" element={<ChildCare1/>}/>
          <Route path="/ChildCare2" element={<ChildCare2/>}/>
          <Route path="/ChildCare3" element={<ChildCare3/>}/>
          <Route path="/ChildCare4" element={<ChildCare4/>}/>
          <Route path="/Commerce1" element={<Commerce1/>}/>
          <Route path="/Commerce2" element={<Commerce2/>}/>
          <Route path="/Commerce2" element={<Commerce2/>}/>
          <Route path="/ComputerScience" element={<ComputerScience/>}/>
          <Route path="/ComputerScience2" element={<ComputerScience2/>}/>
          <Route path="/Design1" element={<Design1/>}/>
          <Route path="/Design2" element={<Design2/>}/>
          <Route path="/Education1" element={<Education1/>}/>
          <Route path="Education2" element={<Education2/>}/>
          <Route path="/Education3" element={<Education3/>}/>
          <Route path="/Education4" element={<Education4/>}/>
          <Route path="/Economics1" element={<Economics1/>}/>
          <Route path="/Economics2" element={<Economics2/>}/>
          <Route path="/Economics3" element={<Economics3/>}/>
          <Route path="/Economics4" element={<Economics4/>}/>
          <Route path="/Employee1" element={<Employee1/>}/>
          <Route path="/Employee2" element={<Employee2/>}/>
          <Route path="/Employee3" element={<Employee3/>}/>
          <Route path="/Engeering1" element={<Engeering1/>}/>
          <Route path="/Engeneering2" element={<Engeneering2/>}/>
          <Route path="/Fashion1" element={<Fashion1/>}/>
          <Route path="/Fashion2" element={<Fashion2/>}/>
          <Route path="/Fashion3" element={<Fashion3/>}/>
          <Route path="/Finance1" element={<Finance1/>}/>
          <Route path="/Finance2" element={<Finance2/>}/>
          <Route path="/Finance3" element={<Finance3/>}/>
          <Route path="/Finance4" element={<Finance4/>}/>
          <Route path="/FoodSafety1" element={<FoodSafety1/>}/>
          <Route path="/FoodSafety2" element={<FoodSafety2/>}/>
          <Route path="/GerneralStudies" element={<GerneralStudies/>}/>
          <Route path="/GerneralStudies2" element={<GerneralStudies2/>}/>
          <Route path="/GerneralStudies3" element={<GerneralStudies3/>}/>
          <Route path="/GernernalStudies4" element={<GernernalStudies4/>}/>
          <Route path="/Geography1" element={<Geography1/>}/>
          <Route path="/Geography2" element={<Geography2/>}/>
          <Route path="/Health1" element={<Health1/>}/>
          <Route path="/Health2" element={<Health2/>}/>
          <Route path="/Health3" element={<Health3/>}/>
          <Route path="/Health4" element={<Health4/>}/>
          <Route path="/HealthCare1" element={<HealthCare1/>}/>
          <Route path="/HealthCare2" element={<HealthCare2/>}/>
          <Route path="/HealthCare3" element={<HealthCare3/>}/>
          <Route path="/HealthCare4" element={<HealthCare4/>}/>
          <Route path="/HumanRight1" element={<HumanRight1/>}/>
          <Route path="/HumanRight2" element={<HumanRight2/>}/>
          <Route path="/HumanRight3" element={<HumanRight3/>}/>
          <Route path="/IndustrialRelation1" element={<IndustrialRelation1/>}/>
          <Route path="/IndustrialRelation2" element={<IndustrialRelation2/>}/>
          <Route path="/InformationSystem1" element={<InformationSystem1/>}/>
          <Route path="/InformationRelation2" element={<InformationRelation2/>}/>
          <Route path="/InformationSystem3" element={<InformationSystem3/>}/>
          <Route path="/Language1" element={<Language1/>}/>
          <Route path="/Language2" element={<Language2/>}/>
          <Route path="/Language3" element={<Language3/>}/>
          <Route path="/Law1" element={<Law1/>}/>
          <Route path="/Law2" element={<Law2/>}/>
          <Route path="/Law3" element={<Law3/>}/>
          <Route path="/Law4" element={<Law4/>}/>
          <Route path="/Leadership1" element={<Leadership1/>}/>
          <Route path="/Leadership2" element={<Leadership2/>}/>
          <Route path="/Leadership3" element={<Leadership3/>}/>
          <Route path="/Management1" element={<Management1/>}/>
          <Route path="/Management2" element={< Management2/>}/>
          <Route path="/Management3" element={<Management3/>}/>
          <Route path="/ManagingPeopleCare1" element={<ManagingPeopleCare1/>}/>
          <Route path="/ManagingPeopleCare2" element={<ManagingPeopleCare2/>}/>
          <Route path="/Mathametic1" element={<Mathametic1/>}/>
          <Route path="/Mathametic2" element={<Mathametic2/>}/>
          <Route path="/Networking1" element={<Networking1/>}/>
          <Route path="/Nursing1" element={<Nursing1/>}/>
          <Route path="/Nursing2" element={<Nursing2/>}/>
          <Route path="/Nursing3" element={<Nursing3/>}/>
          <Route path="/Nursing4" element={<Nursing4/>}/>
          <Route path="/OrganizationBehaviour1" element={<OrganizationBehaviour1/>}/>
          <Route path="/OrganizationBehaviour2" element={<OrganizationBehaviour2/>}/>
          <Route path="/OrganizationBehaviour3" element={<OrganizationBehaviour3/>}/>
          <Route path="/OrganizationBehaviour4" element={<OrganizationBehaviour4/>}/>
          <Route path="/ProfessionalDevelopment1" element={<ProfessionalDevelopment1/>}/>
          <Route path="/ProfessionalDevelopment2" element={<ProfessionalDevelopment2/>}/>
          <Route path="/Philosophy1" element={<Philosophy1/>}/>
          <Route path="/Philosophy2" element={<Philosophy2/>}/>
          <Route path="/PlaningGrowth1" element={<PlaningGrowth1/>}/>
          <Route path="/PlaningGrowth2" element={<PlaningGrowth2/>}/>
          <Route path="/Religion1" element={<Religion1/>}/>
          <Route path="/Religion2" element={<Religion2/>}/>
          <Route path="/SocialMedia1" element={<SocialMedia1/>}/>
          <Route path="/SocialMedia2" element={<SocialMedia2/>}/>
          <Route path="/SocialMedia3" element={<SocialMedia3/>}/>
          <Route path="/SocialPolicy1" element={<SocialPolicy1/>}/>
          <Route path="/SocialPolicy2" element={<SocialPolicy2/>}/>
          <Route path="/SocialPolicy3" element={<SocialPolicy3/>}/>
          <Route path="/Sociology1" element={<Sociology1/>}/>
          <Route path="/Sociology2" element={<Sociology2/>}/>
          <Route path="/Sociology3" element={<Sociology3/>}/>
          <Route path="/Sociology4" element={<Sociology4/>}/>
          <Route path="/Teacher1" element={<Teacher1/>}/>
          <Route path="/Teacher2" element={<Teacher2/>}/>
          <Route path="/Theology1" element={<Theology1/>}/>





















































          
































































        </Routes>
      </BrowserRouter>
   
    </div>
  )
}
