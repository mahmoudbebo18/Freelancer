$(document).ready(function(){

    $('.designers').click(function(){

        $('.designer_menu').slideToggle();
        $('.women_menu').fadeOut();
    })

    $('.women').click(function(){
        $('.women_menu').slideToggle();
        $('.designer_menu').fadeOut();
        
    })

})