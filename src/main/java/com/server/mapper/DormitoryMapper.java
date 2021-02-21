package com.server.mapper;

import com.server.entity.Dormitory;
import org.springframework.stereotype.Component;

@Component
public interface DormitoryMapper {
    int deleteByPrimaryKey(Integer dormitoryId);

    int insert(Dormitory record);

    int insertSelective(Dormitory record);

    Dormitory selectByPrimaryKey(Integer dormitoryId);

    int updateByPrimaryKeySelective(Dormitory record);

    int updateByPrimaryKey(Dormitory record);
}
