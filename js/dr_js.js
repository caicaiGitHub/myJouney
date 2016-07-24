/**
 * Created by Caicai on 2016/5/20.
 */
function dr_ban(dr_banshijian,jiangeshijian) {
    var nowimg = 0;

    //============��ʱ��һ��=================
    var timer = setInterval(youanniuyewu,jiangeshijian);

    $("#dr_ban").mouseenter(
        function() {
            clearInterval(timer);	//ֹͣ��ʱ��
        }
    );

    $("#dr_ban").mouseleave(
        function() {
            clearInterval(timer);	//����ȹ�
            timer = setInterval(youanniuyewu,jiangeshijian);
        }
    );
    //============��ʱ��һ��=================

    $("#dr_ban .anniu .rightbut").click(youanniuyewu);

    //�������Ұ�ť��ҵ������������ԭ�򣬾��Ƕ�ʱ������
    function youanniuyewu(){
        if(!$("#dr_ban .tuul li").is(":animated")){
            //���ϵ��ź�����Ԫ�ص���
            $("#dr_ban .tuul li").eq(nowimg).fadeOut(dr_banshijian);

            //�ı��ź���
            if(nowimg < $("#dr_ban .tuul li").length - 1){
                nowimg = nowimg + 1;
            }else{
                nowimg = 0;
            }

            //���µ��ź�����Ԫ�ص���
            $("#dr_ban .tuul li").eq(nowimg).fadeIn(dr_banshijian);

            //СԲ����ű䣺
            $("#dr_ban .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
        }
    }

    $("#dr_ban .anniu .leftbut").click(
        function(){
            if(!$("#dr_ban .tuul li").is(":animated")){
                //���ϵ��ź�����Ԫ�ص���
                $("#dr_ban .tuul li").eq(nowimg).fadeOut(dr_banshijian);

                //�ı��ź���
                if(nowimg > 0){
                    nowimg = nowimg - 1;
                }else{
                    nowimg = $("#dr_ban .tuul li").length - 1;
                }

                //���µ��ź�����Ԫ�ص���
                $("#dr_ban .tuul li").eq(nowimg).fadeIn(dr_banshijian);

                //СԲ����ű䣺
                $("#dr_ban .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
            }
        }
    );

    $("#dr_ban .dianul li").click(
        function(){
            //���ϵĵ���
            $("#dr_ban .tuul li").eq(nowimg).fadeOut(dr_banshijian);
            nowimg = $(this).index();	//���ź����ı�Ϊ�û�������Ǹ����
            //���µĵ���
            $("#dr_ban .tuul li").eq(nowimg).fadeIn(dr_banshijian);
            //СԲ����ű䣺
            $("#dr_ban .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
        }
    );
}

/*nav����*/
$(function(){
    $(".xia_ico").hover(function(){
        $(this).children(".dr_slide").stop().slideToggle(300);
    })
})


/*search-ѡ������*/
$(function(){
    $(".xuanzhe li").click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
    })
})
/*search-������*/




/*tab-left*/
$(function(){
    $("#tab-zs span").click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        var index = $(this).index();
        $("#tab-zs .tab-bottom .tab-b01").eq(index).show().siblings().hide();
    })
})


/*��ת*/
$(function(){
    var fzTimer = null;
    var fz = 0;
    fzTimer = setInterval(fzfun,4000);
    function fzfun(){
        fz++;
        if(fz%3 == 0){
            $(".fz_list1 .yellow_box").slideUp(500);
            $(".fz_list2 .yellow_box").slideDown(500);
        }else{
            $(".fz_list1 .yellow_box").slideDown(500);
            $(".fz_list2 .yellow_box").slideUp(500);
        }
    }


})

//��������
$(function(){
    $("#three-l span").click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        var index = $(this).index();
        $("#three-l .tab-b01").eq(index).show().siblings().hide();
    })
})

