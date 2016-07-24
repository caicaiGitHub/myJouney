/**
 * Created by Administrator on 2015/12/20.
 */
$(function () {
    // 城市列表
    $(".zylleft li").hover(function () {
            var index = $(this).index();
            $(this).children(".zylbig").show().css({"top":-index*60,"z-index":"999"});
    }
        , function () {
            $(this).children(".zylbig").hide();
        })

    //  轮播图左右键
    $(".zylright_top").hover(function () {
        $(".zylright_top div").show();
    }, function () {
        $(".zylright_top div").hide();
    })
    var num = 0;
    $(".zylright_top_right").on("click", function () {
        num++;
        num>4?num = 0: num;
        $(".zylright_top ol li").eq(num).addClass("zylbgcolor").siblings().removeClass();
        $(".zylright_top ul").stop().animate({left:num*-730},500);
    })
    $(".zylright_top_left").on("click", function () {
        num--;
        num<0?num = 4: num;
        $(".zylright_top ol li").eq(num).addClass("zylbgcolor").siblings().removeClass();
        $(".zylright_top ul").stop().animate({left:num*-730},500);
    })

    $(".zylright_top ol li").click(function () {
        var index = $(this).index();
        $(this).addClass("zylbgcolor").siblings().removeClass();
        $(".zylright_top ul").stop().animate({left:-730*index},500);
    })

    timer = setInterval(fun,2000);
    function fun(){
        num++;
        num>4?num = 0: num;
        $(".zylright_top ul").stop().animate({left:num*-730},500);
    }

    $(".zylright").mouseenter(function () {
        clearInterval(timer);
    })
    $(".zylright").mouseleave(function () {
        timer = setInterval(fun,2000);
    })

    // zylshop
    $(".zylshop_bottom_left").hover(function () {
        $(".zylbtom").show();
    }
        , function () {
        $(".zylbtom").hide();
    })



        $(".zy_nav_hd_li").mouseenter(function(){
            //给当前的添加样式，其余兄弟删除
            $(this).addClass("current").siblings().removeClass("current");
            var index = $(this).index();
            //当前的ul显示，其余的所有兄弟隐藏
            $(".main").eq(index).show().siblings().hide();
        })
        $(".zy_nav_con_right_li").mouseenter(function(){
            var index = $(this).index();
            //$(".caption").eq(index).height(80)
            $(".caption").eq(index).animate({
                height:80
            })
        })
        $(".zy_nav_con_right_li").mouseleave(function(){
            var index = $(this).index();
            $(".caption").eq(index).animate({
                height:40
            })
        })
})


