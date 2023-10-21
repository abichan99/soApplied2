// 호선명 리스트
export const LINES = ["1호선", "2호선", "3호선", "4호선", "5호선", "6호선", "7호선", "8호선", "9호선", "우이신설선", "신림선", "인천국제공항철도", "경의중앙선"];
// 각 호선 관련된 정보를 담은 오브젝트, LINES안의 모든 요소명을 key값으로 사용해야함
export const INFO_EACH_LINE = {
    // 호선명: {directions: 상행인지 하행인지를 구분지을 종착역을 담은 리스트, stations: 호선에 포함된 역명 리스트}
    // 추가할때 규칙: 분기되는 노선을 가장 밑에둘것, 예를들어서 1호선.stations을 보면 소요산역방면 역리스트는 분기되는노선
    // (인천에서 왓을수도잇고 신창에서 왓을수도잇으니까) 이므로 가장 밑에 놓음
    default: {directions: [], stations: []}, // 호선이 선택되지 않앗을떄
    "1호선": {
        directions: ["인천역방면", "광명역방면", "서동탄역방면", "신창역방면", "소요산역방면"], 
        stations: {인천역방면: ['소요산', '동두천', '보산', '동두천중앙', '지행', '덕정', '덕계', '양주', '녹양', '가능', '의정부', '회룡', '망월사', '도봉산', '도봉', '방학', '창동', '녹천', '월계', '광운대', '석계', '신이문', '외대앞', '회기', '청량리(서울시립대입구)', '제기동', '신설동', '동묘앞', '동대문', '종로5가', '종로3가', '종각', '시청', '서울역', '남영', '용산', '노량진', '대방', '신길', '영등포', '신도림', '구로', '구일', '개봉', '오류동', '온수', '역곡', '소사', '부천', '중동', '송내', '부개', '부평', '백운', '동암', '간석', '주안', '도화', '제물포', '도원', '동인천', '인천'], 
                   광명역방면: ['소요산', '동두천', '보산', '동두천중앙', '지행', '덕정', '덕계', '양주', '녹양', '가능', '의정부', '회룡', '망월사', '도봉산', '도봉', '방학', '창동', '녹천', '월계', '광운대', '석계', '신이문', '외대앞', '회기', '청량리(서울시립대입구)', '제기동', '신설동', '동묘앞', '동대문', '종로5가', '종로3가', '종각', '시청', '서울역', '남영', '용산', '노량진', '대방', '신길', '영등포', '신도림', '구로', '가산디지털단지', '독산', '금천구청', '광명'], 
                   서동탄역방면: ['소요산', '동두천', '보산', '동두천중앙', '지행', '덕정', '덕계', '양주', '녹양', '가능', '의정부', '회룡', '망월사', '도봉산', '도봉', '방학', '창동', '녹천', '월계', '광운대', '석계', '신이문', '외대앞', '회기', '청량리(서울시립대입구)', '제기동', '신설동', '동묘앞', '동대문', '종로5가', '종로3가', '종각', '시청', '서울역', '남영', '용산', '노량진', '대방', '신길', '영등포', '신도림', '구로', '가산디지털단지', '독산', '금천구청', '석수', '관악', '안양', '명학', '금정', '군포', '당정', '의왕', '성균관대', '화서', '수원', '세류', '병점', '서동탄'], 
                   신창역방면: ['소요산', '동두천', '보산', '동두천중앙', '지행', '덕정', '덕계', '양주', '녹양', '가능', '의정부', '회룡', '망월사', '도봉산', '도봉', '방학', '창동', '녹천', '월계', '광운대', '석계', '신이문', '외대앞', '회기', '청량리(서울시립대입구)', '제기동', '신설동', '동묘앞', '동대문', '종로5가', '종로3가', '종각', '시청', '서울역', '남영', '용산', '노량진', '대방', '신길', '영등포', '신도림', '구로', '가산디지털단지', '독산', '금천구청', '석수', '관악', '안양', '명학', '금정', '군포', '당정', '의왕', '성균관대', '화서', '수원', '세류', '병점', '세마', '오산대', '오산', '진위', '송탄', '서정리', '평택지제', '평택', '성환', '직산', '두정', '천안', '봉명', '쌍용(나사렛대)', '아산(선문대)', '탕정', '배방', '온양온천', '신창'],
                   소요산역방면: ["신창", "온양온천", "배방", "아산", "쌍용", "봉명", "천안", "두정", "직산", "성환", "평택", "지제", "서정리", "송탄", "진위", "오산", "오산", "오산대", "세마", "서동탄", "병점", "세류", "수원", "화서", "성균관대", "의왕", "당정", "군포", "금정", "명학", "안양", "관악", "석수", "광명", "금천구청", "독산", "가산디지털단지", "인천", "동인천", "도원", "제물포", "도화", "주안", "간석", "동암", "백운", "부평", "부개", "송내", "중동", "부천", "소사", "역곡", "온수", "오류동", "개봉", "구일", "구로", "신도림", "영등포", "신길", "대방", "노량진", "용산", "남영", "서울역", "시청", "종각", "종로3가", "종로5가", "동대문", "동묘앞", "신설동", "제기동", "청량리", "회기", "외대앞", "신이문", "석계", "광운대", "월계", "녹천", "창동", "방학", "도봉", "도봉산", "망월사", "회룡", "의정부", "가능", "녹양", "양주", "덕계", "덕정", "지행", "동두천중앙", "보산", "동두천", "소요산"]}},
    "2호선": {
        directions: ["시청역방면", "성수역방면", "신설동역방면", "신도림역방면", "까치산역방면"], 
        stations: {시청역방면: ['시청', '을지로입구(IBK기업은행)', '을지로3가', '을지로4가', '동대문역사문화공원', '신당', '상왕십리', '왕 십리(성동구청)', '한양대', '뚝섬', '성수', '건대입구', '구의(광진구청)', '강변(동서울터미널)', '잠실나루', '잠실(송파구청)', '잠실새내', '종합운동장', '삼성(무역센터)', '선릉', '역삼', '강남', '교대(법원·검찰청)', ' 서초', '방배(백석예술대)', '사당', '낙성대(강감찬)', '서울대입구(관악구청)', '봉천', '신림', '신대방', '구로디지털단지(원광디지털대)', '대림(구로구청)', '신도림', '문래', '영등포구청', '당산', '합정(홀트아동복지회)', '홍대입구', '신촌(지하)', '이대', '아현(추계예술대)', '충정로(경기대입구)', '시청(종점)'], 
                   성수역방면: ["신설동", "용두", "신답", "용답", "성수"], 
                   신설동역방면: ['성수', '용답', '신답', '용두', '신설동'], 
                   신도림역방면: ["까치산", "신정네거리", "양천구청", "도림천", "신도림"],
                   까치산역방면: ['신도림', '도림천', '양천구청', '신정네거리', '까치산']}},
    "3호선": {directions: ["오금역방면", "대화역방면"], 
    stations: {오금역방면: ['대화', '주엽', '정발산', '마두', '백석', '대곡', '화정', '원당', '원흥', '삼송', '지축', '구파발(은평성모 병원)', '연신내', '불광', '녹번', '홍제', '무악재', '독립문', '경복궁(정부서울청사)', '안국', '종로3가', '을지로3가(신한카드)', '충무로', '동대입구', '약수', '금호', '옥수', '압구정', '신사', '잠원', '고속터미널', ' 교대(법원·검찰청)', '남부터미널(예술의전당)', '양재(서초구청)', '매봉', '도곡', '대치', '학여울', '대청 (서 울주택도시공사)', '일원', '수서', '가락시장', '경찰병원', '오금'], 
               대화역방면: ['오금', '경찰병원', '가락시장', '수서', '일원', '대청 (서 울주택도시공사)', '학여울', '대치', '도곡', '매봉', '양재(서초구청)', '남부터미널(예술의전당)', ' 교대(법원·검찰청)', '고속터미널', '잠원', '신사', '압구정', '옥수', '금호', '약수', '동대입구', '충무로', '을지로3가(신한카드)', '종로3가', '안국', '경복궁(정부서울청 사)', '독립문', '무악재', '홍제', '녹번', '불광', '연신내', '구파발(은평성모 병원)', '지축', '삼송', '원흥', '원당', '화정', '대곡', '백석', '마두', '정발산', '주엽', '대화']}},
    "4호선": {directions: ["진접역방면", "오이도역방면"], 
    stations: {진접역방면: ['오이도', '정왕', '신길온천', '안산', '초지', '고잔', '중앙', '한대앞', '상록수', '반월', '대야미', '수리산', '산본', '금정', '범계', '평촌', '인덕원', '정부과천청사', '과천', '대공원', '경마공원', '선바위', '남태령', '사당', '총신대입구(이수)', '동작(현충원)', '이촌(국립중앙박물관)', '신용산(아모레퍼시픽)', '삼각 지', ' 숙대입구(갈월)', '서울역', '회현(남대문시장)', '명동(우리금융타운)', '충무로', '동대문역사문화공원', '동대문', '혜화(서울대학교병원)', '한성대입구(삼선교)', '성신여대입구(돈암)', '길음', '미아사거리', '미아(서울사이 버 대학)', '수유(강북구청)', '쌍문', '창동', '노원', '상계', '당고개', '별내별가람', '오남', '진접'], 
               오이도역방면: ['진접', '오남', '별내별가람', '당고개', '상계', '노원', '창동', '쌍문', '수유(강북구청)', '미아(서울사이버 대학)', '미아사거리', '길음', '성신여대입구(돈암)', '한성대입구(삼선교)', '혜화(서울대학교병원)', '동대문', '동대문역사문화공원', '충무로', '명동(우리금융타운)', '회현(남대문시장)', '서울역', '숙대입구(갈월)', '삼각 지', '신용산(아모레퍼시픽)', '이촌(국립중앙박물관)', '동작(현충원)', '총신대입구(이수)', '사당', '남태령', '선바위', '경마공원', '대공원', '과천', '정부과천청사', '인덕원', '평촌', '범계', '금정', '산본', '수리산', '대야미', '반월', '상록수', '한대앞', '중앙', '고잔', '초지', '안산', '신길온천', '정왕', '오이도']}},
    "5호선": {directions: ["하남검단산역방면", "마천역방면", "방화역방면"], 
    stations: {하남검단산역방면: ['방화', '개화산', '김포공항', '송정', '마곡(홈앤쇼핑)', '발산', '우장산', '화곡', '까치산', '신정(은행정)', '목동', '오목교(목동운동장앞)', '양평', '영등포구청', '영등포시장', '신길', '여의도', '여의나루', '마포', '공덕', '애오개', '충정로(경기대입구)', '서대문(강북삼성병원)', '광화문(세종문화회관)', '종로3가(탑골공원·인 사동 문화거리)', '을지로4가', '동대문역사문화공원', '청구', '신금호', '행당', '왕십리(성동구청)', '마장', ' 답십리', '장한평', '군자(능동)', '아차산(어린이대공원후문)', '광나루(장신대)', '천호(풍납토성)', '강동', '길동', '굽은다리(강동구민회관앞)', '명일', '고덕(강동경희대병원)', '상일동', '강일', '미사', '하남풍산', '하남시청', '하남검단산'], 
               마천역방면: ['방화', '개화산', '김포공항', '송정', '마곡(홈앤쇼핑)', '발산', '우장산', '화곡', '까치산', '신정(은행정)', '목동', '오목교(목동운동장앞)', '양평', '영등포구청', '영등포시장', '신길', '여의도', '여의나루', '마포', '공덕', '애오개', '충정로(경기대입구)', '서대문(강북삼성병원)', '광화문(세종문화회관)', '종로3가(탑골공원·인 사동 문화거리)', '을지로4가', '동대문역사문화공원', '청구', '신금호', '행당', '왕십리(성동구청)', '마장', ' 답십리', '장한평', '군자(능동)', '아차산(어린이대공원후문)', '광나루(장신대)', '천호(풍납토성)', '강동', '둔촌동', '올림픽공원(한국체대)', '방이', '오금', '개롱', '거여', '마천'], 
               방화역방면: ['마천', '개화산', '김포공항', '송정', '마곡(홈앤쇼핑)', '발산', '우장산', '화곡', '까치산', '신정(은행정)', '목동', '오목교(목동운동장앞)', '양평', '영등포구청', '영등포시장', '신길', '여의도', '여의나루', '마포', '공덕', '애오개', '충정로(경기대입구)', '서대문(강북삼성병원)', '광화문(세종문화회관)', '종로3가(탑골공원·인 사동 문화거리)', '을지로4가', '동대문역사문화공원', '청구', '신금호', '행당', '왕십리(성동구청)', '마장', ' 답십리', '장한평', '군자(능동)', '아차산(어린이대공원후문)', '광나루(장신대)', '천호(풍납토성)', '강동', '길동', '굽은다리(강동구민회관앞)', '명일', '고덕(강동경희대병원)', '상일동', '강일', '미사', '하남풍산', '하남시청', '하남검단산', '둔촌동', '올림픽공원(한국체대)', '방이', '오금', '개롱', '거여', '방화']}},
    "6호선": {directions: ["신내역방면", "응암역방면"], 
    stations: {신내역방면: ['응암', '역촌', '불광', '독바위', '연신내', '구산', '응암(새절방면)', '새절(신사)', '증산(명지대앞)', '디지털미디어시티', '월드컵경기장(성산)', '마포구청', '망원', '합정', '상수', '광흥창(서강)', '대흥(서강대앞)', '공덕', '효창공원앞', '삼각지', '녹사평(용산구청)', '이태원', '한강진', '버티고개', '약수', '청구', '신당', '동묘앞', '창신', '보문', '안암(고대병원앞)', '고려대(종암)', '월곡(동덕여대)', '상월곡(한국과학기술연구원)', '돌곶이', '석계', '태릉입구', '화랑대(서울여대입구)', '봉화산(서울의료원)', '신내'], 
               응암역방면: ['신내', '봉화산(서울의료원)', '화랑대(서울여대입구)', '태릉입구', '석계', '돌곶이', '상월곡(한국과학기술연구원)', '월곡(동덕여대)', '고려대(종암)', '안암(고대병원앞)', '보문', '창신', '동묘앞', '신당', '청구', '약 수', '버티고개', '한강진', '이태원', '녹사평(용산구청)', '삼각지', '효창공원앞', '공덕', '대흥(서강대앞)', '광흥창(서강)', '상수', '합정', '망원', '마포구청', '월드컵경기장(성산)', '디지털미디어시티', '증산(명지대앞)', '새절(신사)', '응암(구산방면)', '구산', '연신내', '독바위', '불광', '역촌', '응암']}},
    "7호선": {directions: ["장암역방면", "석남역방면"], 
    stations: {장암역방면: ['석남(거북시장)', '산곡', '부평구청 (세림병원)', '굴포천', '삼산체육관', '상동', '부천시청', '신중동', '춘의', '부천종합운동장', '까치울', '온수(성공회대입구)', '천왕', '광명사거리', '철산', '가산디지털단지(마리오 아울렛)', '남구로', '대림(구로구청)', '신풍', '보라매', '신대방삼거리', '장 승배기', '상도', '숭실대입구(살 피재)', '남성', '이수(총신대입구)', '내방', '고속터미널', '반포', '논현', '학동', '강남구청', '청담(한국금거래소)', '뚝섬유원지', '건대입구', '어린이대공원(세종대)', '군자(능동)', '중곡', '용마산(용마폭포공원)', '사 가정(녹색병원)', '면목', '상봉(시외버스터미널)', '중화', '먹골', '태릉입구', '공릉(서울과학기술대)', '하계( 을지대 을지병원)', '중계(한국성서대)', '노원', '마들', '수락산', '도봉산', '장암'], 
               석남역방면: ['장암', '도봉산', '수락산', '마들', '노원', '중계(한국성서대)', '하계(을지대 을지병원)', '공릉(서울과학기술대)', '태릉입구', '먹골', '중화', '상봉(시외버스터미널)', '면목', '사가정(녹색병원)', '용마산(용마폭포공원)', '중곡', '군자(능동)', '어린이대공원(세종대)', '건대입구', '뚝섬유원지', '청담(한국금거래소)', '강남구청', '학동', '논현', '반포', '고속터미널', '내방', '이수(총신대입구)', '남성', '숭실대입구(살피재)', '상도', '장 승배기', '신대방삼거리', '보라매', '신풍', '대림(구로구청)', '남구로', '가산디지털단지(마리오아울렛)', '철산', '광명사거리', '천왕', '온수(성공회대입구)', '까치울', '부천종합운동장', '춘의', '신중동', '부천시청', '상동', '삼산체육관', '굴포천', '부평구청 (세림병원)', '산곡', '석남']}},
    "8호선": {directions: ["암사역방면", "모란역방면"], 
    stations: {암사역방면: ['모란', '수진', '신흥', '단대오거리', '남한산성입구', '산성', '남위례', '복정', '장지', '문정', '가락시장', '송파', '석촌', '잠실', '몽촌토성', '강동구청', '천호', '암사'], 
               모란역방면: ['암사', '천호', '강동구청', '몽촌토성', '잠실', '석촌', '송파', '가락시장', '문정', '장지', '복정', '남위례', '산성', '남한산성입구', '단대오거리', '신흥', '수진', '모란']}},
    "9호선": {directions: ["개화역방면", "중앙보훈병원역방면"], 
    stations: {개화역방면: ['중앙보훈병원', '둔촌오륜', '올림픽공원(한국체대)', '한성백제', '송파나루', '석촌', '석촌고분', '삼전', '종합운동장', '봉은사', '삼성중앙', '선정릉', '언주(강남차병원)', '신논현', '사평', '고속터미널', '신반포', '구반포', '동작(현충원)', ' 흑석(중앙대입구)', '노들', '노량진', '샛강(KB금융타운)', '여의도', '국회의사당(KDB 산업은행)', '당산', '선유도', '신목동', '염창', '등촌', '증미', '가양', '양천향교', '마곡나루(서울식물원)', '신방화', '공항시장', '김포공항', '개화'], 
               중앙보훈병원역방면: ['개화', '김포공항', '공항시장', '신방화', '마곡나루(서울식물원)', '양천향교', '가양', '증미', '등촌', '염창', '신목동', '선유도', '당산', '국회의사당(KDB산업은행)', '여의도', '샛강(KB금융타운)', '노량진', '노들', ' 흑석(중앙대입구)', '동작(현충원)', '구반포', '신반포', '고속터미널', '사평', '신논현', '언주(강남차병원)', '선정릉', '삼성중앙', '봉은사', '종합운동장', '삼전', '석촌고분', '석촌', '송파나루', '한성백제', '올림픽공원(한국체대)', '둔촌오륜', '중앙보훈병원']}},
    "우이신설선": {directions: ["북한산우이역방면", "신설동역방면"], 
    stations: {북한산우이역방면: ['신설동', '보문', '성신여대입구(돈암)', '정릉(국민대입구)', '북한산보국문(서경대)', '솔샘', '삼양사거리', '삼양', '화계', '가오리', '4.19민주묘지(덕성여대)', '솔밭공원', '북한산우이'], 
               신설동역방면: ['북한산우이(도선사입구)', '솔밭공원', '4.19민주묘지(덕성여대)', '가오리', '화계', '삼양', '삼양사거리', '솔샘', '북한산보국문(서경대)', '정릉(국민대입구)', '성신여대입구(돈암)', '보문', '신설동']}},
    "신림선": {directions: ["샛강역방면", "관악산역방면"], 
    stations: {샛강역방면: ['관악산', '서울대벤처타운', '서원', '신림', '당곡', '보라매병원(전문건설회관)', '보라매공원', '보라매', '서울지방병무청', '대방(성애병원)', '샛강'], 
               관악산역방면: ['샛강', '대방(성애병원)', '서울지방병무청', '보라매', '보라매공원', '보라매병원(전문건설회관)', '당곡', '신림', '서원', '서울대벤처타운', '관악산']}},
    "인천국제공항철도": {directions: ["서울역방면", "인천공항2터미널역방면"], 
    stations: {서울역방면: ['인천공항2터미널', '인천공항1터미널', '공항화물청사', '운서', '영종', '청라국제도시', '검암', '계양', '김포공항', '마곡나루', '디지털미디어시티', '홍대입구', '공덕', '서울'], 
               인천공항2터미널역방면: ['서울', '공덕', '홍대입구', '디지털미디어시티', '마곡나루', '김포공항', '계양', '검암', '청라국제도시', '영종', '운서', '공항화물청사', '인천공항1터미널', '인천공항2터미널']}},
    "경의중앙선": {directions: ["문산역방면", "서울역방면", "지평역방면"], 
    stations: {서울역방면: ['문산', '파주', '월롱', '금촌', '금릉', '운정', '야당', '탄현', '일산', '풍산', '백마', '곡산', '대곡', '능곡', '행신', '강매', '화전', '수색', '디지털미디어시티', '가좌', '신촌', '서울'], 
               지평역방면: ['문산', '파주', '월롱', '금촌', '금릉', '운정', '야당', '탄현', '일산', '풍산', '백마', '곡산', '대곡', '능곡', '행신', '강매', '화전', '수색', '디지털미디어시티', '가좌', '홍대입구', '서강대', '공덕', '효창공원앞', '용산', '이촌', '서빙고', '한남', '옥수', '응봉', '왕십리', '청량리', '회기', '중랑', '상봉', '망우', '양원', '구리', '도농', '양정', '덕소', '도심', '팔당', '운길산', '양수', '신원', '국수', '아신', '오빈', '양평', '원덕', '용문', '지평'],
               문산역방면: ['문산', '파주', '월롱', '금촌', '금릉', '운정', '야당', '탄현', '일산', '풍산', '백마', '곡산', '대곡', '능곡', '행신', '강매', '화전', '수색', '디지털미디어시티', '가좌', '홍대입구', '서강대', '공덕', '효창공원앞', '용산', '이촌', '서빙고', '한남', '옥수', '응봉', '왕십리', '청량리', '회기', '중랑', '상봉', '망우', '양원', '구리', '도농', '양정', '덕소', '도심', '팔당', '운길산', '양수', '신원', '국수', '아신', '오빈', '양평', '원덕', '용문', '지평', '신촌', '서울']}},
};