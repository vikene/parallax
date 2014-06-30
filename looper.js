  var init = function() {
      var carousel = document.getElementById('carousel'),
         
          panelCount = carousel.children.length,
          transformProp = Modernizr.prefixed('transform'),
          theta = 0,
          var increment = 0;
          setInterval(function(){
            
            theta += ( 360 / panelCount ) * increment * -1;
            carousel.style[ transformProp ] = 'translateZ( -288px ) rotateY(' + theta + 'deg)';
            increment += 1;
          },3000);
         

      

    };

    window.addEventListener( 'DOMContentLoaded', init, false);