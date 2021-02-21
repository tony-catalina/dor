package com.server.mapper;

import com.server.entity.Dictionaries;
import org.springframework.stereotype.Component;

@Component
public interface DictionariesMapper {
    int deleteByPrimaryKey(Integer dictionariesId);

    int insert(Dictionaries record);

    int insertSelective(Dictionaries record);

    Dictionaries selectByPrimaryKey(Integer dictionariesId);

    int updateByPrimaryKeySelective(Dictionaries record);

    int updateByPrimaryKey(Dictionaries record);
}
