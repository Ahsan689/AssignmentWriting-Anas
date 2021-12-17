
import React from "react";
import Typical from 'react-typical'

export default function HeroSection() {
  return (
    <>
    
      <section className="ptb-100 mb-5" style={{backgroundImage: 'url(img/1543375-scaled.jpg)',backgroundPosition:"bottom",backgroundSize:'cover',backgroundColor:'#000',opacity:0.9}}>
      
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-12 col-lg-10">
                    <div className="hero-slider-content text-white pt-5">
                        
                        <h1 className="text-center text-white pt-5 mb-1"> The <Typical loop={Infinity} wrapper ='b' steps={[1200,'',1200,'Fastest' ]}/> Way to Better Grades
                        </h1>

                        <br></br> 
                        <h6 className="text-center" style={{color:'white'}}>
                        <strong >Put a stop to deadline pressure, and have your homework done by an expert</strong>
                        </h6>
                        <br></br> <br></br>
                        {/* <strong >100+ Students Support Executive to Listen Students Requirement</strong> <br></br>
                        <strong>Highest Grade for All Academic Needs</strong> <br></br>
                        <strong>10+ Years Of Experience in Academic Writing</strong> <br></br> */}
                        {/* <strong>Best Research Proposal Writer</strong> <br></br>
                        <strong>Global Research Proposal Helper</strong> <br></br>
                        <strong>5,067 Academic Research Proposal Writers</strong> <br></br> */}
                        <br></br> 
                        
                    </div>
                </div>
               
            </div>
        </div>
    </section>
    </>
  );
}


