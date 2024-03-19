# -*- coding: utf-8 -*-
# @Author : Pupper
# @Email  : pupper.cheng@gmail.com
import json

import requests


def get_holiday():
    holiday_dict = {}
    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    }
    res = requests.get("https://timor.tech/api/holiday/year/", headers=headers)

    res_data = json.loads(res.text)
    for holiday in res_data["holiday"].keys():
        name = res_data["holiday"][holiday]["name"]
        date = res_data["holiday"][holiday]["date"]
        if name not in holiday_dict.keys():
            if "补班" not in name and "初" not in name:
                holiday_dict[name] = date
            if name == "初一":
                holiday_dict["春节"] = date
    return holiday_dict


def write_json(holiday_dict):
    with open("./source/specialDay/holiday_dict.json", "w+", encoding="utf-8") as f:
        f.write(json.dumps(holiday_dict, ensure_ascii=False))


if __name__ == "__main__":
    write_json(get_holiday())

