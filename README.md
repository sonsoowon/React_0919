# API 연동 실습

### 실습 환경 구성
```
git clone https://github.com/sonsoowon/React_0919.git

# 백엔드 환경 설정
cd React_0919
cd backend
pipenv install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python json_to_db.py
python manage.py createsuperuser
python manage.py runserver

# localhost:8000 열어놓은 상태로 새로운 터미널창 열기
cd ../frontend # frontend 경로로 이동
npm install
npm start

```

App.js, Lunch.js의 빈칸을 채워주세요

<br/>

### API 가이드
#### 1. Token 발행
1-1) REQUEST
- URL: http://localhost:8000/api-token-auth/
  (http://localhost:8000 생략)
- HTTP Method: POST

|HTTP|항목|TYPE(길이)|Description|
|----|----|--|-------|
|Body|username|char|createsuperuser에서 생성한 username|
|Body|password|char|createsuperuser에서 생성한 password|

1-2) RESPONSE
|HTTP|항목|TYPE(길이)|Description|
|----|----|--|-------|
|Body|token||Lunch data 요청에 사용할 token 값이다|

<br/>

#### 2. Lunch data 조회 요청
2-1) REQUEST
- URL: http://localhost:8000/lunchs
  (http://localhost:8000 생략)
- HTTP Method: GET

|HTTP|항목|TYPE(길이)|Description|
|----|----|--|-------|
|Header|Authorization||입력값: "Token \<token\>" (두 문자 사이에 한칸 띄우기)|
|Parameter|date|char(4)|MMDD|

2-2) RESPONSE
|HTTP|항목|TYPE(길이)|Description|
|----|----|--|-------|
|Body|id|int(1)|고유값|
|Body|date|char(4)|날짜|
|Body|menu|char|점심 메뉴|

<br/>

### REST API에 관한 참고 자료
- [아마존 공식 문서](https://aws.amazon.com/ko/what-is/api/)
- [HTTP 프로토콜](https://www.joinc.co.kr/w/Site/Network_Programing/AdvancedComm/HTTP#google_vignette)
- [비개발자를 위한 API](https://blog.wishket.com/api%EB%9E%80-%EC%89%BD%EA%B2%8C-%EC%84%A4%EB%AA%85-%EA%B7%B8%EB%A6%B0%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8)
- [REST의 Representation이란 무엇인가](https://blog.npcode.com/2017/04/03/rest%EC%9D%98-representation%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80/)
