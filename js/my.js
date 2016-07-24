
/**
 * Created by Caicai on 2016/5/20.
 */
$(function(){
    fn("#y_nav1");
    fn("#y_nav2")
    fn("#y_nav3")
    fn("#y_nav4")


})
function fn (id){
    $(id). find(".y_nav_hd_li").mouseenter(function(){
        //给当前的添加样式，其余兄弟删除
        $(this).addClass("current").siblings().removeClass("current");
        var index = $(this).index();
        //当前的ul显示，其余的所有兄弟隐藏
        $(id).find(".main").eq(index).show().siblings().hide();
    })
    $(id).find(".y_nav_con_right_li").mouseenter(function(){
        $(this).find(".caption").animate({
            height:80
        })
    })
    $(id).find(".y_nav_con_right_li").mouseleave(function(){
      $(this).find(".caption").animate({
            height:40
        })
    })
}