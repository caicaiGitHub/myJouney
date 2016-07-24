//滑动模块
var papp = {}

//音乐模块
papp.audio = function(para){
	var _audio = new Audio();
	var target = $(para.target);
	mergeKey(_audio, para, false);

	papp.audio = _audio;
	//
	
	$(document).one("touchstart", function(e){
		if(e.target==document.getElementById(para.target)){
			target.removeClass("on");
			musicflag=false;
		}else{
			musicflag=true;
			papp.audio.play();
		}
		event.preventDefault();
		console.log("musicflag",musicflag);
	});
	target.addClass("on").on("click",function(){
		if(target.hasClass("on")){
			papp.audio.pause();
			musicflag=false;
			target.removeClass("on");
		}else{
			papp.audio.play();
			musicflag=true;
			target.addClass("on");
		}
		console.log("musicflag1",musicflag);
	});
};


//分享模块
papp.share = function(para){
	//初始化参数
	para = mergeKey({
		   title : document.title,
		    desc : document.title,
		     url : document.location.href,
		     img : "images/share.jpg",
		   width : 100,
		  height : 100,
		   appid : "",
		callback : null
	},para);
	//
	//微信
	var weixin = {
		     appid : para.appid,
		   img_url : para.img,
		 img_width : para.width,
		img_height : para.height,
		      link : para.url,
		      desc : para.desc,
		     title : para.title
	}
	//微博
	var weibo = {
		content : para.desc,
		    url : para.url
	}
	//微信内置方法
	document.addEventListener("WeixinJSBridgeReady", function() {
		WeixinJSBridge.call('showToolbar');//隐藏底部工具栏
		//
		WeixinJSBridge.on("menu:share:appmessage", function(argv){
			WeixinJSBridge.invoke("sendAppMessage", weixin, para.callback);
		});
		// 分享到朋友圈
		WeixinJSBridge.on("menu:share:timeline", function(argv){
			WeixinJSBridge.invoke("shareTimeline", weixin, para.callback);
		});
		// 分享到微博
		WeixinJSBridge.on("menu:share:weibo", function(argv){
			WeixinJSBridge.invoke("shareWeibo", weibo, para.callback);
		});
	}, false);
	//
}


// papp.fill = function(para){
// 	var MODE = {
// 		  "width" : "100% 0%",
// 		 "height" : "0% 100%",
// 		  "cover" : "0% 0%",
// 		"contain" : "100% 100%"
// 	}

// 	para = mergeKey({
// 		 width : 640,
// 		height : 960,
// 		  mode : "100% 100%",
// 	},para);

// 	var tar = $(para.target),
// 		con = tar.parent();

// 	para.mode = (MODE[para.mode] || para.mode).split(" ");
	
// 	$(window).resize(function(){
// 		var ratioW = con.width()/para.width,
// 			ratioH = con.height()/para.height,
// 			ratioMax = Math.max(ratioW,ratioH),
// 			ratioMin = Math.min(ratioW,ratioH),
// 			ratioMainW = ratioW/parseInt(para.mode[0])*100,
// 			ratioMainH = ratioH/parseInt(para.mode[1] || para.mode[0])*100,
// 			ratio = Math.min(ratioMainW, ratioMainH, ratioMax);

// 		tar.css({width:parseInt(ratio*para.width), height:parseInt(ratio*para.height)});
// 	}).resize();
// }


function mergeKey(obj1, obj2, union){
	union = typeof(union)=="undefined" ? true : union;
	for(var key in obj2){
		if(obj2.hasOwnProperty(key) && (union || (key in obj1))){
			obj1[key] = obj2[key];
		}
	}
	return obj1;
}