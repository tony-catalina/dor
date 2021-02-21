package com.server.mapper;

import com.server.entity.CheckInOut;
import org.springframework.stereotype.Component;

@Component
public interface CheckInOutMapper {
    int deleteByPrimaryKey(Integer checkinoutId);

    int insert(CheckInOut record);

    int insertSelective(CheckInOut record);

    CheckInOut selectByPrimaryKey(Integer checkinoutId);

    int updateByPrimaryKeySelective(CheckInOut record);

    int updateByPrimaryKey(CheckInOut record);
}
