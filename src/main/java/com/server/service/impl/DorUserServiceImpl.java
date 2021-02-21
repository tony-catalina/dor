package com.server.service.impl;

import com.server.entity.dor_user;
import com.server.mapper.dor_userMapper;
import com.server.service.DorUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DorUserServiceImpl implements DorUserService {
    @Autowired
    dor_userMapper dor_userMapper;

    @Override
    public int insertSelective(dor_user dor_user) {
        return dor_userMapper.insertSelective(dor_user);
    }

    @Override
    public String getMaxUserNumber(String year) {
        return dor_userMapper.getMaxUserNumber(year);
    }
}
