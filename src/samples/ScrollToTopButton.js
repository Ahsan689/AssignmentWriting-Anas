import React from 'react'
import $ from 'jquery'


export default function ScrollToTopButton(){
     // The back-to-top button is hidden at the beginning
 

   // 2. fixed navbar
   $(window).on('scroll', function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 0) {
      $('.navbar').addClass('affix');
      $('.scroll-to-target').addClass('open');
    } else {
      $('.navbar').removeClass('affix');
      $('.scroll-to-target').removeClass('open');
    }
    // checks if window is scrolled more than 500px, adds/removes top to target class
    if ($(this).scrollTop() > 500) {
      $('.scroll-to-target').addClass('open');
    } else {
      $('.scroll-to-target').removeClass('open');
    }
  });


  if ($('.scroll-to-target').length) {
    $(".scroll-to-target").on('click', function () {
      var target = $(this).attr('data-target');
      // animate
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 500);

    });
  }
  const ScrollToTop = () =>{
    window.scrollTo(0, 0);
  }
  

    return(
        <>
        <div className="container" >
        
       <i className="fa fa-arrow-up scroll-to-target scroll-top"  style={{color:'black',fontSize:20,marginLeft: 1100,marginTop:-40,marginBottom:12,cursor:'pointer'}} aria-hidden="true" onClick={ScrollToTop}>
       </i>
      
        </div>
        </>
    )
}