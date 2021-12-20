
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
    
    {/* <!--topbar end-->
    <!--start navbar--> */}
    <nav className="navbar navbar-expand-lg  white-bg">
        <div className="container">
            <Link to="/service"><a className="navbar-brand" href="">
                <img style={{backgroundColor:'#919191',width:150}} src="img/assignment-Writing.png" alt="logo" className="rounded img-fluid"/>
            </a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="ti-menu"></span>
            </button>
            <div className="collapse navbar-collapse h-auto" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto menu">
                <Link to="/service"> <li><a href="#" className="dropdown-toggle">Services</a> 
                        <ul className="sub-menu">
                       <Link> <li><a style={{paddingTop:14,paddingBottom:14,paddingRight:25,paddingLeft:28,marginLeft:-10,marginTop:-15}} href="#" className="dropdown-toggle">Assigment Section 1</a>
                            <ul className="sub-menu">
                            <Link to='/PhilosophyComp'> <li style={{paddingTop:-30}}><a href="">Philosophy Assignment</a></li></Link>
                            <Link to='/NursingComp'> <li style={{paddingRight:20}}><a href="">Nursing Assignment</a></li></Link>
                            <Link to='/FinanceComp'> <li style={{paddingRight:20}}><a href="">Finance Assignment</a></li></Link>
                            <Link to='/MathComp'> <li style={{paddingRight:20}}><a href="">Maths Assignment</a></li></Link>
                            <Link to='/PhysicsComp'> <li style={{paddingRight:20}}><a href="">Physics Assignment</a></li></Link>
                            <Link to='/ManagementComp'> <li><a href="">Management Assignment</a></li></Link>
                            </ul>
                        </li></Link>
                        
                        <Link><li style={{marginTop:-20}}><a style={{paddingTop:14,paddingBottom:14,paddingRight:25,paddingLeft:25,marginLeft:-10,marginTop:-20}} href="#" className="dropdown-toggle">Assigment Section 2</a>
                         <ul className="sub-menu">
                           <Link to='/ProgrammingComp'> <li><a>Programming Assignment</a></li> </Link>
                           <Link to='/psychology'> <li><a >Psychology Assignment</a></li> </Link> 
                           <Link to='/sociology'> <li><a href="">Sociology Assignment</a></li>   </Link>             
                           <Link to='/LinguisticComp'> <li><a href="">Linguistic Assignment</a></li> </Link> 
                           <Link to="/ComputerComp"> <li><a href="">Computer Science Assignment</a></li> </Link> 
                           <Link to='/BusinessComp'> <li><a href="">Business Assignment</a></li> </Link> 
                            </ul>
                          </li>  </Link>

                         <Link> <li style={{marginTop:-20}}><a style={{paddingTop:14,paddingBottom:14,paddingRight:25,paddingLeft:26,marginLeft:-10,marginTop:-20}} href="#" className="dropdown-toggle">Assigment Section 3</a>
                           <ul className="sub-menu">
                              <Link to='/AccountingComp'> <li><a href="">Accounting Assignment</a></li></Link> 
                              <Link to='/EconomicComp'> <li><a href="">Economic Assignment</a></li></Link> 
                              <Link to='/HistoryComp'> <li style={{paddingRight:20}}><a href="">History Assignment</a></li></Link> 
                              <Link to='/GeographyComp'> <li><a href="">Geography Assignment</a></li></Link> 
                              <Link to='/LawComp'> <li style={{paddingRight:30}}><a href="">Law Assignment</a></li></Link> 
                              <Link to='/ChemistryComp'> <li><a href="">Chemistry Assignment</a></li></Link> 
                              </ul>
                          </li></Link>

                        <Link>  <li style={{marginTop:-20}}><a style={{paddingTop:14,paddingBottom:14,paddingRight:25,paddingLeft:25,marginLeft:-10,marginTop:-20,marginBottom:-20}} href="#" className="dropdown-toggle">Assigment Section 4</a>
                           <ul className="sub-menu">
                           <Link to='/ITComp'> <li style={{paddingRight:45}}><a style={{marginTop:-20}} href="">IT Assignment</a></li> </Link>
                           <Link to='/EngineeringComp'> <li><a style={{marginTop:-8}} href="">Engineering Assignment</a></li></Link>
                           <Link to='/EnglishComp'> <li style={{paddingRight:15}}><a style={{marginTop:-8}} href="">English Assignment</a></li></Link>
                           <Link to='/BiologyComp'> <li style={{paddingRight:15}}><a style={{marginTop:-8}} href="">Biology Assignment</a></li></Link>
                           <Link to='/MarketingComp'> <li><a style={{marginTop:-8}} href="">Marketing Assignment</a></li></Link>
                           <Link to='/statistics'> <li><a style={{marginTop:-8}} href="">Statistics Assignment</a></li></Link>
                              </ul>
                         </li></Link>
                           
                        </ul>
                    </li> </Link>
                    <Link to="/samples"> <li><a href="" > Samples</a> </li> </Link>
                    <Link to="/about"> <li> <a href=""> About Us</a></li> </Link>

                    <Link to="/ourexpert"> <li><a href="">Expert</a></li>  </Link>
                    <Link to="/ReviewComp"><li><a href="">Reviews</a></li></Link>
                    <Link to="/FAQComp"><li><a href=""> FAQs</a></li></Link>
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

