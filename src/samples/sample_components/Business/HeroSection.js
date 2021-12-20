
import React from "react";
import Typical from 'react-typical'

export default function HeroSection() {
  return (
    <div>
    
      <section className="ptb-100" style={{backgroundImage: 'url(img/backgrounds/pexels-photo-6185579.jpeg)', backgroundRepeat:'no-repeat',backgroundPosition:"top",backgroundSize:'cover'}}>
      
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12 col-lg-10">
                    <div className="hero-slider-content text-white pt-5">
                        
                        <h1 className="text-white pt-5 mb-5"> <Typical loop={Infinity} wrapper ='b' steps={[1200,'',1500,'Business' ]}/>  Samples
                        </h1>

                        <br></br> 
                        <h4 style={{color:'white'}}>
                        <strong>Quality Research Proposal Help By Expert Writers</strong>
                        </h4>
                        <br></br> <br></br>
                        <strong >100+ Students Support Executive to Listen Students Requirement</strong> <br></br>
                        <strong>Highest Grade for All Academic Needs</strong> <br></br>
                        <strong>10+ Years Of Experience in Academic Writing</strong> <br></br>
                        <strong>Best Research Proposal Writer</strong> <br></br>
                        <strong>Global Research Proposal Helper</strong> <br></br>
                        <strong>5,067 Academic Research Proposal Writers</strong> <br></br>
                        <br></br> 
                        
                    </div>
                </div>
               
            </div>
        </div>
    </section>
    
    </div>
  );
}


