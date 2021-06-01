$(document).ready(function(){
     $('#slider').bxSlider({
            auto: true, 
            controls: false,
        });
        
        $("#but-menu").click(function(){
            $("#menu").slideToggle();
        });
 });