$(document).ready(function(){
//   start main_header
    $(".mian_header").height($(window).height());
    $(".header_text h2").css({
        fontSize:$(this).width() / 12
    })
// end main_header
    $(".sub_menue .main_links li").mouseover(function(){
        $("." + $(this).data("open")).mouseover()
    })
    $(".sub_menue .main_links li").mouseout(function(){
        $("." + $(this).data("open")).mouseout()
    })
    $("#open_sup").on("click",function(){
        $(".sub_menue").fadeIn().css({display:"flex"})
        $(".part_section").css({
            transform: "scaleX(1)"
        })        
    })
    $(".close_menue").on("click",function(){
        $(this).parent(".sub_menue").fadeOut();
        $(".part_section").css({
            transform: "scaleX(0)"
        })
    })
    $(".Solutions .bg:first-of-type").height($(".Solutions .container").height());
    $(".left_border_bg").width((($(".left_menue").width()) - ($(".logo_transparent").width())) / 2)
    new WOW().init();
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // defaul
        offset:       0,          // default
        mobile:       false,   
        live:         true        // default
      }
      )
      wow.init();
    //   start sub meneu
    // $(".solutions .sub_links > li").on("click", function(){
    //     $(".minsub_links").not($(this).find(".minsub_links")).slideUp();
    //     $(this).find(".minsub_links").slideToggle(500);
    //     $(".solutions .sub_links > li").css("padding", "2% 0");
    //     $(this).siblings("li").css("padding", "2% 0")
    //     $(this).css("padding-bottom", "0px").next("li").css("padding-top", "0px");
    // })
    // start fit text
    $(".sub_menue .sections_container .part_section span:first-of-type").css({
        fontSize:$(window).height() / 10,
    })
    $(".sub_menue .sections_container .part_section .sub_links").css({
        fontSize: $(this).width() / 60
    })
    $(".main_links li").css({
        fontSize: $(this).width() / 40
    })
    $(".sub_menue .right_cont div a").css({
        fontSize: $(this).width() / 35
    })
    $(window).resize(function(){
        $(".sub_menue .sections_container .part_section span:first-of-type").css({
            fontSize:$(window).height() / 10,
        })
        $(".sub_menue .sections_container .part_section .sub_links").css({
            fontSize: $(this).width() / 60
        })
        $(".main_links li").css({
            fontSize: $(this).width() / 40
        })
        $(".sub_menue .right_cont div a").css({
            fontSize: $(this).width() / 35
        })
        $(".header_text h2").css({
            fontSize:$(this).width() / 12
        })
    })
    // start media 
    if($("body").width() < 1200){
        $("img[src = 'images/menu.png']").attr("src", "images/menu2.png");
        $("img[src = 'images/menu2.png']").width(51);        
        $(".sub_menue .sections_container .part_section span:first-of-type").css({
            fontSize:$(window).width() / 12,
        })
        $(".sub_menue .right_cont div a").css({
            fontSize: $(this).width() / 15
        })
        $(".sub_menue .sections_container .part_section .sub_links").css({
            fontSize: $(this).width() / 30
        })
        $(window).resize(function(){
            $(".sub_menue .sections_container .part_section span:first-of-type").css({
                fontSize:$(window).width() / 10,
            })
            $(".sub_menue .right_cont div a").css({
                fontSize: $(this).width() / 20
            })
            $(".sub_menue .sections_container .part_section .sub_links").css({
                fontSize: $(this).width() / 30
            })
        })
        $(".sections_container .services").on("mouseover", function(){
            $(this).addClass("open_background").height("1000px").siblings(".part_section").height(0);
            $(this).find(".sub_links").removeClass("openSpan");
            $(this).find("span:first-of-type").addClass("openSpan");
            $(".sub_links li").css({
                left:"0",
                opacity:"1"
            })
        })
        $(".sections_container .services").on("mouseout", function(){
            $(this).removeClass("open_background").height("50%").siblings(".part_section").height("50%");
            $(this).find("span:first-of-type").removeClass("openSpan");
            $(this).find(".sub_links").addClass("openSpan");
            $(".sub_links li").css({
                left:"0",
                opacity:"0"
            })
        })


        $(".sections_container .solutions").on("mouseover", function(){
            $(this).addClass("open_background").height("1500px").siblings(".part_section").height(0);
            $(this).find(".sub_links").removeClass("openSpan");
            $(this).find("span:first-of-type").addClass("openSpan");
            $(".sub_links li").css({
                left:"0",
                opacity:"1"
            })
        })
        $(".sections_container .solutions").on("mouseout", function(){
            $(this).removeClass("open_background").height("50%").siblings(".part_section").height("50%");
            $(this).find("span:first-of-type").removeClass("openSpan");
            $(this).find(".sub_links").addClass("openSpan");
            $(".sub_links li").css({
                left:"0",
                opacity:"0"
            })
        })
    }
    
    
    else{
        $("img[src = 'images/menu.png']").attr("src", "images/menu.png");

        $(".sections_container .part_section").mouseover(function(){
            $(this).addClass("expand").find("span:first-of-type").addClass("openSpan");
           $(this).find(".sub_links").removeClass("openSpan");
           $(".sub_links li").css({
               left:"0",
               opacity:"1"
           })
        })    
    
        $(".sections_container .part_section").mouseout(function(){
            $(this).removeClass("expand").find("span:first-of-type").removeClass("openSpan");
           $(this).find(".sub_links").addClass("openSpan");
           $(".sub_links li").css({
            left:"-10%",
            opacity:"0"
        })
        })
    }
    // start fit_header_text
    $(".fit_header_text").css({
        fontSize : $(this).width() / 13
    })
    $(window).resize(function(){
        $(".fit_header_text").css({
            fontSize : $(this).width() / 13
        })
    })
})
