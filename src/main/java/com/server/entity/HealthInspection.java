package com.server.entity;

import java.util.Date;

public class HealthInspection {
    private Integer healthinspectionId;

    private String hiUser;

    private Date hiDate;

    private String hiDor;

    private Long hiGrade;

    public Integer getHealthinspectionId() {
        return healthinspectionId;
    }

    public void setHealthinspectionId(Integer healthinspectionId) {
        this.healthinspectionId = healthinspectionId;
    }

    public String getHiUser() {
        return hiUser;
    }

    public void setHiUser(String hiUser) {
        this.hiUser = hiUser == null ? null : hiUser.trim();
    }

    public Date getHiDate() {
        return hiDate;
    }

    public void setHiDate(Date hiDate) {
        this.hiDate = hiDate;
    }

    public String getHiDor() {
        return hiDor;
    }

    public void setHiDor(String hiDor) {
        this.hiDor = hiDor == null ? null : hiDor.trim();
    }

    public Long getHiGrade() {
        return hiGrade;
    }

    public void setHiGrade(Long hiGrade) {
        this.hiGrade = hiGrade;
    }
}