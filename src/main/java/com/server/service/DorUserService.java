package com.server.service;


import com.server.entity.dor_user;

public interface DorUserService {

    int insertSelective(dor_user dor_user);

    String getMaxUserNumber(String year);

}
