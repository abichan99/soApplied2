# 소응 앉아가자 프로젝트 프론트엔드 코드

https://github.com/abichan99/soApplied2/issues/1#issue-1955331813
사용자가 입력한 호선, 방향(~방면), 승차역, 하차역을 기반으로 앉아갈 확률이 높은 칸 추천

# 앱 화면
![alt text](https://github.com/abichan99/soApplied2/blob/main/so2img1.png?raw=true)
![alt text](https://github.com/abichan99/soApplied2/blob/main/so2img2.png?raw=true)

## 사용 언어 등
 - react
 - tailwind css (css framework)
 - jest (testing library)

## 만든 기능

1. 사용자 선택지 입력란
    - 선택지 리스트를 제공함으로서 사용자의 입력 미스 방지 및 세큐리티 리스크 경감 
    - 선택된 선택지를 바탕으로 다른 선택란의 적절한 선택지를 동적제공
    - 입력치 검증 및 검증 오류 메세지 표시기능 추가
2. 추천 칸 제공하는 서버에 입력값들을 제공
3. 추천 칸 표시기능
    - 추천 할 역 별로 추천칸을 3개씩 표시
    - 각 칸에 대한 앉아갈 확률에 대해 랭크를 매겨 시각화해서 표시
4. 테스트
    - 유닛 테스트 및 통합 테스트 추가
