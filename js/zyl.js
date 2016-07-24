/**
 * Created by Caicai on 2016/5/20.
 */
//小图标
var zylicon = document.getElementById("zylmain").getElementsByTagName("i");
for(var i=0; i<zylicon.length; i++){
    zylicon[i].style.backgroundPosition = "0 "+ (-29*i)+"px";
}
// 输入框
var zylinp = document.getElementById("zylinp");
zylinp.onfocus = function () {
    if(zylinp.value == "产品名称/目的地/商铺"){
        zylinp.value = "";
        zylinp.style.color = "#333";
    }
}
zylinp.onblur = function () {
    if(zylinp.value == ""){
        zylinp.value = "产品名称/目的地/商铺";
        zylinp.style.color = "#ccc";
    }
}

// 轮播图下面小黑div
var arr = ["元旦出行买一送一","宝岛游低至2折","亲子活动1元抢码","邮轮之旅699元起","一月最佳旅行地"];
var zylright_top_wenzi = document.getElementById("zylright_top_wenzi");
var imgs = document.getElementById("zylright_top_imgs").children;
for(var i=0; i<imgs.length; i++){
    var newli = document.createElement("li");
    newli.innerHTML = arr[i];
    zylright_top_wenzi.appendChild(newli);
}
var ollis = document.getElementById("zylright_top_wenzi").children;
for(var i=0; i<ollis.length; i++){
    ollis[i].onclick = function () {
        for(var i=0; i<ollis.length; i++){
            ollis[i].className = "";
        }
        this.className = "zylbgcolor";
    }
}





