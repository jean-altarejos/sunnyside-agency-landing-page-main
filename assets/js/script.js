//hamburger nav menu

$('.hamburger').on("click", function(e){
    $('.hamburger').toggleClass("active");
    $('.navmenu').toggleClass("active");
});


//graphic design and photography font colors
$(document).ready(function(){
    $('#1').children('h2').addClass('blue');
    $('#1').children('p').addClass('blue');
    $('#2').children('h2').addClass('green');
    $('#2').children('p').addClass('green');
    console.log("End of function");
})

