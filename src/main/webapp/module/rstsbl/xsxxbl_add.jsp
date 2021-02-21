<%--
  Created by IntelliJ IDEA.
  User: Tony丝瓜壳
  Date: 2021/2/19
  Time: 14:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file = "/WEB-INF/jsp/sys/css.jsp" %>
<html lang="en">
<head>
    <title>学生信息补录</title>
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

    <table class="viewTable">
        <tbody>
        <tr>
            <th>学号</th>
            <td colspan="3">
                <input type="text" name="userNumber" id="user_number" readonly class="layui-input" >
            </td>
        </tr>
        <tr>
            <th class="required">姓名</th>
            <td>
                <input type="text" name="userName" id="user_name" placeholder="姓名" class="layui-input" lay-verify="required"
                       value=""  />
            </td>
            <th class="required">班级</th>
            <td>
                <input type="text" name="userClass" id="user_class"  placeholder="班级" class="layui-input" lay-verify="required" >
            </td>
        </tr>
        <tr>
            <th class="required">性别</th>
            <td>
                <%--<input type="text" name="user_sex" placeholder="性别" autocomplete="off"
                       value="" class="layui-input" readonly>--%>
                    <select id = "user_sex" name="userSex" lay-verify="required">
                        <option value="1">男</option>
                        <option value="2">女</option>
                    </select>
            </td>
            <th class="required">所在院系</th>
            <td>
                <input type = "text" name = "userYx" placeholder="所在院系" id="user_yx" lay-verify="required"
                       class = "layui-input"  >
            </td >
        </tr>
        <tr>
            <th class="required">学制</th>
            <td>
                <select id = "user_xz" name="userXz" lay-verify="required">
                    <option value="全日制">全日制</option>
                    <option value="非全日制">非全日制</option>
                </select>
            </td>
            <th class="required">专业</th>
            <td>
                <input type = "text" name = "userZy" placeholder="专业" lay-verify="required"
                       class = "layui-input"   >
            </td >
        </tr>
       <tr>
           <th>邮箱</th>
           <td>
               <input type="text" name="userEmail" placeholder="邮箱" autocomplete="off"
                      value="" class="layui-input" >
           </td>
           <th>手机号</th>
           <td>
               <input type = "text" name = "userPhone" placeholder="手机号" lay-verify = "phoneCheck"
                      class = "layui-input"   >
           </td >
       </tr>
       <tr>
           <th>民族</th>
           <td>
               <input type="text" name="userMz" placeholder="民族" autocomplete="off"
                      value="" class="layui-input" >
           </td>
           <th>政治面貌</th>
           <td>
               <input type = "text" name = "userZzmm" placeholder="政治面貌"
                      class = "layui-input"   >
           </td >
       </tr>
       <tr>
           <th class="required">生日</th>
           <td>
               <input type="text" name="userBirthday" id="user_birthday" placeholder="生日" autocomplete="off" required
                      value="" class="layui-input" lay-verify="required">
           </td>
           <th class="required">入学年月</th>
           <td>
               <input type = "text" name = "userRxny" id="user_rxny"  placeholder="入学年月" lay-verify="required"
                      class = "layui-input"  >
           </td >
       </tr>
       <tr>
           <th class="required">家庭住址</th>
           <td colspan="3">
               <input type="text" name="userJtzz" placeholder="家庭住址" autocomplete="off" lay-verify="required"
                      value="" class="layui-input" >
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
        src="${pageContext.request.contextPath}/module/rstsbl/js/xsxxbl_add.js"></script>
<script type="text/javascript">
    var basePath = "${pageContext.request.contextPath}";

</script>
</html>
