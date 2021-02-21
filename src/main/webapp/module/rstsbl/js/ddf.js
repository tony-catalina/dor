layui.use(['form','layer','jquery','layedit','laydate','laypage','table'],function(){
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : parent.layer,
        laypage = layui.laypage,
        layedit = layui.layedit,
        laydate = layui.laydate,
        $ = layui.jquery;
    var table = layui.table;
    var cols = [
        [
            {
                minWidth: 120,
                title: '模块编码',
                field: 'modelcode',
                align: 'center',
                sort: true
            },

            {
                minWidth: 120,
                title: '模块名称',
                field: 'modelname',
                align: 'center',
                sort: true
            },

            /*{
                    minWidth: 120,
                    title: '模块样式',
                    field: 'modelclass',
                    align: 'center',
                    sort: true
                },

            {
                    minWidth: 120,
                    title: '模块图片路径',
                    field: 'modelimgurl',
                    align: 'center',
                    sort: true
                },*/

            {
                minWidth: 120,
                title: '模块排序',
                field: 'orderno',
                align: 'center',
                sort: true
            },
            {
                minWidth: 120,
                title: '数据更新时间',
                field: 'insTime',
                align: 'center',
                templet: '#insTime',
                sort: true
            },
            {   fixed: 'right',
                title: '操作',
                toolbar: '#operator_bar',
                align: 'center',
                width:'200'
            }
        ]
    ]
    table.render({
        elem: '#modelInfo',
        url: basePath+'/system/models',
        page: true,
        cols: cols,
        method:'post',
        skin: 'line',
        toolbar: '#middle-toolbar',
        defaultToolbar: [{
            layEvent: 'refresh',
            title:'刷新',
            icon: 'layui-icon-refresh',
        }, 'filter', 'print', 'exports']
    });

    //监听工具条
    table.on('tool(modelInfo)', function(obj){
        var data = obj.data;
        if(obj.event === 'devare'){
            onDevare(data.recId);
        }else if(obj.event === 'edit'){
            onEdit(data.recId,data);
        }else if(obj.event === 'view'){
            onView(data.recId,data);
        }
    });

    table.on('toolbar(modelInfo)', function(obj) {
        if (obj.event === 'add') {
            add();
        } else if (obj.event === 'refresh') {
            window.refresh();
        }
    });



    document.onkeydown = function (event) {
        var e = event || window.event;
        if (e && e.keyCode == 13) { //回车键的键值为13
            $("#list-query").click();
        }
    };

    /*
    **新增
    */
    function add(){
        var index = layui.layer.open({
            title : "编辑",
            type : 2,
            skin:'layui-layer-molv',
            area:['80%','80%'],
            offset: 't',
            content : basePath + '/system/models/'+0+"/edit",
            success : function(layero, index){
                setTimeout(function(){
                    layer.style(index, {
                        top: 0,
                        height: window.innerHeight
                    });
                },100);
            }
        });
        layui.layer.full(index);
    }

    //查询
    form.on('submit(list-query)', function(data) {
        table.reload('modelInfo', {
            where: data.field
        })
        return false;
    });

    //删除
    function onDevare(recId){

        layer.confirm('您确定要删除吗？',{skin: 'layer-ext-moon',
            btn: ['确定','取消'] }, function(index){
            $.ajax({
                type: "DELETE",
                url: basePath + '/system/models/' + recId,
                async: false,
                dataType: "json",
                success: function (data) {
                    layer.msg("操作成功！",{icon:1});
                    $("#list-query").click();
                }
            });
        });
    }
    //编辑
    function onEdit(recId,data){
        var index = layui.layer.open({
            title : "编辑",
            type : 2,
            skin:'layui-layer-molv',
            area:['80%','80%'],
            offset: 't',
            content : basePath + '/system/models/'+recId+"/edit",
            success : function(layero, index){
                setTimeout(function(){
                    layer.style(index, {
                        top: 0,
                        height: window.innerHeight
                    });
                },100);
            }
        });
        layui.layer.full(index);
    }
    //查看
    function onView(recId,data){
        var index = layui.layer.open({
            title : "查看",
            type : 2,
            skin:'layui-layer-molv',
            area:['80%','80%'],
            offset: 't',
            content : basePath + '/system/models/'+recId+"/view",
            success : function(layero, index){
                setTimeout(function(){
                    layer.style(index, {
                        top: 0,
                        height: window.innerHeight
                    });
                },100);
            }
        });
        layui.layer.full(index);
    }
    window.refresh = function(param) {
        table.reload('modelInfo');
    }
})
