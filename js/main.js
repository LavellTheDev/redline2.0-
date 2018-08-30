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
const topofNav = nav.offsetTop;
function fixNav(){
  console.log(topofNav, window.scrollY);
}

window.addEventListener('scroll',fixNav);
