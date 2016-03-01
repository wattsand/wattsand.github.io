// refresh
$(window).on('beforeunload', function() {
   $(window).scrollTop(0);
});

// scroll button
var amountScrolled = 300;

$(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
      
        $('a.back-to-top').fadeIn('slow');
        
    } else {
        $('a.back-to-top').fadeOut('slow');
        
    }
});

$('a.back-to-top').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 700); // speed of transition //
    return false;
});

//scroll nav-bar
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.nav ul').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
var st = $(this).scrollTop();
    
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.nav ul').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
    if(st + $(window).height() < $(document).height()) {
            $('.nav ul').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}


//tumblr captions
// $('li.tumblr_post.tumblr_photo_post').on('click', function(){
//  $('.tumblr_caption p').show("slide",  { direction: "left" }, 1000);
// });

$('li.tumblr_post.tumblr_photo_post img').click(function() {
  var thisUrl = $(this).next('.tumblr_caption').find('a:first').attr('href');
    window.location.href = thisUrl;
});

//contact info
$(document).ready(function(){
  $('.contact li').hide();
});

$('.contact h3').on('click', function(){
  $('.contact li').slideToggle({ direction: "left" }, 1000);
});

//hamburger
$('.hamburger').on('click', function (){
   // $('.nav ul').toggleClass('active');
   $('.nav ul').slideToggle('expand');
   
});



//possible side nav
// $(document).ready(function(){
//  $('.side-nav li').hide();
// });

// $('.side-nav p').on('click', function(){
//  $('.side-nav li').show("slide", { direction: "left" }, 1000);
// });

// after::'.side-nav'{
//  content:'.background-image';
// }