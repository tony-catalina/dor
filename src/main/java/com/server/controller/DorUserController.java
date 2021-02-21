package com.server.controller;

import com.alibaba.druid.support.json.JSONUtils;
import com.server.entity.dor_user;
import com.server.service.DorUserService;
import com.server.util.CommonUtil;
import com.server.util.Result;
import com.server.util.ResultUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Calendar;

@Controller
@RequestMapping("/dorUser")
public class DorUserController {
    @Autowired
    private DorUserService dorUserService;


    @RequestMapping(value = "/add",method = RequestMethod.POST)
    @ResponseBody
    public Result addUser(@RequestBody dor_user dor_user , HttpServletRequest request, HttpServletResponse response){
        System.out.println("==========="+dor_user.toString());
        dor_user.setUserPower("1");
        int sd=dorUserService.insertSelective(dor_user);
        return ResultUtils.success("保存成功",sd);
    }


    @RequestMapping(value = "/getNewUserNum",method = RequestMethod.GET)
    @ResponseBody
    public Result getUserNumber(HttpServletRequest request, HttpServletResponse response){
        String newUserNum=CommonUtil.newSerialNum("S", null,
                dorUserService.getMaxUserNumber(String.valueOf(Calendar.getInstance().get(Calendar.YEAR))));

        return ResultUtils.success("保存成功",newUserNum);
    }

}
