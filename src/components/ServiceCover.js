import React from "react";
import Typist from 'react-typist';
import 'animate.css';
import TypeWriter from 'react-animate-typewriter';
export default function ServiceCover() {
  return (
      <section className="hero-section ptb-100 philosophy">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-9 col-lg-7">
              <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
                <h2 className="text-white mb-0 ">
                  The
                  <TypeWriter typing={1} className="ico"> Fastest</TypeWriter>
                 Way to Better Grades
                </h2>
                <p className="text-center">
                  Put a stop to deadline pressure, and have your homework done
                  by an expert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
