
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom'


export default function HeaderSection() {
  return (
    <div className="App">
     {/* <!--loader start--> */}
{/*      
<div id="preloader">
    <div className="loader1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div> */}

{/* <!--loader end--> */}

{/* <!--header section start--> */}
<header className="header">
    {/* <!--topbar start--> */}
    <div id="header-top-bar" className="primary-bg py-2">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-7 col-lg-7 d-none d-md-block d-lg-block">
                    <div className="topbar-text text-white">
                        <ul className="list-inline">
                            <li className="list-inline-item"><span className="fa fa-headphones-alt mr-1"></span> 24x7 Technical Support</li>
                            <li className="list-inline-item"><span className="fa fa-phone-alt mr-1"></span> 883-4565-123456</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="topbar-text text-white">
                        <ul className="list-inline text-md-right text-lg-right text-left  mb-0">
                            <li className="list-inline-item">
                                <a href="#" className="rounded"><span className="fa fa-facebook-f"></span></a>
                            </li>
                            <li className="list-inline-item"><a href="#" className="rounded"><span
                                    className="fa fa-twitter"></span></a>
                            </li>
                            <li className="list-inline-item"><a href="#" className="rounded"><span
                                    className="fa fa-linkedin-in"></span></a>
                            </li>
                            <li className="list-inline-item"><a href="#" className="rounded"><span
                                    className="fa fa-dribbble"></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--topbar end-->
    <!--start navbar--> */}
    <nav className="navbar navbar-expand-lg fixed-top white-bg">
        <div className="container">
            <a className="navbar-brand" href="index.html">
                {/* <img src="img/assignment-Writing.png" alt="logo"width="200" style={{backgroundColor:'grey',borderRadius:20}} className="img-fluid"/> */}
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="ti-menu"></span>
            </button>
            <div className="collapse navbar-collapse h-auto" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto menu">
                    

                    <Link to="/service"> <li><a href="#" className="dropdown-toggle">Services</a> 
                        <ul className="sub-menu">
                       <Link> <li><a href="#" className="dropdown-toggle">Assigment Section 1</a>
                            <ul className="sub-menu">
                            <Link to='/PhilosophyComp'> <li><a href="">Philosophy Assignment</a></li></Link>
                            <Link to='/NursingComp'> <li><a href="">Nursing Assignment</a></li></Link>
                            <Link to='/FinanceComp'> <li><a href="">Finance Assignment</a></li></Link>
                            <Link to='/MathComp'> <li><a href="">Maths Assignment</a></li></Link>
                            <Link to='/PhysicsComp'> <li><a href="">Physics Assignment</a></li></Link>
                            <Link to='/ManagementComp'> <li><a href="">Management Assignment</a></li></Link>
                            </ul>
                        </li></Link>
                        
                        <Link><li><a href="#" className="dropdown-toggle">Assigment Section 2</a>
                         <ul className="sub-menu">
                           <Link to='/ProgrammingComp'> <li><a>Programming Assignment</a></li> </Link>
                           <Link to='/psychology'> <li><a >Psychology Assignment</a></li> </Link> 
                           <Link to='/sociology'> <li><a href="">Sociology Assignment</a></li>   </Link>             
                           <Link to='/LinguisticComp'> <li><a href="">Linguistic Assignment</a></li> </Link> 
                           <Link to="/ComputerComp"> <li><a href="">Computer Science Assignment</a></li> </Link> 
                           <Link to='/BusinessComp'> <li><a href="">Business Assignment</a></li> </Link> 
                            </ul>
                          </li>  </Link>

                         <Link> <li><a href="#" className="dropdown-toggle">Assigment Section 3</a>
                           <ul className="sub-menu">
                              <Link to='/AccountingComp'> <li><a href="">Accounting Assignment</a></li></Link> 
                              <Link to='/EconomicComp'> <li><a href="">Economic Assignment</a></li></Link> 
                              <Link to='/HistoryComp'> <li><a href="">History Assignment</a></li></Link> 
                              <Link to='/GeographyComp'> <li><a href="">Geography Assignment</a></li></Link> 
                              <Link to='/LawComp'> <li><a href="">Law Assignment</a></li></Link> 
                              <Link to='/ChemistryComp'> <li><a href="">Chemistry Assignment</a></li></Link> 
                              </ul>
                          </li></Link>

                        <Link>  <li><a href="#" className="dropdown-toggle">Assigment Section 4</a>
                           <ul className="sub-menu">
                           <Link to='/ITComp'> <li><a href="">IT Assignment</a></li> </Link>
                           <Link to='/EngineeringComp'> <li><a href="">Engineering Assignment</a></li></Link>
                           <Link to='/EnglishComp'> <li><a href="">English Assignment</a></li></Link>
                           <Link to='/BiologyComp'> <li><a href="">Biology Assignment</a></li></Link>
                           <Link to='/MarketingComp'> <li><a href="">Marketing Assignment</a></li></Link>
                           <Link to='/statistics'> <li><a href="">Statistics Assignment</a></li></Link>
                              </ul>
                         </li></Link>
                           
                        </ul>
                    </li> </Link>
                    <Link to="/samples"> <li><a href="" > Samples</a> </li> </Link>
                    <Link to="/about"> <li> <a href=""> About Us</a></li> </Link>

                    <Link to="/ourexpert"> <li><a href="">Expert</a></li>  </Link>
                    <Link to="/ReviewComp"><li><a href="">Reviews</a></li></Link>
                    <Link to=""><li><a href=""> FAQs</a></li></Link>
                    <Link to="/PortfolioComp"><li><a href=""> Porfolio</a></li></Link>
                    <Link to=""><li><a href="" className="secondary-solid-btn check-btn">Call Back</a></li></Link>
                </ul>
            </div>
        </div>
    </nav>
</header>
{/* <!--header section end--> */}

    </div>
  );
}

