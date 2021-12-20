import React from "react";
import { Link } from "react-router-dom";

function OurServices_3Cards() {
  return (
    <div className="App">
      <section className="services-section ptb-100 gray-light-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="section-heading text-center mb-5">
                {/* <strong className="color-secondary">Our Services</strong> */}
                <h2 className="mb-5">
                  Get the Best Nursing to Improve Your Grade
                </h2>
                <hr></hr>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
              <div
                className="services-single text-start p-4 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg "
                style={{ borderRadius: 20 }}
              >
                {/* <span className="ti-announcement icon-lg color-secondary d-block mb-4"></span> */}
                <Link
                  to="/NursingContentComp1"
                  style={{ textDecoration: "none" }}
                >
                  <h5 className="mb-4 text-center">
                    Rural and Remote Area Nursing
                  </h5>
                  <hr></hr>
                </Link>
                {/* <a href="services-details.html" target="_blank" className="detail-link mt-4">Read more <span
                                className="ti-arrow-right"></span></a> */}
                <strong>Number of pages: </strong>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
                <strong> 10 </strong>
                <br></br> <br></br>
                <strong>Writer’s Qualifications: </strong>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <strong> Graduation</strong> <br></br> <br></br>
                <strong>Academic level: </strong>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &ensp;
                <strong>Post Graduate</strong> <br></br> <br></br>
                <strong>Tags: </strong>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <strong>Top Universities In UK </strong>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 mb-3">
              <div
                className="services-single  p-4 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg "
                style={{ borderRadius: 20 }}
              >
                {/* <span className="ti-light-bulb icon-lg color-secondary d-block mb-4"></span> */}
                <Link
                  to="/NursingContentComp2"
                  style={{ textDecoration: "none" }}
                >
                  <h5 className="mb-4 text-center">Nursing Communication</h5>
                  <hr></hr>
                </Link>
                {/* <a href="services-details.html" target="_blank" className="detail-link mt-4">Read more <span
                                className="ti-arrow-right"></span></a> */}
                <strong>Number of pages: </strong>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
                <strong> 9 </strong>
                <br></br> <br></br>
                <strong>Writer’s Qualifications: </strong>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <strong> Graduation</strong> <br></br> <br></br>
                <strong>Academic level: </strong>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &ensp;
                <strong>Diploma</strong> <br></br> <br></br>
                <strong>Tags: </strong>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <strong>Top Universities In UK </strong>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div
                className=" services-single p-4 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg "
                style={{ borderRadius: 20, justifyContent: "center" }}
              >
                {/* <span className="ti-headphone-alt icon-lg color-secondary d-block mb-4"></span> */}
                <Link
                  to="/NursingContentComp3"
                  style={{ textDecoration: "none" }}
                >
                  <h5 className="mb-4 text-center">
                    The Infant Requiring Assisted Ventilation
                  </h5>
                  <hr></hr>
                </Link>
                {/* <a href="services-details.html" target="_blank" className="detail-link mt-4">Read more <span
                                className="ti-arrow-right"></span></a> */}
                <strong>Number of pages: </strong>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
                <strong> 9 </strong>
                <br></br> <br></br>
                <strong>Writer’s Qualifications: </strong>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <strong> Graduation</strong> <br></br> <br></br>
                <strong>Academic level: </strong>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &ensp;
                <strong>Diploma</strong> <br></br> <br></br>
                <strong>Tags: </strong>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <strong>Top Universities In UK </strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurServices_3Cards;
