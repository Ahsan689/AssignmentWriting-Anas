import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'



export class ContectUS extends Component {
    render() {
        return (
            <div>
                <Header/>

                 <section className="hero-section ptb-100  contect-sec" >
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-7">
        <div className="page-header-content text-white  pt-sm-5 pt-md-5 pt-lg-0">
          <h1 className=" mb-0">Contact <span className='ico'>Us</span></h1>
          <div className="custom-breadcrumb">
            <h5>Contect &amp; Email</h5>
            <h5 className="text-white"><i className="fa fa-envelope icon-1 " />info@theassignmentwriting.com</h5>
            <h5 className="text-white"><i className="fa fa-envelope icon-3 " />theassignmentwriting12@gmail.com</h5>
            <h5 className="text-white"> <i className="fa fa-phone icon-1 " /> 0018883526601 US toll free US</h5>
            <h5 className="text-white"><i className="fa fa-phone icon-1 " />00448000418794 UK toll free UK</h5>
            <h5 className="text-white"><i className="fa fa-phone icon-1 "> </i>00447418343231 UK Phone number</h5>
            <h5 className="text-white"><i className="fa fa-phone icon-1 " />0016469165519 US phone number</h5>
            <h5 className="text-white"><i className="fa fa-phone icon-1 " />00447429125487 UK whatsapp number</h5>
            <h5 className="text-white"><i className="fa fa-phone icon-1 " />0015167383453 US whatsapp number</h5>
            
          
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
            </div>
        )
    }
}

export default ContectUS
