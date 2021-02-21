package com.server.mapper;

import com.server.entity.HealthInspection;
import org.springframework.stereotype.Component;

@Component
public interface HealthInspectionMapper {
    int deleteByPrimaryKey(Integer healthinspectionId);

    int insert(HealthInspection record);

    int insertSelective(HealthInspection record);

    HealthInspection selectByPrimaryKey(Integer healthinspectionId);

    int updateByPrimaryKeySelective(HealthInspection record);

    int updateByPrimaryKey(HealthInspection record);
}
