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
// const nav = document.querySelector('#mainNav');
// const topOfNav = nav.offsetTop;
//
// function fixNav(){
//   if (window.scrollY >= topOfNav){
//     document.body.classList.add('fixed-nav');
//   }else{
//     document.body.classList.remove('fixed-nav');
//   }
// }
//
// window.addEventListener('scroll',fixNav);

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//Start of FAQ CODE()
// function faqControl(){
//   $('.a').hide();
//   $('.q').on("click", function(){
//     var answerLi = $(this).next();
//     if($(this).attr("data-icon") === "+"){
//       $(this).attr("data-icon", "-");
//       answerLi.slideDown();
//     }else{
//       $(this).attr("data-icon", "+")
//       answerLi.slideUp();
//     };
//   });
// }
//
// $(document).ready(function(){
//   faqControl();
// });
//--------------------------------------------------------------
function faqControl(){
$('.a').hide();
$('.q').on("click", function(){
	var answerLi = $(this).next();
  if($(this).attr("data-icon") === "+"){
  	$(this).attr("data-icon", "-");
    answerLi.slideDown();
  }else{
	$(this).attr("data-icon", "+");
  	answerLi.slideUp();
  }
});
}

$(document).ready(function() {
	faqControl();
});

//End of FAQ CODE

//Start of MAP
// function toggleMap(){
// $('.backbay-toggle').click(function(){
 //     $('.backbayCard').on("click", function(){})
// });
// }

// $(document).ready(function(){
//   toggleMap();
// });

$(document).ready(function(){

  $('.backbay-toggle').on('click', function(){
      $('.backbayCard').fadeToggle(1000);
  })


  $('.beaconhill-toggle').on('click', function(){
      $('.beaconhillCard').toggle(1000);
  })

  $('.cambridge-toggle').on('click', function(){
      $('.cambridgeCard').fadeToggle(1000);
  })

  $('.charlestown-toggle').on('click', function(){
      $('.charlestownCard').fadeToggle(1000);
  })

  $('.dorchester-toggle').on('click', function(){
      $('.dorchesterCard').fadeToggle(1000);
  })

  $('.downtown-toggle').on('click', function(){
      $('.downtownCard').fadeToggle(1000);
  })

  $('.eastboston-toggle').on('click', function(){
      $('.eastbostonCard').fadeToggle(1000);
  })

  $('.fenway-toggle').on('click', function(){
      $('.fenwayCard').fadeToggle(1000);
  })

  $('.jamaicaplain-toggle').on('click', function(){
      $('.jamaicaplainCard').fadeToggle(1000);
  })

  $('.leatherdistrict-toggle').on('click', function(){
      $('.leatherdistrictCard').fadeToggle(1000);
  })

  $('.northend-toggle').on('click', function(){
      $('.northendCard').fadeToggle(1000);
  })

  $('.roxbury-toggle').on('click', function(){
      $('.roxburyCard').fadeToggle(1000);
  })

  $('.seaport-toggle').on('click', function(){
      $('.seaportCard').fadeToggle(1000);
  })

  $('.southend-toggle').on('click', function(){
      $('.southEndCard').fadeToggle(1000);
  })

  $('.westend-toggle').on('click', function(){
      $('.westEndCard').fadeToggle(1000);
  })
});
$(document).ready(function(){
  $('.mapX-toggle').on('click', function(){
      $('.hidden').hide();
  });
});
//End of map

////////////////start backtotop////////////////////

$(document).ready(function(){
      var btt = $('.backToTop');

      $(window).on('scroll', function(){
          var self = $(this),
              height = self.height(),
              top = self.scrollTop();
          if(top > height) {
            if(!btt.is(':visible')){
                btt.show()
            }
          }else{
            btt.hide();
          }
      });
});

///////////////end of backtotop///////////////////

////Start of Reveal Side Bar/////////////////////
  $(document).ready(function(){
      $('.toggleSide').on('click', function(){
        $('').toggle(1000); 
    });
  });
////////End of Reveal Side Bar//////////////////
