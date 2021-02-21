function openDiv(width,height,url,title){
	layer.open({
	      type: 2,
	      title: title,
	      skin:'layui-layer-molv',
	      /*shadeClose: true,*/  //点击空白处关闭页面 true：是；false否（此处是根据所提bug修改，如果有其他需要的地方请告知）
	      offset: 't',
	      maxmin: false, //开启最大化最小化按钮
	      area: [width, height],
	      content: url,
		  offset: 't',
	      success : function(layero, index){
	    	 //去除px 
	    	 height=height.replace('px','');
	    	 resizeLayer(index,height);
	    	 setTimeout(function(){
	    	    window.originalWindowHeight=window.innerHeight;
	    		window.originalPopHeight=$("[id^='layui-layer'].layui-layer-molv").height();
	    		//弹窗小屏幕自适应
	    		window.onresize=function(){
	    			var curJq=$("[id^='layui-layer'].layui-layer-molv");
	    			if(curJq.length==0){return;}
	    			var heightAfterResize=window.innerHeight;
	    			if(heightAfterResize>height){
	    				heightAfterResize=height;
	    			}
	    			curJq.height(heightAfterResize*originalPopHeight/originalWindowHeight);
	    			originalWindowHeight=heightAfterResize;
	    			originalPopHeight=$("[id^='layui-layer'].layui-layer-molv").height();
	    		};
	    	 },400);
		 }
	    });	
}
function openMaxDiv(width,height,url,title){
   var index= layer.open({
        type: 2,
        title: title,
        skin:'layui-layer-yyf',//全屏是后不相信上面标题的颜色
        shadeClose: true,
        offset: 't',
        shade: 0,
        maxmin: false, //开启最大化最小化按钮
        area: [width, height],
        content: url,
		success : function(layero, index){
			resizeLayer(index);
//			window.onresize=function(){
//				var cssText=$("[id^='layui-layer'].layui-layer-yyf").attr("style");
//				$("[id^='layui-layer'].layui-layer-yyf").css("cssText","left:0 !important;top:0 !important;width:100vw !important;height:100vh !important;"+cssText);
//    		};
		}
    })
    layui.layer.full(index);
}

function openParentDiv(width,height,url,title){
	   var index= parent.layer.open({
	        type: 2,
	        title: title,
	        skin:'layui-layer-yyf',//全屏是后不相信上面标题的颜色
	        shadeClose: true,
	        offset: 't',
	        shade: 0,
	        maxmin: false, //开启最大化最小化按钮
	        area: [width, height],
	        content: url,
			success : function(layero, index){
				resizeLayer(index);
				window.onresize=function(){
					var cssText=$("[id^='layui-layer'].layui-layer-yyf").attr("style");
					$("[id^='layui-layer'].layui-layer-yyf").css("cssText","left:0 !important;top:0 !important;width:100vw !important;height:100vh !important;"+cssText);
	    		};
			}
	    })
	    parent.layui.layer.full(index);
	}
//关闭页面
function CloseWin(){
var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
parent.layer.close(index); //再执行关闭 
}
//loading弹框，提交时可调用
function loading(){
	//loading层
	 var index = layer.load(1, {
	   shade: [0.1,'#fff'] //0.1透明度的白色背景
	 });
}

function resizeLayer(layerIndex,height) {
    //debugger;
	//console.log(window.innerHeight)
      setTimeout(function(){
    	  layer.style(layerIndex, {
  	        top: 0,
  	        height: window.innerHeight>height?height:window.innerHeight
  	    });
	},300);
}



function openDivZS(width,height,url,title,end){
    layer.open({
        type: 2,
        title: title,
        skin:'layui-layer-molv',
        shadeClose: true,
        offset: 't',
        maxmin: false, //开启最大化最小化按钮
        area: [width, height],
        content: url,
        success : function(layero, index){
            //去除px
            height=height.replace('px','');
            resizeLayer(index,height);
            setTimeout(function(){
                window.originalWindowHeight=window.innerHeight;
                window.originalPopHeight=$("[id^='layui-layer'].layui-layer-molv").height();
                //弹窗小屏幕自适应
                window.onresize=function(){
                    var curJq=$("[id^='layui-layer'].layui-layer-molv");
                    if(curJq.length==0){return;}
                    var heightAfterResize=window.innerHeight;
                    if(heightAfterResize>height){
                        heightAfterResize=height;
                    }
                    curJq.height(heightAfterResize*originalPopHeight/originalWindowHeight);
                    originalWindowHeight=heightAfterResize;
                    originalPopHeight=$("[id^='layui-layer'].layui-layer-molv").height();
                };
            },400);
        },
        end:function(){
            location.reload();
        }
    });
}