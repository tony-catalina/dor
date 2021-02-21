/**
  扩展一个commUtil模块
**/      
layui.define(['jquery','form','upload'],function(exports){ //提示：模块也可以依赖其它模块，如：layui.define('layer', callback);
  var form = layui.form;
  $ = layui.jquery;   
  var upload = layui.upload;

  var obj = {
	/**
	 * 
	 * 获取数据字典
	 * name:  class名称最好也使用这个
	 * type：类别 radio、checkbox
	 * defaultValue：默认值
	 * datacatalog：数据字典类别
	 * needWhole:是否显示全部  0否   1是
	 * 
	 * 使用案例：
	 * commUtil.getDataList('test_age','checkbox','','isDebt','1')  复选框
	 * commUtil.getDataList('test_age2','radio','','mz','0')       单选按钮
	 */
	getDataList: function(name,type,defaultValue,datacatalog,needWhole){
		$.get(basePath+'/system/cp/dictionary/'+datacatalog, function(data){
			$('.'+name).html(renderCheckBox(name,type,data.data,defaultValue,needWhole));
		   	form.render();
		});
    },
    /**
     * 下拉选择  暂不使用
     * url:basePath+'service/dwgl/dygl/djgldyjbxxb/querySzdzbCode'
     * selectName：页面 class="org_select"
     * type：类型 预留
     * defaultValue：默认值
     * 编码和属性名：id   text
     * 
     */
    getOrgList: function(url,selectName,type,defaultValue){
		$.get(url, function(data){
			//debugger;
		   	//初始化下拉列表
		   	$('.'+selectName).html(selectRenderDate(data.data,selectName,defaultValue,type));
		   	form.render();
		});
    },
    /**
     * 自定义		下拉框、单选按钮、复选框
     * url:basePath+'service/dwgl/dygl/djgldyjbxxb/querySzdzbCode'
     * selectName：页面 class="org_select"
     * type：类型  下拉框select  复选框checkbox  单选按钮radio
     * defaultValue：默认值
     * needWhole  是否显示全部   1  是   9999自定义  其他  否
     * customValue 自定义下拉选项值  结合needWhole为9999时使用
     * 编码和属性名：id   text
     * 
     */
    switchComponent: function(url,selectName,type,defaultValue,needWhole,customValue){
		$.get(url, function(data){
			//debugger;
		   	$('.'+selectName).html(renderData(data.data,selectName,defaultValue,type,needWhole,customValue));
		   	form.render();
		});
    },
    /**
     * 下拉多选框   数据字典、自定义         此功能后期不更新，只更新switchSelectAndCheckBox2方法
     * url:basePath+'service/dwgl/dygl/djgldyjbxxb/querySzdzbCode'
     * selectName：页面 class="org_select"
     * defaultValue：默认值
     * needWhole  是否显示全部   1  是  
     * isData  是否加载数据字典   1是
     * textName 文本框显示值
     */
    switchSelectAndCheckBox: function(url,selectName,defaultValue,needWhole,isData,textName){
		$.get(url, function(data){
//			debugger;
		   	$('.'+selectName).html(renderSelectAndCheckBox(data.data,selectName,defaultValue,needWhole,isData,textName));
		   	
			$(".downpanel").on("click",".layui-select-title",function(e){
	            var $select=$(this).parents(".layui-form-select");
	            $(".layui-form-select").not($select).removeClass("layui-form-selected");
	            $select.addClass("layui-form-selected");
	            e.stopPropagation();
	        }).on("click",".layui-form-checkbox",function(e){
	            e.stopPropagation();
	        });
		   	
			 //监听下拉选择事件
			  form.on('checkbox('+selectName+')', function(data){
				 // debugger;
				  var id_array=[];
				  var text_array=[];
					 $("input:checkbox[name='"+selectName+"']:checked").each(function() {
					            id_array.push($(this).val());//向数组中添加元素
					            var text=$(this).parent().text();
					            if(text.length>1){
					            	text_array.push(text.substr(0,text.length-1));//向数组中添加元素
					            }
					        });
					 var idstr=id_array.join(',');//将数组元素连接起来以构建一个字符串
					 var textstr=text_array.join(',');//将数组元素连接起来以构建一个字符串
					 $('#'+textName).val(textstr)
			 });
		   	
		   	
		   	form.render();
		});
    },
    /**
     * 自定义下拉多选框   数据字典、自定义(wang_k改)
     * url:basePath+'service/dwgl/dygl/djgldyjbxxb/querySzdzbCode'
     * selectName：页面 class="org_select"
     * defaultValue：默认值
     * needWhole  是否显示全部   1  是   2 请选择   9999自定义
     * isData  是否加载数据字典   1是
     * textName 文本框显示值
     * textName2 文本框ID值
     *customValue 自定义下拉选项值  结合needWhole为9999时使用
     */
    switchSelectAndCheckBox2: function(url,selectName,defaultValue,needWhole,isData,textName,textName2,customValue){
    	$.get(url, function(data){
    		$('.'+selectName).html(renderSelectAndCheckBox(data.data,selectName,defaultValue,needWhole,isData,textName,customValue));
    		var flag = true;
    		$(".downpanel").on("click",".layui-select-title",function(e){
    			var $select=$(this).parents(".layui-form-select");
    			if(flag){
    				$select.addClass("layui-form-selected");
    				flag = false;
    			}else{
    				$select.removeClass("layui-form-selected");
    				flag = true;
    			}
    			$(document).click(function(d){
					$select.removeClass("layui-form-selected");
					flag = true;
    			});
    			e.stopPropagation();
    		}).on("click",".layui-form-checkbox",function(e){
    			e.stopPropagation();
    		});
    		
    		
    		
    		//监听下拉选择事件
    		form.on('checkbox('+selectName+')', function(data){
    			// debugger;
    			var id_array=[];
    			var text_array=[];
    			$("input:checkbox[name='"+selectName+"']:checked").each(function() {
    				//debugger;
    				if($(this).val()!=''){
    					id_array.push($(this).val());//向数组中添加元素
    				}
    				var text=$(this).parent().text();
    				if(text.length>1){
    					text_array.push(text.substr(0,text.length-1));//向数组中添加元素
    				}
    				
    			});
    			var idstr=id_array.join(',');//将数组元素连接起来以构建一个字符串
    			var textstr=text_array.join(',');//将数组元素连接起来以构建一个字符串
    			$('#'+textName).val(textstr);
    			$('#'+textName2).val(idstr);
    		});
    		
    		
    		form.render();
    	});
    },
   
    //自定义模块编号校验1-254
    checkModelNum: function(){
    	form.verify({
		  moduleNumCheck: function(value, item){ //value：表单的值、item：表单的DOM对象
		    if(value>200||value<=0){
		      return '模块编号只能是1-200！';
		    }
		  }
		}); 
    },
    /**
     *非空判断null undefined '':true
     */
    checkIsNull: function(obj){
    	if(obj==null||obj==undefined||obj==''){
		      return true;
		}else{
			 return false;
		} 
    },
    /**
     *根据code转换成name
     * 说明：因ajax是异步加载，转换的值放置到页面缓存，使用时从缓存获取
     * url:basePath+'service/dwgl/dygl/djgldyjbxxb/querySzdzbCode'
     * isCheckbox：1 是checkbox
     * code：编码值
     * isData  是否加载数据字典   1是
     * 
     * eg  自定义   basePath+'/service/dwgl/dygl/djgldyjbxxb/querySzdzbCode','0','002','0','switchName'
     *     数据字典  
     * 
     */
    switchNameByCode: function(url,isCheckbox,code,isData,switchName){
    	sessionStorage.setItem(switchName,'');//先清空缓存
    	 var name='';
		 $.get(url, function(data){
//				debugger;
			   	if (checkIsNull(!data.data)) {
			   		data=data.data; 
					for (var i = 0; i < data.length; i++) {
						if(isCheckbox=='1'){
							if(isData=='1'){
								//复选框有多个值的情况：eg:1,2,3
								if(checkIsTrue('checkbox',data[i].dataCode,code)){	
									name +=data[i].dataValue+',';
								}
							}else{
								//复选框有多个值的情况：eg:1,2,3
								if(checkIsTrue('checkbox',data[i].id,code)){	
									name +=data[i].text+',';
								}
							}
						}else{
							if(isData=='1'){
								if(data[i].dataCode==code){
									name=data[i].dataValue;
									sessionStorage.setItem(switchName,name);//转换的值放置到页面缓存
									return name;
								}
							}else{
								if(data[i].id==code){
									name=data[i].text;
									sessionStorage.setItem(switchName,name);//转换的值放置到页面缓存
									return name;
								}
							}
						}
					}
				}
			   	if(name.length>1){
			   		name=name.substr(0,name.length-1)
			   	}
			   	
			   	sessionStorage.setItem(switchName,name);//转换的值放置到页面缓存
	    		return name;
			});
    	
    },
    //
    /**
     *显示列表根据code进行转换
     *defaultValue：编码值
     *datacatalog：分类
     *
     */
//    switchCodeToName: function(defaultValue,datacatalog){
//        var objs = ${cp:DICTIONARYJSON('interfaceStatus')};
//        for (var i = 0; i < objs.length; i++) {
//            if (objs[i].id == d.startOrStop) {
//                return objs[i].name
//            }
//        }
//    }
 
    //
    /**
     *单图片上传
     *buttonId：按钮ID
     *imgUrl：图片url ID
     *fileId：隐藏域附件id值
     */
    initImg: function(buttonId,imgUrl,fileId){
		//普通图片上传
		  var uploadInst = upload.render({
		    elem: '#'+buttonId
		    ,method:'post'
		    ,url:basePath + "/service/commom/uploadFile/uploadImg"
		    ,before: function(obj){
		      //预读本地文件示例，不支持ie8
		      obj.preview(function(index, file, result){
//		    	  debugger;
//		    	  console.log(index); //得到文件索引
//		          console.log(file); //得到文件对象
		        $('#'+imgUrl).attr('src', result); //得到文件base64编码，比如图片
		      });
		    }
		    ,done: function(res){
//		    	debugger;
		    	
		    	$('#'+fileId).val(res.fileId);
		    }
		  });
    },    
    
   /**
    * 多附件上传
   * fileIdName :隐藏域附件id值
   * buttonId：按钮ID
   * tableId：表ID
   * isRead: 1 表示查看
   *  accept:附件类型   images（图片）、file（所有文件）、video（视频）、audio（音频）
   */
    initFile: function(fileIdName,buttonId,tableId,isRead,accept){
    	//多文件列表示例
		  var demoListView = $('#'+tableId);
		  var fileIds='';
		  var fileIdsTemp=new Array();
		  if(accept==undefined){
			  accept='file'
		  }
		  
		  if ($('#'+fileIdName).val()!=''&&$('#'+fileIdName).val()){
			  fileIds=$('#'+fileIdName).val();
			  fileIdsTemp=fileIds.substr(0,fileIds.length-1).split(',');
		  }
		  //暂留
		  //var UploaderPath = "http://192.168.131.45:8081/product-file/";
		  for(var i=0;i<fileIdsTemp.length;i++){
			  $.ajax({
			        type: "GET",
			        url: UploaderPath + 'service/files',
			        data: {s_files: fileIdsTemp[i]},
			        async:false,
			        dataType: "json",
			        accept: accept,
			        success: function(data){
			        	if(data.data.objList[0]){
			        		//查看
			        		if(isRead=='1'){
			        			var tr = $(['<tr id="upload-'+ i +'">'
				        		            ,'<td>'+ '<a class="layui-upload-img" width="100px" height="80px" id="demo1" style="color:blue;" href="'+UploaderPath+'service/download/pfile/'+fileIdsTemp[i]+'" target="_blanck">'+data.data.objList[0].fileName+'</a>' +'</td>'
				        		            ,'<td>'+ (data.data.objList[0].fileSize/1024).toFixed(1) +'kb</td>'
				        		            ,'<td style="display:none;"><span style="color: #5FB878;">上传成功</span></td>'
				        		            ,'<td style="display:none;">'
				        		            ,'<a class="bjcz demo-delete">删除</a>'
				        		            ,'</td>'
				        		            ,'<td style="display:none;">'+fileIdsTemp[i]+'</td>'//隐藏域，用于存放附件id
				        		            ,'</tr>'].join(''));
			        			
			        		}else{
			        			var tr = $(['<tr id="upload-'+ i +'">'
				        		            ,'<td>'+ '<a class="layui-upload-img" width="100px" height="80px" id="demo1" style="color:blue;" href="'+UploaderPath+'service/download/pfile/'+fileIdsTemp[i]+'" target="_blanck">'+data.data.objList[0].fileName+'</a>' +'</td>'
				        		            ,'<td>'+ (data.data.objList[0].fileSize/1024).toFixed(1) +'kb</td>'
				        		            ,'<td><span style="color: #5FB878;">上传成功</span></td>'
				        		            ,'<td>'
				        		            ,'<a class="bjcz demo-delete">删除</a>'
				        		            ,'</td>'
				        		            ,'<td style="display:none;">'+fileIdsTemp[i]+'</td>'//隐藏域，用于存放附件id
				        		            ,'</tr>'].join(''));
			        		}
			        		
			        		
			        		//删除
			        		tr.find('.demo-delete').on('click', function(data){
			        			//debugger
			        			var tds = tr.children();
			        			//删除此id
			        			var id =tds.eq(4).html();
			        			var fileIdsTemp=fileIds.split(',');
			        			var index = fileIdsTemp.indexOf(id);
			        			
			        			if (index > -1) {
			        				fileIdsTemp.splice(index, 1);//删除数组中的指定元素
			        				var idTemp='';
			        				for(var i=0;i<fileIdsTemp.length-1;i++){
			        					idTemp+=fileIdsTemp[i]+','
			        				}
			        				$('#'+fileIdName).val(idTemp);
			        				fileIds=idTemp;
			        			}
			        			//  delete files[i]; //删除对应的文件
			        			tr.remove();
			        			//   uploadListIns.config.elem.next()[0].value = ''; //清空 input file 值，以免删除后出现同名文件不可选
			        		});
			        		demoListView.append(tr);
			        	}
			          }
			    });
		  }
		  
		  
		  var uploadListIns = upload.render({
			    elem: '#'+buttonId
			    ,url: basePath + "/service/commom/uploadFile/uploadImg"
			    ,accept: accept
			    ,multiple: true
			    //,auto: false//是否选完文件后自动上传。如果设定 false，那么需要设置 bindAction 参数来指向一个其它按钮提交上传
			    //,bindAction: '#testListAction'
			    ,before: function(obj){   
			    	
			      var files = this.files = obj.pushFile(); //将每次选择的文件追加到文件队列
			      //读取本地文件
			      obj.preview(function(index, file, result){
			        var tr = $(['<tr id="upload-'+ index +'">'
			          ,'<td>'+ file.name +'</td>'
			          ,'<td>'+ (file.size/1024).toFixed(1) +'kb</td>'
			          ,'<td>等待上传</td>'
			          ,'<td>'
			           // ,'<button class="layui-btn layui-btn-mini demo-reload layui-hide">重传</button>'
			            ,'<a class="bjcz demo-delete">删除</a>'
			          ,'</td>'
			          ,'<td style="display:none;">0</td>'//隐藏域，用于存放附件id
			        ,'</tr>'].join(''));
			        
			        //删除
			        tr.find('.demo-delete').on('click', function(data){
//			        	debugger
			          delete files[index]; //删除对应的文件
			          tr.remove();
			          uploadListIns.config.elem.next()[0].value = ''; //清空 input file 值，以免删除后出现同名文件不可选
			          
			          var tds = tr.children();
			        	//删除此id
			        	var id =tds.eq(4).html();
			        	var fileIdsTemp=fileIds.split(',');
			    		var index = fileIdsTemp.indexOf(id);

			    		if (index > -1) {
			    			fileIdsTemp.splice(index, 1)
			    			var idTemp='';
			    			for(var i=0;i<fileIdsTemp.length-1;i++){
			    				idTemp+=fileIdsTemp[i]+','
			    			}
			    			//console.log(idTemp)
			    			$('#'+fileIdName).val(idTemp);
			    			fileIds=idTemp;
			    		}
			          
			        });
			        
			        demoListView.append(tr);
			      });
			    }
			    ,done: function(res, index, upload){
//			    	debugger
			      if(res.code == 0){ //上传成功
			        var tr = demoListView.find('tr#upload-'+ index)
			        ,tds = tr.children();
			        tds.eq(0).html('<a class="layui-upload-img" width="100px" height="80px" id="demo1" style="color:blue;" href="'+UploaderPath+'service/download/pfile/'+res.fileId+'" target="_blanck">'+tds.eq(0).html()+'</a>');
			        tds.eq(2).html('<span style="color: #5FB878;">上传成功</span>');
			        tds.eq(4).html('res.fileId');
			        
			        fileIds+=res.fileId+',';
			        $('#'+fileIdName).val(fileIds);
			        return delete this.files[index]; //删除文件队列已经上传成功的文件
			      }
			      this.error(index, upload);
			    }
			    ,error: function(index, upload){
			      var tr = demoListView.find('tr#upload-'+ index)
			      ,tds = tr.children();
			      tds.eq(2).html('<span style="color: #FF5722;">上传失败</span>');
			     // tds.eq(3).find('.demo-reload').removeClass('layui-hide'); //显示重传
			    }
			  });	
	},
	//解决新增、编辑内容过多编辑按钮不显示问题
	resizeLayer: function(layerIndex,height) {
	    //debugger;
		//console.log(window.innerHeight)
	      setTimeout(function(){
	    	  layer.style(layerIndex, {
	  	        top: 0,
	  	        height: window.innerHeight>height?height:window.innerHeight
	  	    });
		},100);
	},
	//解决新增、编辑内容过多编辑按钮不显示问题
	showOrHidden: function(selectName,selectName2,hideName,iJq,reverseFlag) {
		//addImg
		if(reverseFlag){
			iJq.addClass("new-arrow-yyf");
		}else{
			iJq.addClass("down-arrow").addClass("new-arrow-yyf");
		}
		
		form.on('checkbox('+selectName+')', function(){
			  var ischeck=$('#'+selectName2).is(':checked');
			  if(ischeck){
				  $('#'+hideName).show();	
				  iJq.removeClass("down-arrow");
			  }else{
				  $('#'+hideName).hide();	
				  iJq.addClass("down-arrow");
			  }
			 });	
	},
	//解决新增、编辑内容过多编辑按钮不显示问题
	compareDate: function(start,end) {
		var flag=false;
		var startTime=start.replace(new RegExp("-","gm"),"/");//ie9 日程格式转换只支持如下格式  2010/10/20 20:20
		var endTime=end.replace(new RegExp("-","gm"),"/");
		if(startTime>=endTime){
			flag=true;
		}
		return flag;
	},
	//关闭页面，并刷新列表(解决父页面刷新查询条件丢失问题)
	/**
	 * id:table id
	 * msgInfo:提示信息
	 * type：传2表示2层嵌套、不传默认一层嵌套
	 */
	closeAndRefreshList: function(id,msgInfo,type) {
		if(type=='2'){
			//获取父页面的index
			var index = parent.parent.layer.getFrameIndex(window.name);
//			parent.parent.layer.close(index);
//			parent.parent.layui.table.reload(id);
//			parent.parent.layer.msg(msgInfo);
			//以下解决ie浏览器提示框拉长问题：
			parent.parent.layui.table.reload(id);
			parent.parent.layer.msg(msgInfo, {anim: 0, time: 1000, area: ['', '55px']});//指定提示框高度
			parent.parent.layer.close(index);
		}else{
			//获取父页面的index
			var index = parent.layer.getFrameIndex(window.name);
//	        parent.layer.close(index);
//	        parent.layui.table.reload(id);
//			parent.layer.msg(msgInfo);
	        
			//以下解决ie浏览器提示框拉长问题：
			parent.layui.table.reload(id);
			parent.layer.msg(msgInfo, {anim: 0, time: 1000, area: ['', '55px']});//指定提示框高度
			parent.layer.close(index);
		}
	},
	
	/**
	 * 统一提示信息
	 * msgInfo:提示信息
	 */
	commMessInfo: function(msgInfo) {
		layer.msg(msgInfo, {anim: 0, time: 1000, area: ['', '55px']});//指定提示框高度
	},
  };
  
  function renderSelectAndCheckBox(data,selectName,defaultValue,needWhole,isData,textName,customValue) {
		var dataHtml = "";
		if(needWhole=="1"){
			dataHtml += "<dd><input type='checkbox' name='"+selectName+"' title='全部' value='' lay-skin='primary'  lay-filter='"+selectName+"'></dd>"
		}else if(needWhole=="9999"){
			if(defaultValue!=''){
				dataHtml += "<dd><input type='checkbox' name='"+selectName+"' title='"+customValue+"' value='' lay-skin='primary'  lay-filter='"+selectName+"'></dd>"
			}else{
				dataHtml += "<dd><input type='checkbox' name='"+selectName+"' title='"+customValue+"' value='' lay-skin='primary' checked  lay-filter='"+selectName+"'></dd>"
			}
		}else if(needWhole=="2"){
			dataHtml += "<dd><input type='checkbox' name='"+selectName+"' title='--请选择--' value='' lay-skin='primary'  lay-filter='"+selectName+"'></dd>"
		}
		
		var textContent='';
		if (data!=null&&data.length != 0) {
			for (var i = 0; i < data.length; i++) {
				if(isData=='1'){
					//复选框有多个值的情况：eg:1,2,3
					//if(data[i].dataCode==defaultValue){
					if(checkIsTrue('checkbox',data[i].dataCode,defaultValue)){	
						textContent+=data[i].dataValue+",";
						dataHtml += "<dd><input type='checkbox' name='"+selectName+"' title='"+data[i].dataValue+"' value='"+data[i].dataCode+"' lay-skin='primary' checked lay-filter='"+selectName+"'></dd>";
					}else{
						dataHtml += "<dd><input type='checkbox' name='"+selectName+"' title='"+data[i].dataValue+"' value='"+data[i].dataCode+"' lay-skin='primary'  lay-filter='"+selectName+"'></dd>";
					}	
				}else{
					//复选框有多个值的情况：eg:1,2,3
					//if(data[i].dataCode==defaultValue){
					if(checkIsTrue('checkbox',data[i].id,defaultValue)){	
						textContent+=data[i].text+",";
						dataHtml += "<dd><input type='checkbox' name='"+selectName+"' title='"+data[i].text+"' value='"+data[i].id+"' lay-skin='primary' checked lay-filter='"+selectName+"'></dd>";
					}else{
						dataHtml += "<dd><input type='checkbox' name='"+selectName+"' title='"+data[i].text+"' value='"+data[i].id+"' lay-skin='primary'  lay-filter='"+selectName+"'></dd>";
					}	
				}
			}
		}
		//debugger;
		if(textContent.length>1){
			 $('#'+textName).val(textContent.substr(0,textContent.length-1));//向数组中添加元素
        }
		return dataHtml;
	}
  
  

	function renderData(data,selectName,defaultValue,type,needWhole,customValue) {
		var dataHtml = "";
		
		if(type=='select'){
			if(needWhole=="1"){
				dataHtml += '<option value="">全部</option>';
			}else if(needWhole=="9999"){
				dataHtml += '<option value="">'+customValue+'</option>';
			}else{
				dataHtml += '<option value="">--请选择--</option>';
			}
		}else{
			if(needWhole=="1"){
				dataHtml +="<input type='"+type+"' name='"+selectName+"' value='' title='全部' lay-skin='primary'>";//;
			}else if(needWhole=="9999"){
				dataHtml +="<input type='"+type+"' name='"+selectName+"' value='' title='"+customValue+"' lay-skin='primary'>";//;
			}else{
				dataHtml +="<input type='"+type+"' name='"+selectName+"' value='' title='--请选择--' lay-skin='primary'>";//;
			}
		}
		
		
		
		if (data!=null&&data.length != 0) {
			for (var i = 0; i < data.length; i++) {
				if(type=='select'){
					if(data[i].id==defaultValue){
						dataHtml += "<option value=" + data[i].id + " selected=''>" + data[i].text + "</option>";
					}else{
						dataHtml += "<option value=" + data[i].id + ">" + data[i].text + "</option>";
					}	
				}else{
					//复选框有多个值的情况：eg:1,2,3
					//if(data[i].dataCode==defaultValue){
					if(checkIsTrue(type,data[i].id,defaultValue)){	
						dataHtml += "<input type='"+type+"' name='"+selectName+"' value='"+data[i].id+"' title='"+data[i].text+"' checked='checked' lay-skin='primary'/>";
					}else{
						dataHtml += "<input type='"+type+"' name='"+selectName+"' value='"+data[i].id+"' title='"+data[i].text+"' lay-skin='primary'>";//
					}	
				}
			}
		}
		//debugger;
		return dataHtml;
	}


	//1、下拉选择
	function selectRenderDate(data,code,defaultValue,type) {
		var dataHtml = "";
		if(code=="org_select"){
			dataHtml += '<option value="">全部</option>';
		}else{
			dataHtml += '<option value="">--请选择--</option>';
		}
		
		if (data!=null&&data.length != 0) {
			for (var i = 0; i < data.length; i++) {
				 if(code=="org_select"){//组织  党支部
					if(data[i].id==defaultValue){
						dataHtml += "<option value=" + data[i].id + " selected=''>" + data[i].text + "</option>";
					}else{
						dataHtml += "<option value=" + data[i].id + ">" + data[i].text + "</option>";
					}	
				}else{//数据字典
					if(data[i].dataCode==defaultValue){
						dataHtml += "<option value=" + data[i].dataCode + " selected=''>" + data[i].dataValue + "</option>";
					}else{
						dataHtml += "<option value=" + data[i].dataCode + ">" + data[i].dataValue + "</option>";
					}	
				}
			}
		}
		return dataHtml;
	}

	
	/**
	 * 单选按钮、复选框渲染
	 * name:
	 * type：类别 radio、checkbox
	 * data：数据字典明细
	 * defaultValue：默认值
	 * needWhole:是否显示"全部"  0否   1是
	 */
	 function renderCheckBox(name,type,data,defaultValue,needWhole) {
		//debugger
		var dataHtml='';
		if(needWhole=="1"){
			dataHtml += "<input type='"+type+"' name='"+name+"' value=''  checked='checked' title='全部'/>";
		}
		for (var i = 0; i < data.length; i++) {
			//复选框有多个值的情况：eg:1,2,3
			//if(data[i].dataCode==defaultValue){
			if(checkIsTrue(type,data[i].dataCode,defaultValue)){	
				dataHtml += "<input type='"+type+"' name='"+name+"' value='"+data[i].dataCode+"' title='"+data[i].dataValue+"' checked='checked' lay-skin='primary'/>";
			}else{
				dataHtml += "<input type='"+type+"' name='"+name+"' value='"+data[i].dataCode+"' title='"+data[i].dataValue+"' lay-skin='primary'>";//
			}	
		}	
		$('.'+name).html(dataHtml);  
	}
	 
	 
	 /**
	  * type：类别 radio、checkbox
	  * value：数据字典值
	  * defaultValue：默认值
	  */
	 function checkIsTrue(type,value,defaultValue){
		 var flag=false;
		 if(type=='radio'){
			 if(value==defaultValue){
				 return true;
			 }else{
				 return flag;
			 }
		 }else{
			 var splitTemp=defaultValue.split(',');
			 for(var i=0;i<splitTemp.length;i++){
				 if(value==splitTemp[i]){
					 return true;
				 }
			 }
		 }
	 }
	 
	 function checkIsNull(obj){
	    	if(obj==null||obj==undefined||obj==''){
			      return true;
			}else{
				 return false;
			} 
	 }
	 


  //输出commUtil接口
  exports('commUtil', obj);
});