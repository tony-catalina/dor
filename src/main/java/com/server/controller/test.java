package com.server.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/test")
public class test {

    @RequestMapping(value = "/testDD",method = RequestMethod.POST)
    public Map<String,Object> ddd(){
        System.out.println("==============2222");
        Map map=new HashMap();
        map.put("ooo","11");
        return map;
    }

    @RequestMapping(value = "/toIndex",method = RequestMethod.GET)
    public String dssdd(){
        System.out.println("==============2222");
        return "module/index";
    }


}
