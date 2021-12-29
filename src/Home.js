import logo from "./logo.svg";
import "./App.css";
import assignmentwriting from "../src/assets/img/assignment-Writing.png";
import {
  Navbar,
  NavDropdown,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Header from "./components/Header";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../src/assets/img2/2-min.jpg";
import img2 from "../src/assets/img2/3-min.jpg";
import img3 from "../src/assets/img2/4-min.jpg";
import img4 from "../src/assets/img2/5-min.jpg";
import img5 from "../src/assets/img2/6-min.jpg";
import img6 from "../src/assets/img/7.jpg";
import img7 from "../src/assets/img/8.jpg";
import icon1 from "../src/assets/img2/icon-benefits-1-1.png";
import icon2 from "../src/assets/img2/icon-benefits-2-1.png";
import icon3 from "../src/assets/img2/icon-benefits-3-1.png";
import icon4 from "../src/assets/img2/icon-benefits-4-1.png";
import icon5 from "../src/assets/img2/SS2Se.png";
import icon6 from "../src/assets/img2/SSS3e.png";
import icon7 from "../src/assets/img2/Untissdsadtled-2.png";
import card1 from "../src/assets/img2/ser1-min.png";
import card2 from "../src/assets/img2/ser2-min.png";
import card3 from "../src/assets/img2/ser3-min.png";
import card4 from "../src/assets/img2/ser4-min.png";
import Footer from "./components/Footer";
import Typewriter from "typewriter-effect";

import "animate.css";

// import { Link } from 'react-router-dom'

function Home() {
  return (
    // <div classNameName="App">
    //   <header classNameName="App-header">,
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      {/*topbar start*/}

      <Header />
      <section className="ptb-70 cov">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="hero-slider-content text-white pt-5">
                <h1 className="">
                  <span className="ico">The</span>{" "}
                  <span className="text-white">
                    <div className="type-in">
                  <Typewriter
                      options={{
                        strings: ["Assignment"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                   </div>
                  </span>{" "}
                  <span className="ico">Writing</span>
                </h1>
                <p className="lead">
                  {" "}
                  <i className="fa fa-check check-2 ico " />
                  Quality Assignment Help By Expert Writers
                </p>
                <p className="lead">
                  {" "}
                  <i className="fa fa-check check-2 ico" />
                  100+ Students Support Executive to Listen Students Requirement
                </p>
                <p className="lead">
                  <i className="fa fa-check check-2 ico" />
                  Highest Grade for All Academic Needs
                </p>
                <p className="lead">
                  <i className="fa fa-check check-2 ico" />
                  10+ Years Of Experience in Academic Writing
                </p>
                <p className="lead">
                  <i className="fa fa-check check-2 ico" />
                  Best Assignment Writer
                </p>
                <p className="lead">
                  <i className="fa fa-check check-2 ico" />
                  Global Assignment Helper
                </p>
                <p className="lead">
                  <i className="fa fa-check check-2 ico" />
                  5,067 Academic Assignment Writers
                </p>
                <div className="action-btns mt-3">
                  <a href="#" className="btn primary-bg text-light mr-4">
                    Login
                  </a>
                  <a href="#" className="btn primary-bg text-light">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6">
              <div className="image-wrap pt-5">
                {/* <img src="img/t1-hero-img.svg" class="img-fluid custom-width" alt="hero" /> */}
                <h1>
                  <span className="ico">The</span>{" "}
                  <span className="text-white">
                    <div className="type-in">
                    <Typewriter
                      options={{
                        strings: ["Assignment"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                   </div>
                  </span>{" "}
                  <span className="ico">Writing</span>
                </h1>
                <p className="text-white">
                  Get Assignment Help From World’s No.1 Assignment Help Company
                </p>
                <form action>
                  <input
                    type="email"
                    name="email"
                    className="p-2 Price"
                    placeholder="Enter your Email"
                    // color="#000"
                    id="myinp"
                    size={30}
                    minLength
                    style={{ width: "81%",color:'black' }}
                  />
                  <br />
                  <br />
                  <input
                  id="myinp"
                    type="number"
                    className="p-2"
                    placeholder="Enter Your Number"
                    style={{ width: "81%" ,}}
                   
                  />
                  <br />
                  <br />
                  <input
                    id="myinp"
                    type="text"
                    name="course"
                    className="p-2"
                    placeholder="Course/Codes/Subject"
                    size={30}
                    style={{ width: "81%" }}
                  />
                  <br />
                  <br />
                  <input
                    type="number"
                    className="p-2"
                    placeholder="No of Pages"
                    id="myinp"
                    style={{ width: "81%" }}
                    size={60}
                  />
                  <br />
                  <br />
                  <input
                    type="date"
                    className="p-2"
                    name="age"
                    placeholder="Enter your Age"
                    id="myinp"
                    size={60}
                    style={{ width: "81%" }}
                  />
                  <br />
                  <br />
                  <input
                    type="time"
                    className="p-2"
                    name="time"
                    id="myinp"
                    size={60}
                    minLength={60}
                    style={{ width: "81%" }}
                  />
                  <br />
                  <br />
                  <button className="text-white primary-bg p-1" type="submit">
                    <strong>Free Assistance</strong>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="promo-section ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center numbers">
              <a href="/" className="btn btn-pill primary-bg text-dark bor">
                <p>It,s in the number</p>
              </a>
              {/* <span className="animate-border mr-auto ml-auto mb-4" /> */}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 col-lg-4 mt-4">
              <a href="#">
                <div className=" single-promo-hover rounded text-center white-bg p-5 h-100">
                  <div className>
                    <span className />
                  </div>
                  <h1 className="ico">182 300+</h1>
                  <h5 className="">Dlivery Orders</h5>
                  <i className="fa fa-book ico bo"></i>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-4 mt-4">
              <a href="#">
                <div className=" single-promo-hover rounded text-center white-bg p-5 h-100">
                  <div className>
                    <span className />
                  </div>
                  <h1 className="ico">5843+</h1>
                  <h5>Experts</h5>
                  <i class="fa fa-cloud-download ico bo"></i>
                </div>
              </a>
            </div>
            <div className="col-md-4 col-lg-4 mt-4">
              <a href="#">
                <div className=" single-promo-hover rounded text-center white-bg p-5 h-100">
                  <div className>
                    <span className />
                  </div>
                  <h1 className="ico">4.9/5</h1>
                  <h5>Client Rating</h5>
                  <i className="fa fa-star ico " />
                  <i className="fa fa-star ico " />
                  <i className="fa fa-star ico " />
                  <i className="fa fa-star ico " />
                  <i className="fa fa-star ico" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
<div className="container text-center bg-dark">
  <br />
  <h1 className="text-center ico">Power Content Creation </h1>
  <h5 className="text-white">The Salable Content Marketplace for Agencies &amp; Retailers</h5>
  <div className="row justify-content-center">
    <div className="col-md-8">
  <ul className="d-flex">
    <li  /><i className="fa fa-check  ico"></i>Ghostwritten Contenr
    < li className='mr-3'/><i className="fa fa-check ico ml-5"></i>Custom Writing, Rewriting &amp; Editing
    <li /><i className="fa fa-check ico ml-5"></i>Quick Turnaround Time
    <li /><i className="fa fa-check ico ml-5"></i>Unlimited Revisions
    <br />
    <br />
    <br />
  </ul>
  </div>
  </div>
</div>

</section> */}
      <section className="text text-center p-5">
        <div className="container">
          <h2 className="ico power">Power Content Creation</h2>
          <p>The Salable Content Marketplace for Agencies & Retailers</p>
          <div className="">
            <p className="ml-4 d-inline">
              <i className="fa fa-check ico"></i>Ghostwritten Contenr
            </p>
            <p className="ml-4 d-inline">
              <i className="fa fa-check ico"></i>Custom Writing, Rewriting &
              Editing
            </p>
            <p className="ml-4 d-inline">
              <i className="fa fa-check ico"></i>Quick Turnaround Time
            </p>
            <p className="ml-4 d-inline">
              <i className="fa fa-check ico"></i>Unlimited Revisions
            </p>
          </div>
        </div>
      </section>

      <section></section>
      <section className="mt-3">
        <div className="top mb-3">
          <h2 className="text-center">
            <span className="heading">The</span> Assignment{" "}
            <span className="heading">Writing</span>
          </h2>
          <span className="animate-border mr-auto ml-auto mb-4" />
          <p className="text-center">
            Get Assignment Help From World’s No.1 Assignment Help Company
          </p>
        </div>

        <div className="container">
          <Carousel fade>
            <Carousel.Item interval={300}>
              <img
                className="d-block w-100"
                width="100%"
                src={img1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={img2}
                width="100%"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img4}
                width="100%"
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img5}
                width="100%"
                alt="Fifth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img6}
                width="100%"
                alt="Six slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <h3 className="text-center">
            THE ASSIGNMENT WRITING TO MEET COURSEWORK OBLIGATIONS
          </h3>
          <span className="animate-border mr-auto ml-auto mb-4" />
          <p className="para22">
            Working on assignments can be a challenging and exciting learning
            experience. It allows students to engage in research and learn new
            concepts. However, not many students can learn these new concepts
            effectively. As such, they often have problems working on academic
            assignments. The appalling part is that tasks can contribute up to
            35% of the coursework grade. However, while assignments are
            essential for coursework grades, not many students can meet these
            obligations. Some students have challenges, and they require special
            help in working on such tasks. With adequate educational support, a
            student can prosper and achieve their life goals. We are here to
            provide reliable
          </p>
          <h3 className="text-center">
            CHALLENGES IN ACADEMIC ASSIGNMENT WRITING
          </h3>
          <span className="animate-border mr-auto ml-auto mb-4" />
          <p className="para22">
            Students face a host of unique challenges when it comes to working
            on academic assignments. The first challenge for some students is
            that they fail to understand the concepts taught in class. These are
            sometimes students with learning disabilities or international
            students as well. As such, these students are likely to struggle in
            producing assignments that can get good grades.
          </p>
          <p className="para22">
            Furthermore, students also have obligations such as work, or
            complications such as health. These issues can affect the students’
            ability to set aside time to work on school projects. Besides that,
            the number of scam services out there is also appalling. Some of
            these writing platforms are known for submitting poor work to
            clients. The Assignment Writing and more.
          </p>
          <h3 className="text-center">THE SOLUTION</h3>
          <span className="animate-border mr-auto ml-auto mb-4" />
          <p className="para22">
            The ideal solution, in this case, would be the student to invest in
            a reliable assignment help platform. We are here to help you work
            such projects and more. You fill out the simple order form and get
            assigned to one of our writers at the The Assignment Writing site.
            More so, before settling on a particular academic service, we
            recommend that you evaluate the site for the best academic outcomes.
            A good assignment writing service is professional and can respond to
            your queries fast.
          </p>
        </div>
      </section>
      <section className="mt-5">
        <div className="container text-center">
          <h2>Price Calculator</h2>
          <span className="animate-border mr-auto ml-auto mb-4" />
          <form action>
            <label htmlFor="assignment">Select Subject:</label>
            <select name id="assignment " className="p-2  rounded-pill math">
              <option value>Math Assignment</option>
              <option value>English Assignment</option>
              <option value>Biology Assignment</option>
              <option value>IT Assignment</option>
              <option value>Economic Assignment</option>
              <option value>History Assignment</option>
              <option value>Geography Assignment</option>
              <option value>Sociology Assignment</option>
              <option value>Law Assignment</option>
              <option value>Linguistic Assignment</option>
              <option value>Business Assignment</option>
              <option value>philosophy Assignment</option>
              <option value>Accounting Assignment</option>
              <option value>Statistics Assignment</option>
              <option value>Computer Science Assignment</option>
              <option value>Marketing Assignment</option>
              <option value>managment Assignment</option>
              <option value>Programming Assignment</option>
              <option value>Finance Assignment</option>
              <option value>Engineering Assignment</option>
              <option value>psychology Assignment</option>
            </select>
            <br />
            <label htmlFor="page">Select Page</label>
            <select name id="page" className="p-2 rounded-pill mt-3 page11">
              <option value>page 1</option>
              <option value>Page 2</option>
              <option value>Page 3</option>
              <option value>Page 4</option>
              <option value>Page 5</option>
              <option value>Page 6</option>
              <option value>page 7</option>
              <option value>Page 8</option>
              <option value>page 9</option>
              <option value>page 10</option>
              <option value>page 10</option>
              <option value>page 10</option>
              <option value>page 10</option>
              <option value>page 11</option>
              <option value>page 12</option>
              <option value>page 13</option>
              <option value>Page 14</option>
              <option value>Page 15</option>
              <option value>Page 16</option>
              <option value>Page 17</option>
              <option value>Page 18</option>
              <option value>Page 19</option>
              <option value>Page 20</option>
            </select>
          </form>
        </div>
      </section>
      <section className="services-section ptb-100 gray-light-bg mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center mb-5">
                <h1 className="">Total $ 0 </h1>
                <span className="animate-border mr-auto ml-auto mt-4 mb-4" />
                <div className="effect">
                <h2 className="assign">
                  Features of Our
                  <div className="type-out">
                  <Typewriter
                    options={{
                      strings: ["The", "Assignment" ,"Writing"],
                      autoStart: true,
                      loop: true,
                    }}
                  />{" "}
                  </div>
                  Service
                </h2>
                </div>
                <span className="animate-border mr-auto ml-auto mt-4 mb-4" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 animate__animated animate__backInLeft">
              <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                <span className="fa fa-truck icon-lg color-secondary d-block mb-4" />
                <h5>On Time Delivery</h5>
                <p className="mb-0">
                  Being the best professional writing services provider, we
                  never compromise when it comes to deadline and delivery of
                  assignment on time. Our writers make sure that all orders are
                  submitted prior to the deadline so that you can proofread your
                  paper before handing it over to your tutor.
                </p>
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 animate__animated animate__backInLeft">
              <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                <span className="fa fa-phone icon-lg color-secondary d-block mb-4" />
                <h5>24 X 7 Live Help</h5>
                <p className="mb-3">
                  We work 24x7 for your convenience. Our customer support
                  executives are available round the clock in case you need any
                  professional assistance. Feel free to contact our assignment
                  writing services any time via phone, email or live chat..
                </p>
                <br />
                <br />
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 animate__animated animate__backInLeft">
              <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                <span className="fa fa-user icon-lg color-secondary d-block mb-4" />
                <h5>5,068 PhD Experts</h5>
                <p className="mb-2">
                  Knowledge, experience and creativity are three features we
                  consider before hiring a writer. All our professional writers
                  have acquired Ph.D. credentials from reputed universities
                  across the world. We have writers for each and every subject
                  and always help, always get in touch with us.
                </p>
                <br />
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 animate__animated animate__backInRight">
              <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                <span className="fa fa-book icon-lg color-secondary d-block mb-4" />
                <h5>Services For All Subjects</h5>
                <p className="mb-3">
                  It does not matter whether you are a freshman in college or
                  finishing your final assignment to acquire Ph.D. degree, our
                  writers can provide you professional writing assistance on any
                  subject at any level. We have experts for Law, Nursing,
                  Management, Accounting, Marketing,
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 animate__animated animate__backInRight">
              <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                <span className="fa fa-certificate icon-lg color-secondary d-block mb-4" />
                <h5>Plagiarism Free Work</h5>
                <p className="mb-2">
                  To avoid any plagiarism, we check our completed papers three
                  times — after writing, editing and proofreading — using
                  reliable plagiarism detection software, . plagiarism. We only
                  provide customized 100 percent original papers
                </p>
                <br />
                <br />
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 animate__animated animate__backInRight">
              <div className="services-single text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                <span className="fa fa-money icon-lg color-secondary d-block mb-4" />
                <h5>Best Price Guarantee</h5>
                <p className="mb-0">
                  You get premium service at the best market price. Our best
                  price guarantee ensures that the features we offer cannot be
                  matched by any of the competitors, in case they do - “We will
                  beat the price”. Thus, for an effective and cheap assignment
                  help, always count on us.
                </p>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <services section end>
        <div className="client">
          <div className="container-fuild">
            <h2 className="text-center number">THE NUMBERS SAY IT ALL</h2>
            <div className="row text-center client">
              <div className="col-md-4 col-lg-4 col-sm-12">
                <i className="fa fa-truck truck" />
                <h1 className="number">6583</h1>
                <p className="number">DELIVERED ORDERS</p>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12">
                <i className="fa fa-user-circle circle" />
                <h1 className="number">2000</h1>
                <p className="number">AUTHORS</p>
              </div>
              <div className=" col-lg-4 col-md-4 col-sm-12 user">
                <i className="fa fa-users uses" />
                <h1 className="number">4.9/5</h1>
                <p className="number">CLIENT RATING</p>
              </div>
            </div>
          </div>
        </div>
      </services>
      <section>
        <div className="container  Team text-center">
          <div className="row justify-content-center mt-50px ">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <p className="student ">
                72% of students use assignment help services at least once. You
                just have to choose a quality writing company.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <img src={icon1} alt height={52} width={72} />
              <h2>UK Team</h2>
              <p className="uk">
                We've been called the UK's premier
                <br /> essay writing service for a good reason:
                <br /> our dedication to providing students with
                <br /> an affordable, quality service
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <img src={icon2} alt width={46} height={52} />
              <h2>Guarantees</h2>
              <p className="uk ">
                Our quality guarantees offer you peace of
                <br /> mind about the work you receive from us
                <br /> and assurance that your personal and
                <br /> payment details are safe and secure.
              </p>
            </div>
          </div>
          {/* row 1 complete */}
          <div className="row mt-4">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <img src={icon3} alt height={52} width={54} />
              <h2>Writers testing</h2>
              <p>
                We rigorously test our writers and check their qualifications
                and experience before engaging them and periodically review
                their work to ensure the highest standards are maintained.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <img src={icon4} alt width={59} height={52} />
              <h2>Care Centre</h2>
              <p>
                We have a dedicated team of customer representatives available
                24/7 to any your questions about any aspect of our products and
                services.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <div className="row justify-content-around mb-5">
            <div className="col-lg-3 col-md-3 col-sm-12 text-center sha mt-4">
              <img src={icon5} className alt />
              <h2>Secure Payments</h2>
              <p>Sleep tight: PayPal watches over your rights.</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 text-center sha mt-4">
              <img src={icon6} alt />
              <h2>Data Protection</h2>
              <p>We encrypt everything. It's all confidential.</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 text-center sha mt-4">
              <img src={icon7} alt />
              <h2>Guaranteed Originality</h2>
              <p>Get a free plagiarism report upon request.</p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section>
          <div className="container service ">
            <h3 className="text-center services ">ASSIGNMENT HELP SERVICES</h3>
            <span className="animate-border mr-auto ml-auto mb-4 mm" />
            <div className="row  justify-content-around mn">
              <div className="col-md-3 sha  shadow mt-4">
                <img src={card1} alt="card image 1" />
                <h5 className="help ico">
                  <b>Custom Assignment Help</b>
                </h5>
                <p className="provide">
                  We provide most reliable and proficient service to help you
                  work on those intricate assignments. Our Ph.D. experts carry a
                  distinctive mode of expression assisting students to write
                  flawless papers.
                </p>
              </div>
              <div className="col-md-3 sha shadow mt-4">
                <img src={card2} alt="card image 2" />
                <h2 className="help-1 ico">
                  <b>Custom Essay Writing Help</b>
                </h2>
                <p className="provide-1">
                  We offer premium essay writing help in a customised manner.
                  Our Native essay tutors help you meet university standards in
                  terms of writing and structuring of academic essays and gain
                  academic excellence.
                </p>
              </div>
              <div className="col-md-3 sha shadow mt-4">
                <img src={card3} alt="card image 3" />
                <h2 className="help-1 ico">
                  {" "}
                  <b>Dissertation Writing Help</b>
                </h2>
                <p className="provide-1">
                  We offer distinctive service in detailed research for your
                  dissertation on any topic from any subject. Our experts help
                  you select appropriate methodology to research ensuring valid
                  and reliable results.
                </p>
              </div>
              <div className="col-md-3 sha shadow mt-4">
                <img src={card4} alt="card image 4" />

                <h2 className="help-1 ico">
                  <b>Custom Coursework Help</b>
                </h2>
                <b>
                  <p className="provide-1">
                    We provide dependable coursework help to meet your writing
                    needs in a customized manner. Whether it is homework help,
                    case study or online exam help we have authentic writers
                    ensuring excellence.
                  </p>
                </b>
              </div>
              <b></b>
            </div>
            <b>{/* end */}</b>
          </div>
          <b></b>
        </section>
        <b></b>
      </div>
      <section>
        <div className="container join">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <h5>
                <span className="ico">Business Writing</span>
              </h5>
              <p>
                Bussines Proposal Writing Bussines Plan Writing Bussines
                Presentation Reports/Case Studies Corporate Profiles Email
                Writing Bussines Letter Writing Speech Writing Script Analysis
                Script Editing
              </p>
            </div>
            <div className="col-md-3 col-sm-12">
              <h5>
                <span className="ico">Web Content Writing</span>
              </h5>
              <p>
                Web Copy Writing Product Description White Paper Writing Amazon
                Product description Landing Page Copywriting Website Content
                Revamp
              </p>
            </div>
            <div className="col-md-3  col-sm-12">
              <h5>
                <span className="ico"> Personal Writing</span>
              </h5>
              <p>
                Resume Writing Cover Letters Linkedin Profile Writing Linkedin
                Profile Optimization Online Digital Resume Personal/Job
                statement Professional Biography Follow up letter Thankyou
                letter
              </p>
            </div>
            <div className="col-md-3  col-sm-12">
              <h5 className="ico">Marketing Content Writing</h5>
              <p>
                Brochure Writing Newsletter Writing Press Release Writing
                Facebook Posts Linkedin Profile Creation
              </p>
            </div>
            <div className="col-md-3  col-sm-12 join-2">
              <h5>
                <span className="ico">SEO Content Writing</span>
              </h5>
              <p>
                Article Writing Product Reviews SEO Blog Writing SEO Newsletter
                Writing web Page SEO Blog Management
              </p>
            </div>
            <div className="col-md-3  col-sm-12 join-2">
              <h5 className="ico">Creative Writing</h5>
              <p>
                Ebook Writing Editing Proof Reading Infographs Slogan Writing
                Video Script Writing
              </p>
            </div>
            <div className="col-md-3 col-sm-12 join-2">
              <h5 className="ico">Other Services</h5>
              <p>Editing and Proofreading Samples</p>
            </div>
            <div className="col-md-3  col-sm-12 join-2">
              <h5 className=" ico">Social Media</h5>
              <i className="fa fa-facebook social mr-4" />
              <i className="fa fa-twitter social-1 mr-4" />
              <i className="fa fa-youtube social-2" />
            </div>
          </div>
        </div>
      </section>
      <section className="post">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-4">
              <br />
              <h2 className="writting">
                Assignment
                <br />
                Writting
              </h2>
            </div>
            <div className="col-md-4">
              <br />
              <h3 className="writting">
                Visit
                <br /> Website
              </h3>
              <h5 className="writting">www.assignmentwriting.com</h5>
              <h5 className="writting">Email Us</h5>
              <h5 className="writting">theassignmentwriting12@gmail.com</h5>
              <h5 className="writting">info@theassignmentwriting.com</h5>
            </div>
            <div className="col-md-4 ">
              <br />
              <h3 className="writting">Contact Us</h3>
              <h5 className="number">US Toll Free +18883526601</h5>
              <h5 className="number">UK Toll Free +448000418794</h5>
              <h5 className="number">UK Phone NO +447418343231</h5>
              <h5 className="number">US Phone NO +16469165519</h5>
              <h5 className="number">US Wattsapp NO +15167383453</h5>
              <h5 className="number">UK Wattsapp NO +447429125487</h5>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
