import React from 'react';
import './herosection.css';
const herosection = () => {
return (
        <>
        <div className='section-1-header reveal1'>
                HELLO
                <div className='section-1-header-dot'>
                    .
                </div> 
            </div>

        <div className='social-media-container reveal2'>
            
            <div className='git'>
            <i class="fa fa-github"></i>
            </div>
            <br></br>
            <div className='linkedIn'>
            <i class="fa fa-linkedin"></i>
            </div> 
        
        </div>

        <div className='section-1-container'>
            <div className='section-1-box-1'>
                
            </div>
            <div className='section-1-box-2'>
                
            </div>
            
        </div>
        

        <div className='skills-section'>
            <div className='skills-header'>
                SKILLS
            </div>
            <div class="card reveal1">
                <img src="img_avatar.png" alt="Avatar" ></img>
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
        </div>
        
        </>
               
);
}; 
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    // reveal();
    var reveals = document.getElementsByClassName("section-1-header");
    for (var i = 0; i < reveals.length; i++) {
        reveals[i].classList.add("active");
    }
    var reveals = document.getElementsByClassName("social-media-container");
    for (var i = 0; i < reveals.length; i++) {
        reveals[i].classList.add("active");
    }
    var reveals = document.getElementsByClassName("section-1-box-1");
    for (var i = 0; i < reveals.length; i++) {
        reveals[i].classList.add("active");
    }
    var reveals = document.getElementsByClassName("section-1-box-2");
    for (var i = 0; i < reveals.length; i++) {
        reveals[i].classList.add("active");
    }
  });

function reveal() {
    // var reveals = document.getElementsByClassName("reveal1");
    // console.log(reveals);
    // for (var i = 0; i < reveals.length; i++) {
    //   var windowHeight = window.innerHeight;
    //   var elementTop = reveals[i].getBoundingClientRect().top;
    //   var elementVisible = 100;
  
    //   if (elementTop < windowHeight - elementVisible) {
    //     reveals[i].classList.add("active");
    //   } else {
    //     reveals[i].classList.remove("active");
    //   }
    // }

    var reveals = document.getElementsByClassName("card");
    console.log(reveals);
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
    console.log("active added")
  }
  
  window.addEventListener("scroll", reveal);
export default herosection;
