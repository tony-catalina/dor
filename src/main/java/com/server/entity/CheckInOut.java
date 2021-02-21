package com.server.entity;

import java.util.Date;

public class CheckInOut {
    private Integer checkinoutId;

    private String checkUser;

    private Date checkDate;

    private String checkBlr;

    private String checkState;

    public Integer getCheckinoutId() {
        return checkinoutId;
    }

    public void setCheckinoutId(Integer checkinoutId) {
        this.checkinoutId = checkinoutId;
    }

    public String getCheckUser() {
        return checkUser;
    }

    public void setCheckUser(String checkUser) {
        this.checkUser = checkUser == null ? null : checkUser.trim();
    }

    public Date getCheckDate() {
        return checkDate;
    }

    public void setCheckDate(Date checkDate) {
        this.checkDate = checkDate;
    }

    public String getCheckBlr() {
        return checkBlr;
    }

    public void setCheckBlr(String checkBlr) {
        this.checkBlr = checkBlr == null ? null : checkBlr.trim();
    }

    public String getCheckState() {
        return checkState;
    }

    public void setCheckState(String checkState) {
        this.checkState = checkState == null ? null : checkState.trim();
    }
}