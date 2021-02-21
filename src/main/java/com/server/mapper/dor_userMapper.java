package com.server.mapper;

import com.server.entity.dor_user;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

@Component
public interface dor_userMapper {
    int deleteByPrimaryKey(Integer userId);

    int insert(dor_user record);

    int insertSelective(dor_user record);

    dor_user selectByPrimaryKey(Integer userId);

    int updateByPrimaryKeySelective(dor_user record);

    int updateByPrimaryKey(dor_user record);

    String getMaxUserNumber(@Param("year")String year);
}
