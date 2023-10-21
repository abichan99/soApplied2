import requests
from bs4 import BeautifulSoup

url = "https://ko.wikipedia.org/wiki/%EC%88%98%EB%8F%84%EA%B6%8C_%EC%A0%84%EC%B2%A0_%EA%B2%BD%EC%9D%98%C2%B7%EC%A4%91%EC%95%99%EC%84%A0"
tbodySelector = "#mw-content-text > div.mw-parser-output > table:nth-child(49) > tbody"

response = requests.get(url)

if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html, 'lxml') # html.parser로 하면 잘 안됨
    # get all stations
    stationList = []
    table = soup.select_one(tbodySelector)
    rows = table.select("tr")
    for row in rows:
        station = row.select_one("td:nth-child(2) > a")
        if (station!=None):
            stationList.append(station.string)
            continue
        station = row.select_one("td:nth-child(3) > a")
        if (station!=None):
            stationList.append(station.string)
    print(len(stationList))
    print(stationList)
else : 
    print(response.status_code)

# print(len(["신창", "온양온천", "배방", "아산", "쌍용", "봉명", "천안", "두정", "직산", "성환", "평택", "지제", "서정리", "송탄", "진위", "오산", "오산", "오산대", "세마", "서동탄", "병점", "세류", "수원", "화서", "성균관대", "의왕", "당정", "군포", "금정", "명학", "안양", "관악", "석수", "광명", "금천구청", "독산", "가산디지털단지", "인천", "동인천", "도원", "제물포", "도화", "주안", "간석", "동암", "백운", "부평", "부개", "송내", "중동", "부천", "소사", "역곡", "온수", "오류동", "개봉", "구일", "구로", "신도림", "영등포", "신길", "대방", "노량진", "용산", "남영", "서울역", "시청", "종각", "종로3가", "종로5가", "동대문", "동묘앞", "신설동", "제기동", "청량리", "회기", "외대앞", "신이문", "석계", "광운대", "월계", "녹천", "창동", "방학", "도봉", "도봉산", "망월사", "회룡", "의정부", "가능", "녹양", "양주", "덕계", "덕정", "지행", "동두천중앙", "보산", "동두천", "소요산"]))