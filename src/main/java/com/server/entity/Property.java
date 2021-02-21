package com.server.entity;

import java.util.Date;

public class Property {
    private Integer propertyId;

    private String propertyDor;

    private String propertyName;

    private Long propertyVal;

    private String propertyUser;

    private Date propertyDate;

    private String propertyState;

    public Integer getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(Integer propertyId) {
        this.propertyId = propertyId;
    }

    public String getPropertyDor() {
        return propertyDor;
    }

    public void setPropertyDor(String propertyDor) {
        this.propertyDor = propertyDor == null ? null : propertyDor.trim();
    }

    public String getPropertyName() {
        return propertyName;
    }

    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName == null ? null : propertyName.trim();
    }

    public Long getPropertyVal() {
        return propertyVal;
    }

    public void setPropertyVal(Long propertyVal) {
        this.propertyVal = propertyVal;
    }

    public String getPropertyUser() {
        return propertyUser;
    }

    public void setPropertyUser(String propertyUser) {
        this.propertyUser = propertyUser == null ? null : propertyUser.trim();
    }

    public Date getPropertyDate() {
        return propertyDate;
    }

    public void setPropertyDate(Date propertyDate) {
        this.propertyDate = propertyDate;
    }

    public String getPropertyState() {
        return propertyState;
    }

    public void setPropertyState(String propertyState) {
        this.propertyState = propertyState == null ? null : propertyState.trim();
    }
}