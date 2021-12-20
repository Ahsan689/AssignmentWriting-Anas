
import React from "react";
import Typical from 'react-typical'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faChevronCircleRight}  from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  return (
    <>
    
      <section className="ptb-70" style={{backgroundImage: 'url(img/Writing-Your-Paper.jpg)',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundAttachment:"fixed"}}>
      
        <div className="container mt-4">
            <div className="row align-items-center">
                <div className="col-md-12 col-lg-8">
                    <div className="hero-slider-content text-white pt-5">
                        
                        <h1 className="text-white">Get Help from {"  "}
                        <Typical 
                        loop={Infinity} wrapper ='p' steps={[800,'',1000,'the free Samples',2500, 'delievered by',2500,'Our Expert Writers',2500]}/>
                        </h1>
                        <br></br><br></br>
                        <strong>Quality Research Help By Expert Writers</strong>
                        <br></br> <br></br> <br></br>
                        <FontAwesomeIcon className="mr-3" style={{color:'burlywood',fontSize:17}} icon={faChevronCircleRight}/>
                        <bold>Free Turnitin report</bold> <br></br>
                        <FontAwesomeIcon className="mr-3"style={{color:'burlywood',fontSize:17}} icon={faChevronCircleRight}/>
                        <bold>7,00000 + Total Satisfied Students</bold> <br></br>
                        <FontAwesomeIcon className="mr-3"style={{color:'burlywood',fontSize:17}} icon={faChevronCircleRight}/>
                        <bold>150+ Executives for Support Service</bold> <br></br><br></br>
                        

                        <div className="action-btns mt-3">
                          <button href="#" className="secondary-solid-btn-1 pr-5 pl-5 pt-3 pb-3"><strong>Start Now</strong></button>   
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-12 col-lg-4">
                    <div className="image-wrap pt-5">
                        <img src="img/hero-bg-1.jpg" className="img-fluid custom-width" alt="hero"/>
                        
                    </div>
                </div> */}
            </div>
        </div>
    </section>
    
    </>
  );
}


