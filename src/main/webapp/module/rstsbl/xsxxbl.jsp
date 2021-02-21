<%--
  Created by IntelliJ IDEA.
  User: Tony丝瓜壳
  Date: 2021/2/19
  Time: 14:32
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file = "/WEB-INF/jsp/sys/css.jsp" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

</head>
<style>

</style>
<body class="pear-container">
<div class="layui-card">
    <div class="layui-card-body">
        <form class="layui-form" action="">
            <div class="layui-form-item">
                <div class="layui-form-item layui-inline">
                    <label class="layui-form-label">模块编码</label>
                    <div class="layui-input-inline">
                        <input type="text" name="modelcode" placeholder="" class="layui-input">
                    </div>
                </div>

                <div class="layui-form-item layui-inline">
                    <label class="layui-form-label">模块名称</label>
                    <div class="layui-input-inline">
                        <input type="text" name="modelname" placeholder="" class="layui-input">
                    </div>
                </div>
                <div class="search_box" style="float: right;margin-right: 20px">
                    <button type="button" class="layui-btn layui-btn-normal layui-btn-radius">查询</button>
                    <button type="button" class="layui-btn layui-btn-warm layui-btn-radius">新增</button>

                    <%--<div class="btns_list">
                        <button class="onQuery" id="list-query" lay-submit lay-filter="list-query">
                            <i class="iconfont icon-query"></i>
                            查询
                        </button>
                        <button type="reset" class="onRefresh">
                            <i class="iconfont icon-back"></i>
                            重置
                        </button>
                    </div>--%></div>
            </div>
        </form>
    </div>
</div>
<div class="layui-card">
    <div class="layui-card-body">
        <table id="modelInfo" lay-filter="modelInfo"></table>
    </div>
</div>
<script type="text/html" id="middle-toolbar">
    <button type="button" class="layui-btn layui-btn-normal" lay-event="add">新增</button>
    <%--<div class="btns_list">
        <button class="onAdd" lay-event="add">
            <i class="iconfont icon-add"></i>新增
        </button>
    </div>--%>
</script>
<script type="text/html" id="insTime">
    {{layui.util.toDateString(d.insTime, 'yyyy-MM-dd')}}
</script>
<script type="text/html" id="operator_bar">
    <div class="btn_list">
        <a class="look_up_list" lay-event="view">查看</a>
        <a class="edit_list" lay-event="edit">编辑</a>
        <a class="remove_list" lay-event="devare">删除</a>
    </div>
</script>

</body>
<script  type="text/javascript" src="${pageContext.request.contextPath}/module/rstsbl/js/xsxxbl.js"></script>

<script>
    var basePath= "${pageContext.request.contextPath}";

</script>
</html>
