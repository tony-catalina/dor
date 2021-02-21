package com.server.entity;

import java.util.Date;

public class Dormitory {
    private Integer dormitoryId;

    private String dorBuilding;

    private String dorNumber;

    private String dorFloor;

    private String dorGly;

    private Integer dorRzrs;

    private Integer dorKrzrs;

    private String dorSzxy;

    private String dorFdy;

    private Date createTime;

    private String createUser;

    private Date updateDate;

    private String updateUser;

    private String updateInfoid;

    public Integer getDormitoryId() {
        return dormitoryId;
    }

    public void setDormitoryId(Integer dormitoryId) {
        this.dormitoryId = dormitoryId;
    }

    public String getDorBuilding() {
        return dorBuilding;
    }

    public void setDorBuilding(String dorBuilding) {
        this.dorBuilding = dorBuilding == null ? null : dorBuilding.trim();
    }

    public String getDorNumber() {
        return dorNumber;
    }

    public void setDorNumber(String dorNumber) {
        this.dorNumber = dorNumber == null ? null : dorNumber.trim();
    }

    public String getDorFloor() {
        return dorFloor;
    }

    public void setDorFloor(String dorFloor) {
        this.dorFloor = dorFloor == null ? null : dorFloor.trim();
    }

    public String getDorGly() {
        return dorGly;
    }

    public void setDorGly(String dorGly) {
        this.dorGly = dorGly == null ? null : dorGly.trim();
    }

    public Integer getDorRzrs() {
        return dorRzrs;
    }

    public void setDorRzrs(Integer dorRzrs) {
        this.dorRzrs = dorRzrs;
    }

    public Integer getDorKrzrs() {
        return dorKrzrs;
    }

    public void setDorKrzrs(Integer dorKrzrs) {
        this.dorKrzrs = dorKrzrs;
    }

    public String getDorSzxy() {
        return dorSzxy;
    }

    public void setDorSzxy(String dorSzxy) {
        this.dorSzxy = dorSzxy == null ? null : dorSzxy.trim();
    }

    public String getDorFdy() {
        return dorFdy;
    }

    public void setDorFdy(String dorFdy) {
        this.dorFdy = dorFdy == null ? null : dorFdy.trim();
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser == null ? null : createUser.trim();
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public String getUpdateUser() {
        return updateUser;
    }

    public void setUpdateUser(String updateUser) {
        this.updateUser = updateUser == null ? null : updateUser.trim();
    }

    public String getUpdateInfoid() {
        return updateInfoid;
    }

    public void setUpdateInfoid(String updateInfoid) {
        this.updateInfoid = updateInfoid == null ? null : updateInfoid.trim();
    }
}