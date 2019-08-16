'use-strict'

function handleResposnsiveNav(){
    $('.js-hamburger').on('click', toggleResponsiveNav);
}
    
function toggleResponsiveNav(){
      $('nav').toggleClass('responsive');
      $('a.js-topNavLink').on('click', function(){
           $('nav').removeClass('responsive');
           });
}
     
function handleActiveNavLink(){
        $('a.js-topNavLink').on('click', function(){
          $('a.js-topNavLink').removeClass('active');
            $(this).addClass('active');
            });
}
    
function toggleDropDown(){
        $('.js-dropdownToggle').on('click', function(){
            $('.js-dropdownMenu').slideToggle();
            });
}
       

   $(function handlePage(){ 
    handleResposnsiveNav();
    handleActiveNavLink();
    toggleDropDown();
   });