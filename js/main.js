$(document).ready(function(){
  $('.slick-slider').slick({
    infinite: true,
  	slidesToShow: 2,
  	slidesToScroll: 1,
  	dots:true,
  	autoplay:true,
  	autoplaySpeed:3000,
  	responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    pauseOnHover:true
    }
    },
  	]
  });
});
$(document).ready(function() {
	$(window).scroll(function () {
  	if ($(window).scrollTop() > 90) {
      $('.navbar').css({"background-color":"white"});
      	$('.navbar').addClass('fixed-top');		
    }
    if ($(window).scrollTop() < 90) {
    		$('.navbar-default').removeClass('fixed-top');
    }
  });
});
function openSlideMenu(){
	document.getElementById('side-menu').style.width = '250px';
  document.getElementById('main').style.marginRight = '250px';
}
function closeSlideMenu(){
	document.getElementById('side-menu').style.width = '0';
	document.getElementById('main').style.marginLeft = '0';
}

// Start of Animations
$(document).ready(function(){
  var yo = $('.yo');
  var first = $('.firstPage');
  var one = $('.one');
  var two = $('.two');
  tl = new TimelineLite();
  dot = $('.dot'),
  loader = $('#loader'),
  tlLoader = new TimelineMax({repeat:1, onComplete: loadContent}); 

  tl
    .set(yo,{autoAlpha:1, ease:SlowMo.ease}, '+=5');
  //Loader Timeline
  tlLoader
    .staggerFromTo(dot,1,
    {y:0,autoAlpha:0},
    {y:20,autoAlpha:1,ease:Back.easeInOut},
    0.05
    )
    .fromTo(loader,0.5,
      {autoAlpha:1,scale:1.5},
      {autoAlpha:0,scale:1,ease:Power0.easeNone},
      0.9
    );

  function loadContent(){
    var tlLoaderOut = new TimelineLite({onComplete: contentIn});
    tlLoaderOut
    .set(dot, {backgroundColor: '#2b4d66'})
    .to(loader,0.3,{autoAlpha:1,scale:1.5,ease:Power0.easeNone})
    .staggerFromTo(dot,1,
      {y:0,autoAlpha:0},
      {y:20,autoAlpha:1,ease:Back.easeInOut},
      0.05, 0
    )
    .to(loader,0.3,{y:-150,autoAlpha:0,ease:Back.easeIn}, '+=0.4')
    ;
  }

  function contentIn(){
    tl.play();
  }
});   
// End of Animations

