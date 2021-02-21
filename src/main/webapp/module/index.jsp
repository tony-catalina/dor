<%--
  Created by IntelliJ IDEA.
  User: Tony丝瓜壳
  Date: 2021/2/17
  Time: 16:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>后台管理</title>
    <link rel="stylesheet" href="../lib/layui/css/layui.css">
    <link rel="stylesheet" href="../css/admin.css">
</head>
<body class="layui-layout-body">
<div class="layui-layout layui-layout-admin">
    <div class="layui-header">
        <div class="layui-logo">宿舍管理系统</div>
        <!-- 头部区域（可配合layui已有的水平导航） -->
        <%--<ul class="layui-nav layui-layout-left">
            <li class="layui-nav-item layui-this" data-nav="1"><a href="javascript:;">系统设置</a></li>
            <li class="layui-nav-item" data-nav="2"><a href="javascript:;">内容管理</a></li>
        </ul>--%>
        <ul class="layui-nav layui-layout-right">
            <li class="layui-nav-item">
                <a href="javascript:;">
                    <img src="images/logins.png" class="layui-nav-img">小龙猫
                </a>
                <dl class="layui-nav-child">
                    <dd><a href="javascript:;">基本资料</a></dd>
                    <dd><a href="javascript:;">安全设置</a></dd>
                    <dd><a href="javascript:;">退出登录</a></dd>
                </dl>
            </li>
            <li class="layui-nav-item"><a href="">首页</a></li>
        </ul>
    </div>
    <div class="layui-side layui-bg-black">
        <div class="layui-side-scroll" id="layui_nav_left_1" style="display: block;">
            <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
            <ul class="layui-nav layui-nav-tree"  lay-filter="test">
                <li class="layui-nav-item layui-nav-itemed">
                    <a class="" href="javascript:;">入宿退宿办理</a>
                    <dl class="layui-nav-child">
                        <dd><a href="javascript:;" data-url="../module/rstsbl/xsxxbl.jsp">学生信息补录</a></dd>
                        <dd><a href="javascript:;" data-url="../module/rstsbl/xsrzbl.jsp">学生入住办理</a></dd>
                        <dd><a href="javascript:;" data-url="../module/rstsbl/dd.jsp">学生退宿办理</a></dd>
                    </dl>
                </li>
                <li class="layui-nav-item layui-nav-itemed">
                    <a href="javascript:;">宿舍人员调整</a>
                    <dl class="layui-nav-child">
                        <dd><a href="javascript:;" data-url="admin-list.html">单人调宿</a></dd>
                        <dd><a href="javascript:;" data-url="role-list.html">两人互调</a></dd>
                        <dd><a href="javascript:;" data-url="auth-list.html">单个房间调整</a></dd>
                        <dd><a href="javascript:;" data-url="auth-list.html">房间互调</a></dd>
                    </dl>
                </li>
                <li class="layui-nav-item layui-nav-itemed">
                    <a href="javascript:;">宿舍日常管理</a>
                    <dl class="layui-nav-child">
                        <dd><a href="javascript:;" data-url="enclosure-list.html">卫生检查记录</a></dd>
                        <dd><a href="javascript:;" data-url="cache.html">宿舍查寝记录</a></dd>
                    </dl>
                </li>
                <li class="layui-nav-item layui-nav-itemed">
                    <a href="javascript:;">宿舍财产管理</a>
                    <dl class="layui-nav-child">
                        <dd><a href="javascript:;" data-url="cache.html">宿舍财产管理</a></dd>
                        <dd><a href="javascript:;" data-url="cache.html">宿舍财产管理</a></dd>
                    </dl>
                </li>
            </ul>
        </div>
        <div class="layui-side-scroll" id="layui_nav_left_2">
            <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
            <ul class="layui-nav layui-nav-tree"  lay-filter="test">
                <li class="layui-nav-item layui-nav-itemed">
                    <a class="" href="javascript:;">文章管理</a>
                    <dl class="layui-nav-child">
                        <dd><a href="javascript:;" data-url="article_category-list.html">文章类型</a></dd>
                        <dd><a href="javascript:;" data-url="article-list.html">文章列表</a></dd>
                    </dl>
                </li>
            </ul>
        </div>
    </div>
    <div class="layui-body" id="LAY_app_body">
        <div class="layui-tabsbody-item layui-show">
            <iframe src="../module/console.jsp" frameborder="0" class="layui-iframe" style="padding: 15px;"></iframe>
        </div>
    </div>
    <div class="layui-footer" style="text-align: center">
        <!-- 底部固定区域 -->
        © 宿舍管理系统后台
    </div>
</div>
</body>
</html>
<script src="../js/jquery-3.4.1.min.js"></script>
<script src="../lib/layui/layui.js"></script>
<script src="../js/admin.js"></script>
