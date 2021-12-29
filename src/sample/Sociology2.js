import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Sociology2() {
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
              <h2 className="text-white mb-0">Social and​ Cultural Factors
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
    <br />
   
    <div className="container">
      <h3 className="text-center ico" style={{borderBottom: '12px solid black'}}>Report on Social and​ Cultural
        Factors
      </h3>
      <h3>Introduction</h3>
      <p>Service of a organization is have an effect on through numerous social and cultural thing of an
        organisation and country (Bolt, 2013). Here in line with case Mary face numerous problems while she use
        cab offerings of Better Transportation Company (BTC). Below is dialogue of problems and issues face
        through Mary.</p>
      <h4>Main Body
      </h4>
      <p><b>A. What specific social and cultural factors must be considered in your client’s case that might affect her use of transportation services
        </b></p>
      <p><b>Income:</b> Mary’s financial condition is not very strong that she book alternative transport because respective company charge cancellation fee and other cab service provider are expensive as compare to BTC.
      </p>
      <p><b>Irresponsible behaviour of Drivers:</b> Mary face major issues due to behaviours of drivers. This is so due to driver come late for pickup, sometime they forgot her and man y other.
      </p>
    </div>
  </div>
  <Footer/>
</div>

    )
}
