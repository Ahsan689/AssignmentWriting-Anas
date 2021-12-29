import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Link } from 'react-router-dom'

import img1 from '../src/assets/img2/2-min.jpg'
import img2 from '../src/assets/img2/3-min.jpg'
import img3 from '../src/assets/img2/4-min.jpg'
import img4 from '../src/assets/img2/5-min.jpg'
import img5 from '../src/assets/img2/6-min.jpg'
import img6 from '../src/assets/img2/7.jpg'
import img7 from '../src/assets/img2/8.jpg'
import img8 from '../src/assets/img2/3-01.jpg'
import img9 from '../src/assets/img2/6-01.jpg'



export default function Portfolio() {
    return (
<div>
    <Header/>
  <div className="main">
    {/*hero section start*/}
    <section className="hero-section ptb-100 Portfolio">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-9 col-lg-7">
            <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
              <h2 className="text-white mb-0">The <span className="ico">Fastest</span> Way to Better Grades
              </h2>
              <p><i className="fa fa-leaf text-success" /><b>Free Tumitin Report</b></p>
              <p><i className="fa fa-flag text-success" /><b>7,00000+ Total Satisfied Student</b></p>
              <p><i className="fa fa-thumbs-up text-primary" /><b>150+ Executive for Support Service</b></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*hero section end*/}
    
    <div className="container text-center video">
      {/* <h2 className="text-center mb-5 ico">Video Portfolio</h2>
      <span className="animate-border mr-auto ml-auto mb-4" />

      <div className="row justify-content-around">
        <div className="col-md-4 video-1">
          <video src="video1.mp4" className="img-fluid video-1" poster="1.png" height="350px" width="450px" controls />
        </div>
        <div className="col-md-4 video-1">
          <video src="video2.mp4" className="img-fluid video-2" poster="2.png" height="350px" width="450px" controls />
        </div>
        <div className="col-md-4 video-1">
          <video src="video3.mp4" className="img-fluid video-3" poster="3.png" height="350px" width="450px" controls />
        </div>
      </div>
      <br />
      <div className="row justify-content-between">
        <div className="col-md-4 video-1">
          <video src="video4.mp4" className="img-fluid video-4" poster="4.png" height="350px" width="450px" controls />
        </div>
        <div className="col-md-4 video-1">
          <video src="video5.mp4" className="img-fluid video-5" poster="5.png" height="350px" width="450px" controls />
        </div>
        <div className="col-md-4 video-1">
          <video src="video6.mp4" className="img-fluid video-6" poster="6.png" height="350px" width="450px" controls />
        </div>
        <br />
      </div> */}
      <div className="container text-center image">
        <h2 className="text-center mb-5 ico">Image Portfolio</h2>
        <span className="animate-border mr-auto ml-auto mb-4" />

        <div className="row justify-content-between">
          <div className="col-md-4 photo-1">
            {/* <a href={img1} target="_blank"><img src={img1} className="img-fluid image-1"  width="100%" alt="AssignmentWriting" /></a> */}
            <Link target="_blank" to={img1}><img src={img1} className="img-fluid image-1"  width="100%" alt="AssignmentWriting" /></Link>
          </div>
          <div className="col-md-4 photo-1">
            <Link  target="_blank" to={img2}><img src={img2} className="img-fluid image-2"  width="100%" alt="AssignmentWriting" /></Link>
          </div>
          <div className="col-md-4 photo-1">
            <Link  target="_blank" to={img3}><img src={img3} className="img-fluid image-3"  width="100%" alt="AssignmentWriting" /></Link>
          </div>
        </div>
        <br />
        <div className="row justify-content-between">
          <div className="col-md-4 photo-1">
            <Link  target="_blank" to={img4}><img src={img4} className="img-fluid image-4"  width="100%" alt="AssignmentWriting" /></Link>
          </div>
          <div className="col-md-4 photo-1">
            <Link  target="_blank" to={img5}><img src={img5} className="img-fluid image-5"  width="100%" alt="AssignmentWriting" /></Link>
          </div>
          <div className="col-md-4 photo-1">
            <Link  target="_blank" to={img6}> <img src={img6} className="img-fluid image-6"  width="100%" alt="AssignmentWriting" /></Link>
          </div>
        </div>
        <br />
        <div className="row row-last justify-content-between">
          <div className="col-md-4 photo-1">
            <Link  target="_blank" to={img7}> <img src={img7} className="img-fluid image-7"  width="100%" alt="AssignmentWriting" /> </Link>
          </div>
          <div className="col-md-4 photo-1">
            <Link  target="_blank" to={img8}> <img src={img8} className="img-fluid image-8"  width="100%" alt="AssignmentWriting" /></Link>
          </div>
          <div className="col-md-4 photo-1">
            <Link  target="_blank" to={img9}>  <img src={img9} className="img-fluid image-9"  width="100%" alt="AssignmentWriting" /></Link>
          </div>
        </div>
        <br />
      </div>
      {/* start */}
    </div>
  </div>
  <Footer/>
  </div>

            

    )
}
