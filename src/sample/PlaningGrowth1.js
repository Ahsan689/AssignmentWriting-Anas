import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
export default function PlaningGrowth1() {
    return (
        <div>
            <Header/>
  {/*body content wrap start*/}
  <div className="main">
    {/*hero section start*/}
    <section className="hero-section ptb-100 sample">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-9 col-lg-7">
            <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
              <h2 className="text-white mb-0">Free Samples of Planning for Growth
              </h2>
              <p><i className="fa fa-leaf" /><b>Free Tumitin Report</b></p>
              <p><i className="fa fa-flag" /><b>7,00000+ Total Satisfied Student</b></p>
              <p><i className="fa fa-thumbs-up" /><b>150+ Executive for Support Service</b></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*hero section end*/}
    <div className="container ">
      <h2 className="text-center">Get the Best Planning for Growth to Improve Your Grade
      </h2>
      <span className="animate-border mr-auto ml-auto mb-4" />
      {/* <i class="fas fa-arrow-circle-down"></i> */}
      <div className="row row-4 justify-content-center">
        <div className="col-md-6 text- card">
          {/* sub row start */}
          <h3 className="text-center"><Link to="/PlaningGrowth2">Globle Strategic Planning Assignment:Case study of TESCO</Link></h3>
          <div className="row">
            <div className="col-md-8">
              <h5>Numbers of Pages:</h5>
            </div>
            <div className="col-md-4"> 
              <h5 className="text-right">10</h5>
            </div>
            <div className="col-md-6">
              <h5>Writters Qualification:</h5> 
            </div>
            <div className="col-md-6"> 
              <h5 className="text-right">Graduation</h5>
            </div>
            <div className="col-md-8">
              <h5>Academic Level:</h5>
            </div>
            <div className="col-md-4"> 
              <h5 className="text-right">Post Graduate</h5>
            </div>
            <div className="col-md-4">
              <h5>Tags:</h5>
            </div>
            <div className="col-md-8"> 
              <h5 className="text-right">Top University In UK</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>   
  <Footer/>
</div>

    )
}
