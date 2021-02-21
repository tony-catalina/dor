package com.server.mapper;

import com.server.entity.Property;
import org.springframework.stereotype.Component;

@Component
public interface PropertyMapper {
    int insert(Property record);

    int insertSelective(Property record);
}
