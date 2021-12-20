import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Link } from 'react-router-dom'

import img1 from '../src/assets/img/client-1.jpg'
import img2 from '../src/assets/img/expert-5.jpg'
import img3 from '../src/assets/img/expert-4.jpg'
import img4 from '../src/assets/img/expert-6.jpg'
import img5 from '../src/assets/img/expert-7.jpg'
import img6 from '../src/assets/img/expert-9.jpg'
import img7 from '../src/assets/img/expert-3.jpg'
import img8 from '../src/assets/img/expert-1jpg.jpg'
import img9 from '../src/assets/img/expert-2.jpg'
import img10 from '../src/assets/img/why-expert.png'



export default function Experts() {
    return (
<div>
    <Header/>
  {/*body content wrap start*/}
  <div className="main">
    {/*header section start*/}
    <section className="hero-section ptb-100 Experts">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7">
            <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
              <h1 className="text-white  animate__animated animate__heartBeat text-warning heartBeat">ASSIGNMENT EXPERT</h1>
              <h2 className="text-white animate__animated animate__heartBeat text-warning">Connect With Our Top Writers !
              </h2>
              <h4>Turninig Your Problems Into Your Success</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*header section end*/}
    <br />
    <br />
    <div className="container">
      <h2 className="ico mt-4 text-center heartBeat ">Why Our Experts Are The Best</h2>
      <br />
      <div className="mt-4 text-center">
        <img src={img10} className="img-fluid" width="100%" alt />
      </div>
    </div>
    {/*team two section start*/}
    <section className="team-two-section ptb-100 gray-light-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-10">
            <div className="section-heading text-center mb-5">
              <h2 className="ico heartBeat">Choose The Best Expert Near Your Location</h2>
              <span className="animate-border mr-auto ml-auto mb-4" />
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-4 col-lg-4 mt-4">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img src={img1} alt="team image" width={120} className="img-fluid m-auto pt-4" />
                <div className="card-body">
                  <h5 className="teacher mb-0">
                    Michelle Mrng </h5>
                  <span className='text-warning'>
                   Masters from university of Singapore </span>
                  <br />
                  <br />
                </div>
              </div>
              <div className="overlay d-flex align-items-center justify-content-center">
                <div className="overlay-inner">
                  <h5 className="mb-0 teacher text-white"> John Perna</h5>
                  <span className="teacher-field text-white text-warning">
                    PhD in Economics </span>
                  <p className="teacher-see-profile">
                    <Link to="#" className="btn outline-white-btn">Hire Me</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>    
          <div className="col-md-4 col-lg-4 mt-4">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img src={img2} alt="team image" width={120} className="img-fluid m-auto pt-4" />
                <div className="card-body">
                  <h5 className="teacher mb-0">
                    John Perna </h5>
                  <span className='text-warning'>
                    PhD in Economics </span>
                  <br />
                  <br />
                </div>
              </div>
              <div className="overlay d-flex align-items-center justify-content-center">
                <div className="overlay-inner">
                  <h5 className="mb-0 teacher text-white"> John Perna</h5>
                  <span className="teacher-field text-white text-warning">
                    PhD in Economics </span>
                  <p className="teacher-see-profile">
                    <Link to="#" className="btn outline-white-btn">Hire Me</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 mt-4">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img src={img3} alt="team image" width={120} className="img-fluid m-auto pt-4" />
                <div className="card-body">
                  <h5 className="teacher mb-0">
                    Daphne Lip </h5>
                  <span className='text-warning'>
                    Graduated from Campion College at the University of Regina </span>
                </div>
              </div>
              <div className="overlay d-flex align-items-center justify-content-center">
                <div className="overlay-inner">
                  <h5 className="mb-0 teacher text-white"> Daphne Lip</h5>
                  <span className="teacher-field text-white text-warning">
                    Graduated from Campion College at the University of Regina </span>
                  <p className="teacher-see-profile">
                    <Link to="#" className="btn outline-white-btn">Hire Me</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-4 mt-4">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img src={img4} alt="team image" width={120} className="img-fluid m-auto pt-4" />
                <div className="card-body">
                  <h5 className="teacher mb-0">
                    Karen Betty </h5>
                  <span className='text-warning'>
                    MPA in Accounting researcher UK HIRE ME </span>
                  <br />
                  <br />
                </div>
              </div>
              <div className="overlay d-flex align-items-center justify-content-center">
                <div className="overlay-inner">
                  <h5 className="mb-0 teacher text-white"> Karen Betty </h5>
                  <span className="teacher-field text-white text-warning">
                    MPA in Accounting researcher UK HIRE ME </span>
                  <p className="teacher-see-profile">
                    <Link to="#" className="btn outline-white-btn">Hire Me</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 mt-4">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img src={img5} alt="team image" width={120} className="img-fluid m-auto pt-4" />
                <div className="card-body">
                  <h5 className="teacher mb-0">
                    Anderson </h5>
                  <span className='text-warning'>
                    Graduated from AUT University New Zealand HIRE ME </span>
                </div>
              </div>
              <div className="overlay d-flex align-items-center justify-content-center">
                <div className="overlay-inner">
                  <h5 className="mb-0 teacher text-white">
                    Anderson </h5>
                  <span className="teacher-field text-white text-warning">
                    Graduated from AUT University New Zealand HIRE ME </span>
                  <p className="teacher-see-profile">
                    <Link to="#" className="btn outline-white-btn">Hire Me</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 mt-4">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img src={img6} alt="team image" width={120} className="img-fluid m-auto pt-4" />
                <div className="card-body">
                  <h5 className="teacher mb-0">
                    Claudia Jaime </h5>
                  <span className='text-warning'>
                    Graduated from Cape Breton University US </span>
                  <br />
                  <br />
                </div>
              </div>
              <div className="overlay d-flex align-items-center justify-content-center">
                <div className="overlay-inner">
                  <h5 className="mb-0 teacher text-white"> Claudia Jaime </h5>
                  <span className="teacher-field text-white text-warning">
                    Graduated from Cape Breton University US </span>
                  <p className="teacher-see-profile">
                    <Link to="#" className="btn outline-white-btn">Hire Me</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-4 mt-4">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img src={img7} alt="team image" width={120} className="img-fluid m-auto pt-4" />
                <div className="card-body">
                  <h5 className="teacher mb-0">
                    Grace Ling </h5>
                  <span className='text-warning'>
                    Pursuing Ph.D. in Accounting Singapore </span>
                </div>
              </div>
              <div className="overlay d-flex align-items-center justify-content-center">
                <div className="overlay-inner">
                  <h5 className="mb-0 teacher text-white">
                    Grace Ling </h5>
                  <span className="teacher-field text-white text-warning">
                    Pursuing Ph.D. in Accounting Singapore </span>
                  <p className="teacher-see-profile">
                    <Link to="#" className="btn outline-white-btn">Hire Me</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 mt-4">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img src={img8} alt="team image" width={120} className="img-fluid m-auto pt-4" />
                <div className="card-body">
                  <h5 className="teacher mb-0">
                    Alexis Jiang </h5>
                  <span className='text-warning'>
                    Masters of Ph.D. in Accounting USA HIRE ME </span>
                </div>
              </div>
              <div className="overlay d-flex align-items-center justify-content-center">
                <div className="overlay-inner">
                  <h5 className="mb-0 teacher text-white">
                    Alexis Jiang </h5>
                  <span className="teacher-field text-white text-warning">
                    Masters of Ph.D. in Accounting USA HIRE ME </span>
                  <p className="teacher-see-profile">
                    <Link to="#" className="btn outline-white-btn">Hire Me</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 mt-4">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img src={img9} alt="team image" width={120} className="img-fluid m-auto pt-4" />
                <div className="card-body">
                  <h5 className="teacher mb-0">
                    John Perna </h5>
                  <span className='text-warning'>
                    PhD in Economics UK </span>
                </div>
              </div>
              <div className="overlay d-flex align-items-center justify-content-center">
                <div className="overlay-inner">
                  <h5 className="mb-0 teacher text-white">
                    John Perna </h5>
                  <span className="teacher-field text-warning text-white">
                    PhD in Economics UK </span>
                  <p className="teacher-see-profile">
                    <Link to="#" className="btn outline-white-btn">Hire Me</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*team two section end*/}
    {/*contact us promo start*/}
    {/*contact us promo end*/}
  </div>
  {/*body content wrap end*/}
  <Footer/>
  </div>

    )
}
