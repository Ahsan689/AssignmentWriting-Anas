import React from "react";

export default function CopyRights() {

  
  return (
    <div>
      <footer className="footer-section">
        {/* <!--footer copyright start--> */}
        
        <div className="absolute-footer light dark-bg text-center"style={{backgroundColor:'#cccfce'}}>
          <div className="container clearfix">
            <div className="footer-primary">
              <div className="copyright-footer">
                <span className="f-link ">
                <br></br>
                  <a className="copyrights-decoration" href="javascript:void(0)">Refund Policy</a>|
                  <a className="copyrights-decoration" href="javascript:void(0)">Cancellation Policy</a>|
                  <a className="copyrights-decoration" href="javascript:void(0)">Terms &amp; Conditions</a>|
                  <a className="copyrights-decoration" href="javascript:void(0)">Privacy Policy</a>|
                  <a className="copyrights-decoration" href="javascript:void(0)">FAQ</a>|
                  <a className="copyrights-decoration" href="javascript:void(0)" rel="">
                    Contact us
                  </a>
                  | <a className="copyrights-decoration" href="javascript:void(0)">Refer a Friend</a>|
                  <a className="copyrights-decoration" href="javascript:void(0)">Top Writers</a>|
                  <a className="copyrights-decoration" href="javascript:void(0)">Usage policy</a>
                </span>
              </div>
            </div>
          </div>
          <br></br>
          <div className="absolute-footer light medium-text-center text-center">
            <div className="container clearfix">
              <div className="footer-primary">
                <div className="copyright-footer">
                  <bold>Copyright 2021 © <strong>The Assignment Writing.</strong> All
                  rights Reserved </bold>
                </div>
                <br></br>
              </div>
            </div>
          </div>

          <a
            href="#top"
            className="back-to-top button invert plain is-outline hide-for-medium icon circle fixed bottom z-1 active"
            id="top-link"
          >
            <i className="icon-angle-up"></i>
          </a>
        </div>
        {/* <!--footer copyright end--> */}
      </footer>
    </div>
  );
}
