import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function sample() {
    return (
<div>
<Header/>
  <div className="main">
    {/*hero section start*/}
    <section className="hero-section ptb-100 sample" >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-9 col-lg-7">
            <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
              <h2 className="text-white mb-0"><span className='ico'>Get help from</span> the FREE samples </h2>
              <p><i className="fa fa-chevron-right" /><b>Free Tumitin Report</b></p>
              <p><i className="fa fa-chevron-right" /><b>7,00000+ Total Satisfied Student</b></p>
              <p><i className="fa fa-chevron-right" /><b>150+ Executive for Support Service</b></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*hero section end*/}
    <br />
    <br />
    <br />
    <div className="container">
      <h2 className="text-center">Get the Best Samples to Improve Your Grade
      </h2>
      <span className="animate-border mr-auto ml-auto mb-4" />
      <div className="row row-4">
        <div className="col-md-3 p-4 card ">
          <h2 className="heading-3 text-center">A</h2>
          <h3 className="subject-3 text-center"><Link to="/Accounting1">Accounting</Link></h3>
          <h3 className="subject-3 text-center">
            <Link to="/Architecture1">Architecture</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/Art1">Art</Link></h3>
        </div>
        <div className="col-md-3 p-4 card">
          <h2 className="heading-3 text-center">B</h2>
          <h3 className="subject-3 text-center"><Link to="/Biology1">Biology</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/Bussiness1">Bussiness</Link></h3>
        </div>
        {/* <div class="col-md-4"> */}
        <div className="col-md-3 p-4 card">
          <h2 className="heading-3 text-center">C</h2>
          <h3 className="subject-3 text-center"><Link to="/ChildCare1">ChildCare</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/Commerce1">Commerce</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/ComputerScience">Computer Science</Link></h3>
        </div>
      </div><br /><br />
      <div className="row row-4">
        <div className="col-md-3 p-4 card">
          <h2 className="heading-3 text-center">D</h2>
          <h3 className="subject-3 text-center"><Link to="/Design1">Design</Link></h3>
        </div>
        <div className="col-md-3 p-4 card">
          <h2 className="heading-3 text-center">E</h2>
          <h3 className="subject-3 text-center"><Link to="/Education1">Education</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/Economics1">Econimics</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/Employee1">Employee Relations</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/Engeering1">Engineering</Link></h3>
        </div>
        <div className="col-md-3 p-4 card">
          <h2 className="heading-3 text-center">F</h2>
          <h3 className="subject-3 text-center"><Link to="/Fashion1">Fashion</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/Finance1">Finance</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/FoodSafety1">Food Safety Management</Link></h3>
        </div>
      </div><br /><br />
      <div className="row row-4">
        <div className="col-md-3 p-4 card">
          <h2 className="heading-3 text-center">G</h2>
          <h3 className="subject-3 text-center"><Link to="/GerneralStudies">A Gerneral Studies</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/Geography1">Geography</Link></h3>
        </div>
        <div className="col-md-3 p-4 card  text-center">
          <h2 className="heading-3 text-center">H</h2>
          <h3 className="subject-3 text-center"><Link to="/Health1">Health</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/HealthCare1">health &amp; Heath Care</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/HumanRight1">Human Right</Link></h3>
        </div>
        <div className="col-md-3 p-4 card  text-center">
          <h2 className="heading-3 text-center">I</h2>
          <h3 className="subject-3 text-center"><Link to="/IndustrialRelation1">Industrial Relations</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/InformationSystem1">Information System</Link></h3>
        </div>
      </div><br /><br />
      <div className="row row-4">
        <div className="col-md-5 p-4 card  text-center">
          <h2 className="heading-3 text-center">L</h2>
          <h3 className="subject-3 text-center"><Link to="/Language1">Language</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/Law1">Law</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/Leadership1">Leadership</Link></h3>
        </div>
        <div className="col-md-5 p-4 card  text-center">
          <h2 className="heading-3 text-center">M</h2>
          <h3 className="subject-3 text-center"><Link to="/Management1">Management</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/ManagingPeopleCare1">Managing People &amp; Careers</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/Mathametic1">Mathemetic</Link></h3>
        </div>
      </div><br /><br />
      <div className="row row-4">
        <div className="col-md-3 p-4 card  text-center">
          <h2 className="heading-3 text-center">N</h2>
          <h3 className="subject-3 text-center"><Link to="/Networking1">Networking</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/Nursing1">Nursing</Link></h3>
        </div>
        <div className="col-md-3 p-4 card  text-center">
          <h2 className="heading-3 text-center">O</h2>
          <h3 className="subject-3 text-center"><Link to="/OrganizationBehaviour1">Organization Behavior</Link></h3>
        </div>
        <div className="col-md-3 p-4 card  text-center">
          <h2 className="heading-3 text-center">P</h2>
          <h3 className="subject-3 text-center"><Link to="/ProfessionalDevelopment1">Personal and Profesional Development</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/Philosophy1">philosophy</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/PlaningGrowth1">Planning for gwroth</Link></h3>
        </div>
      </div><br /><br />
      <div className="row row-4  justift-content-around text-center">
        <div className="col-md-3 p-4 card">
          <h2 className="heading-3 text-center">R</h2>
          <h3 className="subject-3 text-center"><Link to="/Religion1">Religion</Link></h3>
        </div>
        <div className="col-md-3 p-4 card  text-center">
          <h2 className="heading-3 text-center">S</h2>
          <h3 className="subject-3 text-center"><Link to="/SocialMedia1">Social Media </Link></h3>
          <h3 className="subject-3 text-center"><Link to="/SocialPolicy1">Social policy</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/Sociology1">Sociology</Link></h3>
        </div>
        
        <div className="col-md-3 p-4 card  text-center">
          <h2 className="heading-3 text-center">T</h2>
          <h3 className="subject-3 text-center"><Link to="/Teacher1">Teaching</Link></h3>
          <h3 className="subject-3 text-center"><Link to="/Theology1">theology</Link></h3>
          <h3 className="subject-3 text-center"><Link to="tourism-1.php">Tourism</Link></h3>
        </div>
      </div><br /><br />
      <div className="row">
        <div className="col-md-12 p-4 card text-center">
          <h2 className="heading-3 text-center">U</h2>
          <h3 className="subject-3 text-center"><Link to="understanding-self-1.php">Understanding Self &amp; Others</Link></h3>
        </div>
      </div>
    </div>
  </div>
<Footer/>

</div>

    )
}
