# API 연동 실습

### 실습 환경 구성
```
git clone

cd React_0919
cd backend
pipenv install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python json_to_db.py
python manage.py createsuperuser
python manage.py runserver


```

### API 가이드
1. Token 발행
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


2. Lunch data 조회 요청
2-1) REQUEST
- URL: http://localhost:8000/lunchs
  (http://localhost:8000 생략)
- HTTP Method: GET

|HTTP|항목|TYPE(길이)|Description|
|----|----|--|-------|
|Header|Authorization||입력값: Token <token>|
|Parameter|date|char(4)||

2-2) RESPONSE
|HTTP|항목|TYPE(길이)|Description|
|----|----|--|-------|
|Body|id|int(1)|고유값|
|Body|date|char(4)|날짜|
|Body|menu|char|점심 메뉴|

