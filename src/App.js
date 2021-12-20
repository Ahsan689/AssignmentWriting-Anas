import React from 'react'
import Home from './Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ContactUs from './ContectUS'
import AboutUs from './AboutUs'
import Reviews from './Reviews'
import FAQs from './FAQs'
import SampleComponent from './samples/SampleComponent'
import "bootstrap/dist/css/bootstrap.min.css";
import './AppNew.css'

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

////////////////////  Card and Content Components  /////////////////////

import AccountCardComp from "./samples/sample_components/Accounting/AccountCardComp";
import AccountContentComp1 from "./samples/sample_components/Accounting/AccountContentComp1";
import AccountContentComp2 from "./samples/sample_components/Accounting/AccountContentComp2";

import ArchitecCardComp from "./samples/sample_components/Architecture/ArchitecCardComp";
import ArchitecContentComp1 from "./samples/sample_components/Architecture/ArchitecContentComp1";
import ArchitecContentComp2 from "./samples/sample_components/Architecture/ArchitecContentComp2";

import ArtsCardComp from "./samples/sample_components/Arts/ArtsCardComp";
import ArtsContentComp1 from "./samples/sample_components/Arts/ArtsContentComp1";

import BiologyCardComp from "./samples/sample_components/Biology/BiologyCardComp";
import BiologyContentComp1 from "./samples/sample_components/Biology/BiologyContentComp1";
import BiologyContentComp2 from "./samples/sample_components/Biology/BiologyContentComp2";

import BusinessCardComp from "./samples/sample_components/Business/BusinessCardComp";
import BusinessContentComp1 from "./samples/sample_components/Business//BusinessContentComp1";
import BusinessContentComp2 from "./samples/sample_components/Business//BusinessContentComp2";

import ChildcareCardComp from "./samples/sample_components/Childcare/ChildcareCardComp";
import ChildcareContentComp1 from "./samples/sample_components/Childcare/ChildcareContentComp1";
import ChildcareContentComp2 from "./samples/sample_components/Childcare/ChildcareContentComp2";
import ChildcareContentComp3 from "./samples/sample_components/Childcare/ChildcareContentComp3";

import CommerceCardComp from "./samples/sample_components/Commerce/CommerceCardComp";
import CommerceContentComp1 from "./samples/sample_components/Commerce/CommerceContentComp1";

import ComputerScienceCardComp from "./samples/sample_components/Computer_Science/ComputerScienceCardComp";
import ComputerScienceContentComp1 from "./samples/sample_components/Computer_Science/ComputerScienceContentComp1";

import DesignCardComp from "./samples/sample_components/Design/DesignCardComp";
import DesignContentComp1 from "./samples/sample_components/Design/DesignContentComp1";

import EconomicsCardComp from "./samples/sample_components/Economics/EconomicsCardComp";
import EconomicsContentComp1 from "./samples/sample_components/Economics/EconomicsContentComp1";
import EconomicsContentComp2 from "./samples/sample_components/Economics/EconomicsContentComp2";
import EconomicsContentComp3 from "./samples/sample_components/Economics/EconomicsContentComp3";

import EducationCardComp from "./samples/sample_components/Education/EducationCardComp";
import EducationContentComp1 from "./samples/sample_components/Education/EducationContentComp1";
import EducationContentComp2 from "./samples/sample_components/Education/EducationContentComp2";
import EducationContentComp3 from "./samples/sample_components/Education/EducationContentComp3";

import EmployeeRelationCardComp from "./samples/sample_components/Employee_relations/EmployeeRelationCardComp";
import EmployeeRelationContentComp1 from "./samples/sample_components/Employee_relations/EmployeeRelationContentComp1";
import EmployeeRelationContentComp2 from "./samples/sample_components/Employee_relations/EmployeeRelationContentComp2";

import EngineeringCardComp from "./samples/sample_components/Engineering/EngineeringCardComp";
import EngineeringContentComp1 from "./samples/sample_components/Engineering/EngineeringContentComp1";

import FashionCardComp from "./samples/sample_components/Fashion/FashionCardComp";
import FashionContentComp1 from "./samples/sample_components/Fashion/FashionContentComp1";
import FashionContentComp2 from "./samples/sample_components/Fashion/FashionContentComp2";

import FinanceCardComp from "./samples/sample_components/Finance/FinanceCardComp";
import FinanceContentComp1 from "./samples/sample_components/Finance/FinanceContentComp1";
import FinanceContentComp2 from "./samples/sample_components/Finance/FinanceContentComp2";
import FinanceContentComp3 from "./samples/sample_components/Finance/FinanceContentComp3";

import FoodSafetyManageCardComp from "./samples/sample_components/Food_safety_manage/FoodSafetyManageCardComp";
import FoodSafetyManageContentComp1 from "./samples/sample_components/Food_safety_manage/FoodSafetyManageContentComp1";

import GeneralStudiesCardComp from "./samples/sample_components/General_Studies/GeneralStudiesCardComp";
import GeneralStudiesContentComp1 from "./samples/sample_components/General_Studies/GeneralStudiesContentComp1";
import GeneralStudiesContentComp2 from "./samples/sample_components/General_Studies/GeneralStudiesContentComp2";
import GeneralStudiesContentComp3 from "./samples/sample_components/General_Studies/GeneralStudiesContentComp3";

import GeographyCardComp from "./samples/sample_components/Geography/GeographyCardComp";
import GeographyContentComp1 from "./samples/sample_components/Geography/GeographyContentComp1";

import HealthCardComp from "./samples/sample_components/Health/HealthCardComp";
import HealthContentComp1 from "./samples/sample_components/Health/HealthContentComp1";
import HealthContentComp2 from "./samples/sample_components/Health/HealthContentComp2";
import HealthContentComp3 from "./samples/sample_components/Health/HealthContentComp3";

import HealthandSocialCareCardComp from "./samples/sample_components/Health&Social_care/HealthandSocialCareCardComp";
import HealthandSocialCareContentComp1 from "./samples/sample_components/Health&Social_care/HealthandSocialCareContentComp1";
import HealthandSocialCareContentComp2 from "./samples/sample_components/Health&Social_care/HealthandSocialCareContentComp2";
import HealthandSocialCareContentComp3 from "./samples/sample_components/Health&Social_care/HealthandSocialCareContentComp3";

import HumanRightCardComp from "./samples/sample_components/Human_Right//HumanRightCardComp";
import HumanRightContentComp1 from "./samples/sample_components/Human_Right/HumanRightContentComp1";
import HumanRightContentComp2 from "./samples/sample_components/Human_Right/HumanRightContentComp2";

import IndustrialRelationCardComp from "./samples/sample_components/Industrial_Relation/IndustrialRelationCardComp";
import IndustrialRelationContentComp1 from "./samples/sample_components/Industrial_Relation/IndustrialRelationContentComp1";

import InformationSystemCardComp from "./samples/sample_components/Information_system/InformationSystemCardComp";
import InformationSystemContentComp1 from "./samples/sample_components/Information_system/InformationSystemContentComp1";
import InformationSystemContentComp2 from "./samples/sample_components/Information_system/InformationSystemContentComp2";

import LanguagesCardComp from "./samples/sample_components/Languages/LanguagesCardComp";
import LanguagesContentComp1 from "./samples/sample_components/Languages/LanguagesContentComp1";
import LanguagesContentComp2 from "./samples/sample_components/Languages/LanguagesContentComp2";

import LawCardComp from "./samples/sample_components/Law/LawCardComp";
import LawContentComp1 from "./samples/sample_components/Law/LawContentComp1";
import LawContentComp2 from "./samples/sample_components/Law/LawContentComp2";
import LawContentComp3 from "./samples/sample_components/Law/LawContentComp3";

import LeadershipCardComp from "./samples/sample_components/Leadership/LeadershipCardComp";
import LeadershipContentComp1 from "./samples/sample_components/Leadership/LeadershipContentComp1";
import LeadershipContentComp2 from "./samples/sample_components/Leadership/LeadershipContentComp2";

import ManagementCardComp from "./samples/sample_components/Management/ManagementCardComp";
import ManagementContentComp1 from "./samples/sample_components/Management/ManagementContentComp1";
import ManagementContentComp2 from "./samples/sample_components/Management/ManagementContentComp2";

import ManagingPeopleCareersCardComp from "./samples/sample_components/ManagingPeople&careers/ManagingPeopleCareersCardComp";
import ManagingPeopleCareersContentComp1 from "./samples/sample_components/ManagingPeople&careers/ManagingPeopleCareersContentComp1";

import MathematicsCardComp from "./samples/sample_components/Mathematics/MathematicsCardComp";
import MathematicsContentComp1 from "./samples/sample_components/Mathematics/MathematicsContentComp1";

import NetworkingCardComp from "./samples/sample_components/Networking/NetworkingCardComp";

import NursingCardComp from "./samples/sample_components/Nursing/NursingCardComp";
import NursingContentComp1 from "./samples/sample_components/Nursing/NursingContentComp1";
import NursingContentComp2 from "./samples/sample_components/Nursing/NursingContentComp2";
import NursingContentComp3 from "./samples/sample_components/Nursing/NursingContentComp3";

import Organiz_behaviourCardComp from "./samples/sample_components/Organizational_behaviour/Organiz_behaviourCardComp";
import Organiz_behaviourContentComp1 from "./samples/sample_components/Organizational_behaviour/Organiz_behaviourContentComp1";
import Organiz_behaviourContentComp2 from "./samples/sample_components/Organizational_behaviour/Organiz_behaviourContentComp2";
import Organiz_behaviourContentComp3 from "./samples/sample_components/Organizational_behaviour/Organiz_behaviourContentComp3";

import PersonalProfessionalDevCardComp from "./samples/sample_components/Personal&professional_development/PersonalProfessionalDevCardComp";
import PersonalProfessionalDevContentComp1 from "./samples/sample_components/Personal&professional_development/PersonalProfessionalDevContentComp1";

import PhilosophyCardComp from "./samples/sample_components/Philosophy/PhilosophyCardComp";
import PhilosophyContentComp1 from "./samples/sample_components/Philosophy/PhilosophyContentComp1";

import PlanningforGrowthCardComp from "./samples/sample_components/Planning_for_growth/PlanningforGrowthCardComp";
import PlanningforGrowthContentComp1 from "./samples/sample_components/Planning_for_growth/PlanningforGrowthContentComp1";

import ReligionCardComp from "./samples/sample_components/Religion/ReligionCardComp";
import ReligionContentComp1 from "./samples/sample_components/Religion/ReligionContentComp1";

import SocialMediaCardComp from "./samples/sample_components/Social_media/SocialMediaCardComp";
import SocialMediaContentComp1 from "./samples/sample_components/Social_media/SocialMediaContentComp1";
import SocialMediaContentComp2 from "./samples/sample_components/Social_media/SocialMediaContentComp2";

import SocialPolicyCardComp from "./samples/sample_components/Social_policy/SocialPolicyCardComp";
import SocialPolicyContentComp1 from "./samples/sample_components/Social_policy/SocialPolicyContentComp1";
import SocialPolicyContentComp2 from "./samples/sample_components/Social_policy/SocialPolicyContentComp2";

import SociologyCardComp from "./samples/sample_components/sociology/SociologyCardComp";
import SociologyContentComp1 from "./samples/sample_components/sociology/SociologyContentComp1";
import SociologyContentComp2 from "./samples/sample_components/sociology/SociologyContentComp2";
import SociologyContentComp3 from "./samples/sample_components/sociology/SociologyContentComp3";

import TeachingCardComp from "./samples/sample_components/Teaching/TeachingCardComp";
import TeachingContentComp1 from "./samples/sample_components/Teaching/TeachingContentComp1";

import TheologyCardComp from "./samples/sample_components/theology/TheologyCardComp";
import TheologyContentComp1 from "./samples/sample_components/theology/TheologyContentComp1";
import TheologyContentComp2 from "./samples/sample_components/theology/TheologyContentComp2";

import TourismCardComp from "./samples/sample_components/Tourism/TourismCardComp";
import TourismContentComp1 from "./samples/sample_components/Tourism/TourismContentComp1";
import TourismContentComp2 from "./samples/sample_components/Tourism/TourismContentComp2";
import TourismContentComp3 from "./samples/sample_components/Tourism/TourismContentComp3";

import UnderstandSelfOthersCardComp from "./samples/sample_components/Understanding_self&Others/UnderstandSelfOthersCardComp";
import UnderstandSelfOthersContentComp1 from "./samples/sample_components/Understanding_self&Others/UnderstandSelfOthersContentComp1";



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
          <Route path="/SampleComponent" element={<SampleComponent/>}/>
          

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


           {/* Card and Content Components */}

           <Route path="/AccountCardComp" element={<AccountCardComp/>} />
          <Route path="/AccountContentComp1" element={<AccountContentComp1/>} />
          <Route path="/AccountContentComp2" element={<AccountContentComp2/>} />
          <Route path="/ArchitecCardComp" element={<ArchitecCardComp/>} />
          <Route
            path="/ArchitecContentComp1"
            element={<ArchitecContentComp1/>}
          />
          <Route
            path="/ArchitecContentComp2"
            element={<ArchitecContentComp2/>}
          />
          <Route path="/ArtsCardComp" element={<ArtsCardComp/>} />
          <Route path="/ArtsContentComp1" element={<ArtsContentComp1/>} />
          <Route path="/BiologyCardComp" element={<BiologyCardComp/>} />
          <Route path="/BiologyContentComp1" element={<BiologyContentComp1/>} />
          <Route path="/BiologyContentComp2" element={<BiologyContentComp2/>} />
          <Route path="/BusinessCardComp" element={<BusinessCardComp/>} />
          <Route
            path="/BusinessContentComp1"
            element={<BusinessContentComp1/>}
          />
          <Route
            path="/BusinessContentComp2"
            element={<BusinessContentComp2/>}
          />
          <Route path="/ChildcareCardComp" element={<ChildcareCardComp/>} />
          <Route
            path="/ChildcareContentComp1"
            element={<ChildcareContentComp1/>}
          />
          <Route
            path="/ChildcareContentComp2"
            element={<ChildcareContentComp2/>}
          />
          <Route
            path="/ChildcareContentComp3"
            element={<ChildcareContentComp3/>}
          />
          <Route path="/CommerceCardComp" element={<CommerceCardComp/>} />
          <Route
            path="/CommerceContentComp1"
            element={<CommerceContentComp1/>}
          />
          <Route
            path="/ComputerScienceCardComp"
            element={<ComputerScienceCardComp/>}
          />
          <Route
            path="/ComputerScienceContentComp1"
            element={<ComputerScienceContentComp1/>}
          />
          <Route path="/DesignCardComp" element={<DesignCardComp/>} />
          <Route path="/DesignContentComp1" element={<DesignContentComp1/>} />
          <Route path="/EconomicsCardComp" element={<EconomicsCardComp/>} />
          <Route
            path="/EconomicsContentComp1"
            element={<EconomicsContentComp1/>}
          />
          <Route
            path="/EconomicsContentComp2"
            element={<EconomicsContentComp2/>}
          />
          <Route
            path="/EconomicsContentComp3"
            element={<EconomicsContentComp3/>}
          />
          <Route path="/EducationCardComp" element={<EducationCardComp/>} />
          <Route
            path="/EducationContentComp1"
            element={<EducationContentComp1/>}
          />
          <Route
            path="/EducationContentComp2"
            element={<EducationContentComp2/>}
          />
          <Route
            path="/EducationContentComp3"
            element={<EducationContentComp3/>}
          />

          <Route
            path="/EmployeeRelationCardComp"
            element={<EmployeeRelationCardComp/>}
          />
          <Route
            path="/EmployeeRelationContentComp1"
            element={<EmployeeRelationContentComp1/>}
          />
          <Route
            path="/EmployeeRelationContentComp2"
            element={<EmployeeRelationContentComp2/>}
          />
          <Route path="/EngineeringCardComp" element={<EngineeringCardComp/>} />
          <Route
            path="/EngineeringContentComp1"
            element={<EngineeringContentComp1/>}
          />
          <Route path="/FashionCardComp" element={<FashionCardComp/>} />
          <Route path="/FashionContentComp1" element={<FashionContentComp1/>} />
          <Route path="/FashionContentComp2" element={<FashionContentComp2/>} />
          <Route path="/FinanceCardComp" element={<FinanceCardComp/>} />
          <Route path="/FinanceContentComp1" element={<FinanceContentComp1/>} />
          <Route path="/FinanceContentComp2" element={<FinanceContentComp2/>} />
          <Route path="/FinanceContentComp3" element={<FinanceContentComp3/>} />
          <Route
            path="/FoodSafetyManageCardComp"
            element={<FoodSafetyManageCardComp/>}
          />
          <Route
            path="/FoodSafetyManageContentComp1"
            element={<FoodSafetyManageContentComp1/>}
          />
          <Route
            path="/GeneralStudiesCardComp"
            element={<GeneralStudiesCardComp/>}
          />
          <Route
            path="/GeneralStudiesContentComp1"
            element={<GeneralStudiesContentComp1/>}
          />
          <Route
            path="/GeneralStudiesContentComp2"
            element={<GeneralStudiesContentComp2/>}
          />
          <Route
            path="/GeneralStudiesContentComp3"
            element={<GeneralStudiesContentComp3/>}
          />

          <Route path="/GeographyCardComp" element={<GeographyCardComp/>} />
          <Route
            path="/GeographyContentComp1"
            element={<GeographyContentComp1/>}
          />
          <Route path="/HealthCardComp" element={<HealthCardComp/>} />
          <Route path="/HealthContentComp1" element={<HealthContentComp1/>} />
          <Route path="/HealthContentComp2" element={<HealthContentComp2/>} />
          <Route path="/HealthContentComp3" element={<HealthContentComp3/>} />
          <Route
            path="/HealthandSocialCareCardComp"
            element={<HealthandSocialCareCardComp/>}
          />
          <Route
            path="/HealthandSocialCareContentComp1"
            element={<HealthandSocialCareContentComp1/>}
          />
          <Route
            path="/HealthandSocialCareContentComp2"
            element={<HealthandSocialCareContentComp2/>}
          />
          <Route
            path="/HealthandSocialCareContentComp3"
            element={<HealthandSocialCareContentComp3/>}
          />

          <Route path="/HumanRightCardComp" element={<HumanRightCardComp/>} />
          <Route
            path="/HumanRightContentComp1"
            element={<HumanRightContentComp1/>}
          />
          <Route
            path="/HumanRightContentComp2"
            element={<HumanRightContentComp2/>}
          />
          <Route
            path="/IndustrialRelationCardComp"
            element={<IndustrialRelationCardComp/>}
          />
          <Route
            path="/IndustrialRelationContentComp1"
            element={<IndustrialRelationContentComp1/>}
          />
          <Route
            path="/InformationSystemCardComp"
            element={<InformationSystemCardComp/>}
          />
          <Route
            path="/InformationSystemContentComp1"
            element={<InformationSystemContentComp1/>}
          />
          <Route
            path="/InformationSystemContentComp2"
            element={<InformationSystemContentComp2/>}
          />
          <Route path="/LanguagesCardComp" element={<LanguagesCardComp/>} />
          <Route
            path="/LanguagesContentComp1"
            element={<LanguagesContentComp1/>}
          />
          <Route
            path="/LanguagesContentComp2"
            element={<LanguagesContentComp2/>}
          />
          <Route path="/LawCardComp" element={<LawCardComp/>} />
          <Route path="/LawContentComp1" element={<LawContentComp1/>} />
          <Route path="/LawContentComp2" element={<LawContentComp2/>} />
          <Route path="/LawContentComp3" element={<LawContentComp3/>} />
          <Route path="/LeadershipCardComp" element={<LeadershipCardComp/>} />
          <Route
            path="/LeadershipContentComp1"
            element={<LeadershipContentComp1/>}
          />
          <Route
            path="/LeadershipContentComp2"
            element={<LeadershipContentComp2/>}
          />
          <Route path="/ManagementCardComp" element={<ManagementCardComp/>} />
          <Route
            path="/ManagementContentComp1"
            element={<ManagementContentComp1/>}
          />
          <Route
            path="/ManagementContentComp2"
            element={<ManagementContentComp2/>}
          />
          <Route
            path="/ManagingPeopleCareersCardComp"
            element={<ManagingPeopleCareersCardComp/>}
          />
          <Route
            path="/ManagingPeopleCareersContentComp1"
            element={<ManagingPeopleCareersContentComp1/>}
          />
          <Route path="/MathematicsCardComp" element={<MathematicsCardComp/>} />
          <Route
            path="/MathematicsContentComp1"
            element={<MathematicsContentComp1/>}
          />
          <Route path="/NetworkingCardComp" element={<NetworkingCardComp/>} />
          <Route path="/NursingCardComp" element={<NursingCardComp/>} />
          <Route path="/NursingContentComp1" element={<NursingContentComp1/>} />
          <Route path="/NursingContentComp2" element={<NursingContentComp2/>} />
          <Route path="/NursingContentComp3" element={<NursingContentComp3/>} />
          <Route
            path="/Organiz_behaviourCardComp"
            element={<Organiz_behaviourCardComp/>}
          />
          <Route
            path="/Organiz_behaviourContentComp1"
            element={<Organiz_behaviourContentComp1/>}
          />
          <Route
            path="/Organiz_behaviourContentComp2"
            element={<Organiz_behaviourContentComp2/>}
          />
          <Route
            path="/Organiz_behaviourContentComp3"
            element={<Organiz_behaviourContentComp3/>}
          />
          <Route
            path="/PersonalProfessionalDevCardComp"
            element={<PersonalProfessionalDevCardComp/>}
          />
          <Route
            path="/PersonalProfessionalDevContentComp1"
            element={<PersonalProfessionalDevContentComp1/>}
          />
          <Route path="/PhilosophyCardComp" element={<PhilosophyCardComp/>} />
          <Route
            path="/PhilosophyContentComp1"
            element={<PhilosophyContentComp1/>}
          />
          <Route
            path="/PlanningforGrowthCardComp"
            element={<PlanningforGrowthCardComp/>}
          />
          <Route
            path="/PlanningforGrowthContentComp1"
            element={<PlanningforGrowthContentComp1/>}
          />
          <Route path="/ReligionCardComp" element={<ReligionCardComp/>} />
          <Route
            path="/ReligionContentComp1"
            element={<ReligionContentComp1/>}
          />
          <Route path="/SocialMediaCardComp" element={<SocialMediaCardComp/>} />
          <Route
            path="/SocialMediaContentComp1"
            element={<SocialMediaContentComp1/>}
          />
          <Route
            path="/SocialMediaContentComp2"
            element={<SocialMediaContentComp2/>}
          />
          <Route
            path="/SocialPolicyCardComp"
            element={<SocialPolicyCardComp/>}
          />
          <Route
            path="/SocialPolicyContentComp1"
            element={<SocialPolicyContentComp1/>}
          />
          <Route
            path="/SocialPolicyContentComp2"
            element={<SocialPolicyContentComp2/>}
          />
          <Route path="/SociologyCardComp" element={<SociologyCardComp/>} />
          <Route
            path="/SociologyContentComp1"
            element={<SociologyContentComp1/>}
          />
          <Route
            path="/SociologyContentComp2"
            element={<SociologyContentComp2/>}
          />
          <Route
            path="/SociologyContentComp3"
            element={<SociologyContentComp3/>}
          />

          <Route path="/TeachingCardComp" element={<TeachingCardComp/>} />
          <Route
            path="/TeachingContentComp1"
            element={<TeachingContentComp1/>}
          />
          <Route path="/TheologyCardComp" element={<TheologyCardComp/>} />
          <Route
            path="/TheologyContentComp1"
            element={<TheologyContentComp1/>}
          />
          <Route
            path="/TheologyContentComp2"
            element={<TheologyContentComp2/>}
          />
          <Route path="/TourismCardComp" element={<TourismCardComp/>} />
          <Route path="/TourismContentComp1" element={<TourismContentComp1/>} />
          <Route path="/TourismContentComp2" element={<TourismContentComp2/>} />
          <Route path="/TourismContentComp3" element={<TourismContentComp3/>} />
          <Route
            path="/UnderstandSelfOthersCardComp"
            element={<UnderstandSelfOthersCardComp/>}
          />
          <Route
            path="/UnderstandSelfOthersContentComp1"
            element={<UnderstandSelfOthersContentComp1/>}
          />


        </Routes>
      </BrowserRouter>
    </div>
  )
}
