package com.server.util;

import com.alibaba.druid.util.StringUtils;

import java.text.DecimalFormat;
import java.util.Calendar;

public class CommonUtil {
    private static final String STR_FORMAT = "0000000";//流水号12位长度

    public static String newSerialNum(String prefix, Integer year, String preNum) {
        String suffixNumStr = "0000001";
        if (!StringUtils.isEmpty(preNum)) {
            String preNumStr = preNum.substring(preNum.length() - 7, preNum.length());
            Integer suffixNum = Integer.parseInt(preNumStr) + 1;
            DecimalFormat df = new DecimalFormat(STR_FORMAT);
            suffixNumStr = df.format(suffixNum);//生成七位流水号
        }
        if (null == year) {
            year = Calendar.getInstance().get(Calendar.YEAR);
        }
        return prefix + year + suffixNumStr;
    }
}
