$(document).ready(function(){

    
    $(window).on('scroll load',function(){
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
    });

    // menu button
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

// theme toggler
    $('#theme-toggler').click(function(){
        $(this).toggleClass('fas fa-moon');
        $('body').toggleClass('light-theme');
    });    

// typing text

// var typed = new typed(".text", {
//   Strings: ["Student" , "Programmer", "Web Developer", "Frontend Developer"],
//   typeSpeed: 100,
//   backSpeed: 100,
//   backDelay: 1000,
//   loop: true
// })
//  portfolio filter

    $('.portfolio .button-container .btn').click(function(){
        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.portfolio .image-container .box').show('400');
        }
        else{
            $('.portfolio .image-container .box').not('.'+filter).hide('200');
            $('.portfolio .image-container .box').filter('.'+filter).show('400');
        }
    });

    // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },500,'linear' );

  });

});