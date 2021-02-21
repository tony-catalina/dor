package com.server.entity;

import java.util.Date;

public class dor_user {
    private Integer userId;

    private String userName;

    private String userEmail;

    private String userPower;

    private String userPhone;

    private String userBirthday;

    private String userSex;

    private String userMz;

    private String userZzmm;

    private Date userRxny;

    private String userClass;

    private String userYx;

    private String userXz;

    private String userZy;

    private String userNumber;

    private String userJtzz;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName == null ? null : userName.trim();
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail == null ? null : userEmail.trim();
    }

    public String getUserPower() {
        return userPower;
    }

    public void setUserPower(String userPower) {
        this.userPower = userPower == null ? null : userPower.trim();
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone == null ? null : userPhone.trim();
    }

    public String getUserBirthday() {
        return userBirthday;
    }

    public void setUserBirthday(String userBirthday) {
        this.userBirthday = userBirthday == null ? null : userBirthday.trim();
    }

    public String getUserSex() {
        return userSex;
    }

    public void setUserSex(String userSex) {
        this.userSex = userSex == null ? null : userSex.trim();
    }

    public String getUserMz() {
        return userMz;
    }

    public void setUserMz(String userMz) {
        this.userMz = userMz == null ? null : userMz.trim();
    }

    public String getUserZzmm() {
        return userZzmm;
    }

    public void setUserZzmm(String userZzmm) {
        this.userZzmm = userZzmm == null ? null : userZzmm.trim();
    }

    public Date getUserRxny() {
        return userRxny;
    }

    public void setUserRxny(Date userRxny) {
        this.userRxny = userRxny;
    }

    public String getUserClass() {
        return userClass;
    }

    public void setUserClass(String userClass) {
        this.userClass = userClass == null ? null : userClass.trim();
    }

    public String getUserYx() {
        return userYx;
    }

    public void setUserYx(String userYx) {
        this.userYx = userYx == null ? null : userYx.trim();
    }

    public String getUserXz() {
        return userXz;
    }

    public void setUserXz(String userXz) {
        this.userXz = userXz == null ? null : userXz.trim();
    }

    public String getUserZy() {
        return userZy;
    }

    public void setUserZy(String userZy) {
        this.userZy = userZy == null ? null : userZy.trim();
    }

    public String getUserNumber() {
        return userNumber;
    }

    public void setUserNumber(String userNumber) {
        this.userNumber = userNumber == null ? null : userNumber.trim();
    }

    public String getUserJtzz() {
        return userJtzz;
    }

    public void setUserJtzz(String userJtzz) {
        this.userJtzz = userJtzz == null ? null : userJtzz.trim();
    }

    @Override
    public String toString() {
        return "dor_user{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userPower='" + userPower + '\'' +
                ", userPhone='" + userPhone + '\'' +
                ", userBirthday='" + userBirthday + '\'' +
                ", userSex='" + userSex + '\'' +
                ", userMz='" + userMz + '\'' +
                ", userZzmm='" + userZzmm + '\'' +
                ", userRxny=" + userRxny +
                ", userClass='" + userClass + '\'' +
                ", userYx='" + userYx + '\'' +
                ", userXz='" + userXz + '\'' +
                ", userZy='" + userZy + '\'' +
                ", userNumber='" + userNumber + '\'' +
                ", userJtzz='" + userJtzz + '\'' +
                '}';
    }
}
