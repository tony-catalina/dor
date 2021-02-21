<%--
  Created by IntelliJ IDEA.
  User: Tony丝瓜壳
  Date: 2021/2/19
  Time: 2:32
  To change this template use File | Settings | File Templates.
--%>
<%--<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ include file="/WEB-INF/jsp/sys/css.jsp" %>
<%@ include file="/WEB-INF/jsp/sys/uploader.jsp" %>--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file = "/WEB-INF/jsp/sys/css.jsp" %>
<html lang="en">
<head>
    <title>学生入住登记</title>
    <style type="text/css">
        .viewTable input[readonly], .viewTable select[readonly], .viewTable textarea[readonly] {
            border: 1px solid #e6e6e6 !important;
        }
    </style>
    <script>

    </script>
</head>
<body>
<form class = "layui-form" action = "" style = "padding: 10px" lay-filter = "scheduleForm" id = "addForm" >
    <input type="hidden" name="files" id="files">
    <table class="viewTable">
        <tbody>
        <tr>
            <th class="required">学号</th>
            <td colspan="3">
                <input type="text" name="user_number" id="user_number" lay-verify="required" class="layui-input" maxlength="160" autocomplete="off">
            </td>
        </tr>
        <tr>
            <th >姓名</th>
            <td>
                <input type="text" name="user_name" id="user_name" placeholder="姓名" class="layui-input"
                       value="" readonly />
            </td>
            <th>班级</th>
            <td>
                <input type="text" name="user_class" id="user_class"  placeholder="班级" class="layui-input" value="" readonly>
            </td>
        </tr>
        <tr>
            <th>性别</th>
            <td>
                <input type="text" name="user_sex" placeholder="性别" autocomplete="off"
                       value="" class="layui-input" readonly>
            </td>
            <th>所在院系</th>
            <td>
                <input type = "text" name = "user_yx" placeholder="所在院系" id="user_yx" readonly
                       class = "layui-input"  >
            </td >
        </tr>
        <tr>
            <th>学制</th>
            <td>
                <input type="text" name="user_sex" placeholder="学制" autocomplete="off"
                       value="" class="layui-input" readonly>
            </td>
            <th>专业</th>
            <td>
                <input type = "text" name = "user_zy" placeholder="专业"  readonly
                       class = "layui-input"   >
            </td >
        </tr>
        <tr>
            <th>办理人</th>
            <td>
                <input type = "text" name = "blr"  placeholder="办理人" readonly
                       class = "layui-input"   >
            </td>
            <th>办理日期</th>
            <td>
                <input id="createDate" type="text" name="createDate" placeholder="办理日期" autocomplete="off"
                       class="layui-input" >
            </td>
        </tr>
        <%--<tr>
            <th>办理状态</th>
            <td colspan="3">
                <select id = "displayme" name="displayme" >
                    <option value="1">入住</option>
                    <option value="2">退宿</option>
                </select>
            </td>
        </tr>--%>
        </tbody>
    </table>
    <div style = "text-align: center;margin-top: 20px;" >
        <%--<button class = "layui-btn " lay-submit lay-filter = "addBtn" id = "addBtn"
                type = "button" >暂存
        </button >
        <button class = "layui-btn" lay-submit lay-filter = "submitBtn" id = "submitBtn"
                type = "button" >提交
        </button >
        <button type = "button" class = "layui-btn layui-btn-primary" onclick = "closeWin('事项新增')" >关闭</button >--%>
        <div class="btns_list">
            <button class="layui-btn onStaging" lay-submit lay-filter="addBtn" id="addBtn" type = "button">
                <i class="iconfont icon-staging"></i>
                暂存
            </button>
            <%--<button class="layui-btn onSubmit" lay-submit lay-filter="submitBtn" id="submitBtn" type = "button">
                <i class="iconfont icon-submit"></i>
                提交
            </button>
            <button class="layui-btn onClose" id="closeTab" onclick="closeWin('事项登记')">
                <i class="iconfont   icon-close"></i>
                关闭
            </button>--%>

        </div>

    </div >
</form>
</body>
<script type="text/javascript"
        src="${pageContext.request.contextPath}/module/rstsbl/js/xsrzbl_add.js"></script>
<script type="text/javascript">
    var basePath = "${pageContext.request.contextPath}";

</script>
</html>
