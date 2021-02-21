package com.server.entity;

import java.util.Date;

public class SleepCheck {
    private Integer sleepcheckId;

    private String scUser;

    private String scDor;

    private Date scDate;

    private String scIsall;

    private String scAbsentees;

    public Integer getSleepcheckId() {
        return sleepcheckId;
    }

    public void setSleepcheckId(Integer sleepcheckId) {
        this.sleepcheckId = sleepcheckId;
    }

    public String getScUser() {
        return scUser;
    }

    public void setScUser(String scUser) {
        this.scUser = scUser == null ? null : scUser.trim();
    }

    public String getScDor() {
        return scDor;
    }

    public void setScDor(String scDor) {
        this.scDor = scDor == null ? null : scDor.trim();
    }

    public Date getScDate() {
        return scDate;
    }

    public void setScDate(Date scDate) {
        this.scDate = scDate;
    }

    public String getScIsall() {
        return scIsall;
    }

    public void setScIsall(String scIsall) {
        this.scIsall = scIsall == null ? null : scIsall.trim();
    }

    public String getScAbsentees() {
        return scAbsentees;
    }

    public void setScAbsentees(String scAbsentees) {
        this.scAbsentees = scAbsentees == null ? null : scAbsentees.trim();
    }
}