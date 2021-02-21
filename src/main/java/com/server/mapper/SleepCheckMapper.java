package com.server.mapper;

import com.server.entity.SleepCheck;
import org.springframework.stereotype.Component;

@Component
public interface SleepCheckMapper {
    int deleteByPrimaryKey(Integer sleepcheckId);

    int insert(SleepCheck record);

    int insertSelective(SleepCheck record);

    SleepCheck selectByPrimaryKey(Integer sleepcheckId);

    int updateByPrimaryKeySelective(SleepCheck record);

    int updateByPrimaryKey(SleepCheck record);
}
