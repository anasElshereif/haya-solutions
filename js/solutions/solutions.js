$(document).ready(function(){
    // start header
    $(".main_header").height($(window).height());
    // end header
    $(".main_descriptions div img").on("click",function(){
        $(".popup").fadeIn().css("display", "flex");
        $(".popup").find("img").attr("src", $(this).attr("src"));
        console.log("kl;k;l");
        
    })
    // start popup
    $(".popup").on("click",function(){
        $(this).fadeOut()
    })
    $(".popup  img, .popup iframe").on("click", function(event){
        event.stopPropagation();
    })
    $(".scroll_to_bottom").on("click", function(){
        $("html, body").animate({
            scrollTop:$($(this).data("scroll")).offset().top
        },700)
    })
})