import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function ChildCare4() {
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
              <h2 className="text-white mb-0">Violent Video Games Cause Behavioural Problems
              </h2>
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
      <h3 className="text-center ico" style={{borderBottom: '12px solid  black'}}>Report on Violent Video Games Cause Behavioural Problems
      </h3>
      <h4>Do Violent Video Games Cause Behavioural Problems Assignment Sample
      </h4>
      <p>Violent computer games have long been popular with many children and teenagers and have tend to create a serious problems because children develop anti-social behaviour and disconnect them from reality. Its affects are negative rather than being the positive ones. This tends to create social violence and behaviour change such as bullying and physical fighting.
      </p>
    </div>
  </div>
  <Footer/>
</div>

    )
}
