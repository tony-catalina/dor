layui.config({
    base: "/lib/js/"//自定义加载的模块
}).use(['form', 'layer', 'jquery', 'table', 'laydate', 'commUtil'], function () {
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : parent.layer,
        $ = layui.jquery;
    var table = layui.table;
    var laydate = layui.laydate;
    var commUtil = layui.commUtil;
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    if(month<10){
        month="0"+month;
    }
    var todayTime = year + '-' + month  + '-' + day;//当前时间\

    laydate.render({
        elem: '#user_birthday'
        ,type: 'date'
        ,trigger:'click'
    });
    laydate.render({
        elem: '#user_rxny'
        ,type: 'date'
        ,trigger:'click'
    });

    setDefultUserNum();
    

    //监听保存事件
    form.on("submit(addBtn)", function (data) {


        console.log("=========="+JSON.stringify(data))

        if(repeat_submitFlag==false){
            commUtil.commMessInfo('数据正在提交，请稍候。。。');
            return;
        }
        repeat_submitFlag=false;

        $.ajax({
            url: basePath + "/dorUser/add",
            type: "POST",
            data: JSON.stringify(data.field),
            contentType: 'application/json;charset=utf-8',
            dataType:'json',
            success: function (result) {
                if (result.code == 0) {
                    layer.msg("操作成功");
                    window.parent.location.reload();

                } else {
                    layer.msg(result.message, {icon: 0})
                }
            }
        });
    })

    //监听提交事件
    form.on("submit(submitBtn)", function (data) {


        if(repeat_submitFlag==false){
            commUtil.commMessInfo('数据正在提交，请稍候。。。');
            return;
        }
        repeat_submitFlag=false;

        layer.confirm('您的提交将启动流程,您确定要提交吗？',{btn: ['确认', '取消'],icon:3,area: ['', '180px'], title:'提示信息',
            btn1:function(index){

                repeat_confirmNum+=1;
                if(repeat_confirmNum==1){//控制点击次数，防止重复提交
                    $.ajax({
                        url: basePath + "/service/szyd/szyddoc/save?type=submit",
                        type: "POST",
                        data: data.field,
                        //contentType:"application/json",
                        success: function (result) {
                            if (result.code == 0) {
                                layer.msg("操作成功");
                                if(recId!=null&&recId!=""){
                                    window.parent.location.reload();
                                }else {
                                    top.document.getElementById("SZYD_SXADD").click();
                                    top.document.getElementById("SZYD_SXDJ").click();
                                }
                            } else {
                                layer.msg(result.msg, {icon: 2})
                            }
                        }
                    });
                }
            },
            btn2:function(index, layero){
                repeat_submitFlag=false;
                repeat_submitFlag=true;
            },
            cancel:function(index, layero){
                repeat_submitFlag=true;
            }
        });

    })

    form.verify({
        phoneCheck : function(value, item) {
            if(value != ''){
                re = /^1\d{10}$/;
                if (!re.test(value)) {
                    return '手机号码格式错误！';
                }
            }
        }
    });
    
    function setDefultUserNum() {
        $.ajax({
            url: basePath + "/dorUser/getNewUserNum",
            type: "GET",
            success: function (result) {
                if (result.code == 0) {
                    $("#user_number").val(result.result)
                }
                console.log("========="+JSON.stringify(result))
            }
        });
    }



})
