/**
 * Created by Caicai on 2016/5/20.
 */
$(function() {
    var pageTop = 0 ;
    var $j_nav_ul = $("#j_nav_list");
    $j_nav_ul.children("li").click(function() {
        $(this).addClass("current").siblings().removeClass("current");
    })
    $("#j_nav_liset_icon").mouseenter(function() {
        $(this).children("div").show();
        $(this).find("span").last().css("border-bottom","none")
    }).mouseleave(function() {
        $(this).children("div").hide();
    });
    $("#j_ggBig").children("span:eq(0)").click(function() {
        $("#j_ggBig").animate({
            "left": "-1500px"
        },800, function () {
            $("#j_ggBig").prev("div").animate({
                "left": 0
            },500)
        })
    });
    $("#j_ggBig").prev("div").click(function() {
        $(this).animate({
            "left": "-50px"
        },500, function () {
            $("#j_ggBig").animate({
                "left": 0
            },800)
        })
    });
    $("#j_ggBig").children("span:eq(1)").mouseenter(function() {
        $(this).css({
            "background-position": "0 -50px"
        }).mouseleave(function() {
            $(this).css({
                "background-position": "0 0"
            })
        });
    });
    $("#j_returnTop").mouseenter(function() {
        $(this).css({
            "background-position": "-72px 0"
        })
    }).mouseleave(function() {
        $(this).css({
            "background-position": "0 0"
        })
    }).click(function() {
        $("html,body").animate({
            "scrollTop": 0
        },800, function () {
            $("#j_returnTop").stop().animate({
                bottom: "-40px"
            },200);
        })
    })
    $(window).scroll(function() {
        if($(window).scrollTop() < pageTop ) {
            $("#j_returnTop").stop().animate({
                bottom: 0
            },200);
        }
        else {
            $("#j_returnTop").stop().animate({
                bottom: "-40px"
            },200);
        }
        pageTop = $(window).scrollTop();

    });
});