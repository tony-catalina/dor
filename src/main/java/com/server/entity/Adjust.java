package com.server.entity;

import java.util.Date;

public class Adjust {
    private Integer adjustId;

    private String adjustSqr;

    private String adjustDhr;

    private Date adjustDate;

    private String adjustBlr;

    private String adjustState;

    public Integer getAdjustId() {
        return adjustId;
    }

    public void setAdjustId(Integer adjustId) {
        this.adjustId = adjustId;
    }

    public String getAdjustSqr() {
        return adjustSqr;
    }

    public void setAdjustSqr(String adjustSqr) {
        this.adjustSqr = adjustSqr == null ? null : adjustSqr.trim();
    }

    public String getAdjustDhr() {
        return adjustDhr;
    }

    public void setAdjustDhr(String adjustDhr) {
        this.adjustDhr = adjustDhr == null ? null : adjustDhr.trim();
    }

    public Date getAdjustDate() {
        return adjustDate;
    }

    public void setAdjustDate(Date adjustDate) {
        this.adjustDate = adjustDate;
    }

    public String getAdjustBlr() {
        return adjustBlr;
    }

    public void setAdjustBlr(String adjustBlr) {
        this.adjustBlr = adjustBlr == null ? null : adjustBlr.trim();
    }

    public String getAdjustState() {
        return adjustState;
    }

    public void setAdjustState(String adjustState) {
        this.adjustState = adjustState == null ? null : adjustState.trim();
    }
}