<%--
  Created by IntelliJ IDEA.
  User: zhang_tx
  Date: 2020/12/2
  Time: 10:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/lib/layui/css/layui.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/viewtable.css">

    <script src="${pageContext.request.contextPath}/js/jquery-3.4.1.min.js" charset="UTF-8"></script>
    <script src="${pageContext.request.contextPath}/lib/layui/layui.js" charset="UTF-8"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/modules/oa/szyd/ctrl/szydDoc.js"></script>

    <style>
        .layui-table-header>.layui-table th>div{
            text-align: center;
        }
    </style>
</head>
<body>
<div style="margin:0px; background-color: white; margin:10px 10px;" class="search" >
    <div class="layui-tab layui-tab-card" style="padding:5px;">
        <form  id="szydSearchForm" class="layui-form layui-form-pane" >
            <div class="layui-form-item">
                <div class="layui-inline">
                    <label class="layui-form-label">事项名称：</label>
                    <div class="layui-input-inline" style="width: 300px">
                        <input type="text" id="szydName" class="layui-input search_input" placeholder="请输入事项名称"
                               name="szydName" maxlength="50">
                    </div>
                </div>
                <div class="layui-inline">
                    <label class="layui-form-label">事项状态：</label>
                    <div class="layui-input-inline">
                        <select name="workFlowState" id="workFlowStates">
                            <option value="">请选择处理状态</option>
                            <option value="0">暂存</option>
                            <option value="1">审核中</option>
                            <option value="2">审核通过</option>
                            <%--<option value="3">审核未通过</option>--%>
                        </select>
                    </div>
                </div>

                <div class="layui-inline" style="" >
                    <label class="layui-form-label">登记日期：</label>
                    <div class="layui-input-inline" <%--style="width: 280px"--%>>
                        <input type="text" id="createDateStart" class="layui-input search_input" placeholder="起始时间"
                               name="createDateStart" maxlength="30" style="display: inline-block;/*width: 100px*/"/>
                    </div>
                    <div class="layui-input-inline">
                        <input type="text" id="createDateEnd" class="layui-input search_input" placeholder="结束时间"
                               name="createDateEnd" maxlength="30" style="/*width: 100px;*/display: inline-block"/>
                    </div>
                </div>

                <div class="layui-inline" style="/*float:right;margin-right:0;*/">
                    <!-- 按钮组 -->
                    <div class="btns_list">
                        <button type="button" class="onQuery" id="btnSearch">
                            <i class="iconfont icon-query"></i>
                            查询
                        </button>
                        <button type="reset" class="onRefresh" >
                            <i class="iconfont icon-back"></i>
                            重置
                        </button>
                    </div>
                </div>

            </div>

            <%-- <div class="layui-form-item searchBtns" style="text-align: left">
                 <div style="width: 40%;float: right">
                     &lt;%&ndash;<a class="layui-btn layui-btn-normal onAdd">新增</a>&ndash;%&gt;
                     <a class="layui-btn onQuery">查询</a>
                     <button type="reset" class="layui-btn">重置</button>
                     &lt;%&ndash;<a class="layui-btn layui-btn-normal onPrint">打印</a>&ndash;%&gt;

                 </div>

             </div>--%>


        </form >
    </div >
</div >
<div style="margin: 0px; background-color: white; margin: 0 10px;" id="print">
    <div class="layui-tab layui-tab-card" style="padding: 5px;">

        <table lay-data="{url:'${pageContext.request.contextPath}/service/szyd/szyddoc',
            page:true, id:'modelInfo'<%--,done:isForSelf--%>}"
               class="layui-table"  lay-filter="modelInfo" id="archiveTable" >
            <thead>
            <tr>
                <th lay-data="{type:'numbers'}">序号</th>
                <th lay-data="{width:'25%',field:'szydName',sort: true,toolbar:'#szydNameTool'}" >事项名称</th>
                <th lay-data="{field:'zbcsName',sort: true,align:'center'}" >主办处室</th>
                <th lay-data="{field:'jbrname',sort: true,align:'center'}" >经办人</th>
                <th lay-data="{field:'jbrphone',sort: true,align:'center'}" >联系电话</th>
                <th lay-data="{field:'createDateStr',sort: true,align:'center'}" >登记日期</th>
                <th lay-data="{field:'workFlowState',sort: true ,templet: '#workFlowState',align:'center'}" >事项状态</th>
                <th lay-data="{ width:200,toolbar: '#operator_bar', fixed: 'right',align:'center'}">操作</th>

            </tr>
            </thead>
        </table>

    </div>
</div>
<script type="text/html" id="workFlowState">
    {{#  if(d.workFlowState === '1'){ }}
    <a>审核中</a>
    {{#  } else if(d.workFlowState === '2'){   }}
    <a >审核通过</a>
    <%--{{#  } else if(d.workFlowState === '3'){  }}
    <a >流程审核中</a>--%>
    {{#  }else{  }}
    <a >暂存</a>
    {{#  }  }}

</script>
<script type="text/html" id="operator_bar">
    <div class="btn_list" >
        <%--{{#  if(d.workFlowState === '1'||d.workFlowState === '2'||d.workFlowState === '3' ){ }}

        {{#  } else{ }}--%>
        <%-- <a class="look_up_list onlySelf" lay-event="onView" title="">查看</a>
     <a class="edit_list onlySelf" lay-event="onEdit" title="">编辑</a>
     <a class="remove_list onlySelf" lay-event="delete">删除</a>--%>
        <%--{{#  }  }}--%>
        <a class="look_up_list onlySelf" lay-event="onView" title="">查看</a>
        {{#  if(d.workFlowState === '1'||d.workFlowState === '2'||d.workFlowState === '3'){ }}
        <a class="look_up_list" lay-event="viewProcess">查看流程图</a>
        {{#  }else{ }}
        <a class="edit_list onlySelf" lay-event="onEdit" title="">编辑</a>
        <a class="remove_list onlySelf" lay-event="delete">删除</a>
        {{#  } }}
    </div>

</script>
<script type="text/html" id="szydNameTool">
    {{# if (d.szydName==undefined) { }}

    {{# }else{ }}
    <a class="see" lay-event="onView">{{d.szydName}}</a>
    {{# } }}
</script>

<script>
    var basePath = "${pageContext.request.contextPath}";
</script>
</body>

