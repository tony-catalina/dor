package com.server.mapper;

import com.server.entity.Adjust;
import org.springframework.stereotype.Component;

@Component
public interface AdjustMapper {
    int deleteByPrimaryKey(Integer adjustId);

    int insert(Adjust record);

    int insertSelective(Adjust record);

    Adjust selectByPrimaryKey(Integer adjustId);

    int updateByPrimaryKeySelective(Adjust record);

    int updateByPrimaryKey(Adjust record);
}
