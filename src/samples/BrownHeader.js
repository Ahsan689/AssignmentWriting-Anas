
import React,{useState} from 'react';
// import 'font-awesome/css/font-awesome.min.css';0
import {Link} from 'react-router-dom'
// import { BsList } from "react-icons/bs";
// import $ from 'jquery'

export default function BrownHeader() {

// 
    // function myFunction(){
    //     $('#navbarSupportedContent').toggleClass("show");
       
    // }

    const [isOpen, setIsOpen] = useState(false);
    // function myFunction(){
    //     if(isOpen === false)
    //     {
    //         setIsOpen(true);
    //     }
    //     else{setIsOpen(false)}
    // }

  
    

  return (
      <>
        
   
    {/* <!--start navbar--> */}
   
    <section className="header">
    <div id="header-top-bar" className="py-0 fixed-top "style={{ backgroundImage: `linear-gradient(to right, black, #4A2D1F` }}>
        
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-4 col-md-7 col-lg-7 d-none d-md-block d-lg-block">
                    <div className="topbar-text text-white">
                        <ul className="list-inline">
                            <li className="list-inline-item pt-1"><bold className="fa fa-headphones"></bold> <bold className="pt-1">24x7 Technical Support</bold></li>
                            <li className="list-inline-item pt-1"><span className="fa fa-phone"></span> <bold className="pt-1">883-4565-123456</bold></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="topbar-text text-white">
                        <ul className="list-inline text-md-right text-lg-right text-left  mb-0">
                            <li className="list-inline-item">
                                <a href="javascript:void(0)" className="rounded"><span className="fa fa-facebook-f"></span></a>
                            </li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><span
                                    className="fa fa-twitter"></span></a>
                            </li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><span
                                    className="fa fa-linkedin"></span></a>
                            </li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><span
                                    className="fa fa-dribbble"></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <nav className="navbar navbar-expand-lg white-bg">
        <div className="container">
            <Link to="/"><a className="navbar-brand" href="/">
                <img src="img/assignment-Writing.png" alt="logo" className="rounded img-fluid"/>
            </a></Link>
            <button className="navbar-toggler" id="nav-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" onClick={()=>{isOpen ? setIsOpen(false):setIsOpen(true)}} aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="fa fa-bars"style={{color:'white',fontSize:25}} > </span> */}
            <div style={{position:'relative'}}>
                <div className={"hamburger-top "+(isOpen?"active":"")}></div>
                <div className={"hamburger-center "+(isOpen?"active":"")}></div>
                <div className={"hamburger-bottom "+(isOpen?"active":"")}></div>
            </div>
            </button>


            <div className={"collapse navbar-collapse h-auto show-none "+(isOpen?"show":"")}id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto menu ">
                <Link to="/"> <li><a href="javascript:void(0)" className="dropdown-toggle">Services</a> 
                        <ul className="sub-menu">
                       <Link className="pb-0"> <li><a href="javascript:void(0)"className="dropdown-toggle " style={{margin: '-15px 0 0 -12px',padding: '14px 29px 14px 29px',}}>Assigment Section 1</a>
                            <ul className="sub-menu" 
                            onClick={()=>{isOpen ? setIsOpen(false):setIsOpen(true)}}>

                            <Link className="pl-4 pr-4" to='/PhilosophyComp'><li style={{paddingTop:-30}}><a className="pr-0 pl-0" href="/PhilosophyComp">Philosophy Assignment</a></li></Link>
                            <Link className="pl-4 pr-4" to='/NursingComp'> <li style={{paddingRight:20}}><a className="pr-0 pl-0" href="/NursingComp">Nursing Assignment</a></li></Link>
                            <Link className="pl-4 pr-4" to='/FinanceComp'> <li style={{paddingRight:20}}><a className="pr-0 pl-0" href="/FinanceComp">Finance Assignment</a></li></Link>
                            <Link className="pl-4 pr-4" to='/MathComp'> <li style={{paddingRight:32}}><a className="pr-0 pl-0" href="/MathComp">Maths Assignment</a></li></Link>
                            <Link className="pl-4 pr-4" to='/PhysicsComp'> <li style={{paddingRight:24}}><a className="pr-0 pl-0" href="/PhysicsComp">Physics Assignment</a></li></Link>
                            <Link className="pl-4 pr-1" to='/ManagementComp'> <li style={{paddingRight:2}}><a className="pr-0 pl-0" href="/ManagementComp">Management Assignment</a></li></Link>
                            </ul>
                        </li></Link>
                        
                        <Link className="pb-0"><li ><a href="" className="dropdown-toggle " style={{margin: '-20px 0 0 -12px',padding:'14px 26px 14px 29px'}}>Assigment Section 2</a>
                         <ul className="sub-menu"onClick={()=>{isOpen ? setIsOpen(false):setIsOpen(true)}} >

                           <Link className="pl-3 pr-2" to='/ProgrammingComp'> <li style={{paddingRight:2}}><a className="pr-0 pl-0" href="/ProgrammingComp">Programming Assignment</a></li> </Link>
                           <Link className="pl-3 pr-4" to='/psychology'> <li style={{paddingRight:5}}><a className="pr-0 pl-0" href="psychology">Psychology Assignment</a></li> </Link> 
                           <Link className="pl-3 pr-4" to='/sociology'> <li style={{paddingRight:17}}><a className="pr-0 pl-0" href="/sociology">Sociology Assignment</a></li>   </Link>             
                           <Link className="pl-3 pr-4" to='/LinguisticComp'> <li style={{paddingRight:16}}><a className="pr-0 pl-0" href="/LinguisticComp">Linguistic Assignment</a></li> </Link> 
                           <Link className="pl-3 pr-2" to="/ComputerComp"> <li><a className="pr-0 pl-0" href="/ComputerComp">Comp Science Assignment</a></li> </Link> 
                           <Link className="pl-3 pr-4" to='/BusinessComp'> <li style={{paddingRight:22}}><a className="pr-0 pl-0" href="/BusinessComp">Business Assignment</a></li> </Link> 
                            </ul>
                          </li>  </Link>

                         <Link className="pb-0"> <li ><a href="" className="dropdown-toggle" style={{margin: '-20px 0 0 -12px',padding:'14px 27px 14px 29px'}} >Assigment Section 3</a>
                         <ul className="sub-menu" onClick={()=>{isOpen ? setIsOpen(false):setIsOpen(true)}} >

                              <Link className="pl-3 pr-4" to='/AccountingComp'> <li style={{paddingRight:4}}><a className="pr-0 pl-0" href="/AccountingComp">Accounting Assignment</a></li></Link> 
                              <Link className="pl-3 pr-4" to='/EconomicComp'> <li style={{paddingRight:14}}><a className="pr-0 pl-0" href="/EconomicComp">Economic Assignment</a></li></Link> 
                              <Link className="pl-3 pr-4" to='/HistoryComp'> <li style={{paddingRight:34}}><a className="pr-0 pl-0" href="/HistoryComp">History Assignment</a></li></Link> 
                              <Link className="pl-3 pr-4" to='/GeographyComp'> <li style={{paddingRight:7}}><a className="pr-0 pl-0" href="/GeographyComp">Geography Assignment</a></li></Link> 
                              <Link className="pl-3 pr-4" to='/LawComp'> <li style={{paddingRight:53}}><a className="pr-0 pl-0" href="/LawComp">Law Assignment</a></li></Link> 
                              <Link className="pl-3 pr-4" to='/ChemistryComp'> <li style={{paddingRight:12}}><a className="pr-0 pl-0" href="/ChemistryComp">Chemistry Assignment</a></li></Link> 
                              </ul>
                          </li></Link>

                        <Link className="pb-3"><li ><a href="" className="dropdown-toggle"style={{margin: '-20px 0 -20px -12px',padding:'14px 25px 14px 29px'}}>Assigment Section 4</a>
                           <ul className="sub-menu" onClick={()=>{isOpen ? setIsOpen(false):setIsOpen(true)}}>

                           <Link className="pl-3 pr-4" to='/ITComp'> <li style={{paddingRight:68}}><a className="pr-0 pl-0" href="/ITComp">IT Assignment</a></li> </Link>
                           <Link className="pl-3 pr-3" to='/EngineeringComp'> <li style={{paddingRight:6}}><a className="pr-0 pl-0" href="/EngineeringComp">Engineering Assignment</a></li></Link>
                           <Link className="pl-3 pr-4" to='/EnglishComp'> <li style={{paddingRight:31}}><a className="pr-0 pl-0"  href="/EnglishComp">English Assignment</a></li></Link>
                           <Link className="pl-3 pr-4" to='/BiologyComp'> <li style={{paddingRight:31}}><a className="pr-0 pl-0" href="/BiologyComp">Biology Assignment</a></li></Link>
                           <Link className="pl-3 pr-4" to='/MarketingComp'> <li style={{paddingRight:13}}><a className="pr-0 pl-0" href="/MarketingComp">Marketing Assignment</a></li></Link>
                           <Link className="pl-3 pr-4" to='/statistics'> <li style={{paddingRight:21}}><a className="pr-0 pl-0" href="/statistics">Statistics Assignment</a></li></Link>
                              </ul>
                         </li></Link>
                           
                        </ul>
                    </li> </Link>
                    <Link to="/samples"> <li onClick={()=>{isOpen ? setIsOpen(false):setIsOpen(true)}}><a href="/samples"> Samples</a> </li> </Link>

                    <Link onClick={()=>{isOpen ? setIsOpen(false):setIsOpen(true)}}  to="/about"> <li> <a href="/about"> About Us</a></li> </Link>

                    <Link onClick={()=>{isOpen ? setIsOpen(false):setIsOpen(true)}}  to="/ourexpert"> <li><a href="/ourexpert">Expert</a></li>  </Link>

                    <Link onClick={()=>{isOpen ? setIsOpen(false):setIsOpen(true)}}  to="/ReviewComp"><li><a href="/ReviewComp">Reviews</a></li></Link>

                    <Link onClick={()=>{isOpen ? setIsOpen(false):setIsOpen(true)}}  to="/FAQComp"><li><a href="/FAQComp"> FAQs</a></li></Link>
                  
                    <Link onClick={()=>{isOpen ? setIsOpen(false):setIsOpen(true)}}  to="/PortfolioComp"><li><a href="/PortfolioComp"> Porfolio</a>  </li></Link>

                    <Link to=""><li><a href="" className="secondary-solid-btn check-btn">Call Back</a></li></Link>
                </ul>
            </div>
        </div>
        </nav>
    </div>
    </section>
  
    </>
  );
}

