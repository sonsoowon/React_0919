import json
import os
import django

# django project 생성 시 자동으로 생성되는 모듈 외의 파일의 사용할 때 설정
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

from app.models import Lunch
from django.contrib.auth.models import User

with open('lunch.json') as f:
    json_arr = json.load(f)

    for data in json_arr:
        Lunch.objects.get_or_create(
            date=data['date'], 
            menu=data['menu'])
