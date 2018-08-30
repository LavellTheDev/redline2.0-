//Project Name:
//Client Name:
//Author:
//Dev @ RC in Boston

///-----------------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///---------------------------------------------------------///
//
//
//
//
//
//
//
//
//
//
///--------------------------------------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///-------------------------------------------------------------------------------///
const nav = document.querySelector('#mainNav');
const topOfNav = nav.offsetTop;

function fixNav(){
  if (window.scrollY >= topOfNav){
    document.body.classList.add('fixed-nav');
  }else{
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll',fixNav);
